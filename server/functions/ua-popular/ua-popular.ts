import fetch from 'node-fetch';
import { Handler } from '@netlify/functions';

const uaUrl = process.env.UA_URL;

const getBearer = async (username: string, password: string) => {
  const res = await fetch(`${uaUrl}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const data = await res.json();
  // @ts-ignore
  const { token } = data;
  return token;
};

const getTopPages = async (token: string) => {
  const siteId = process.env.UA_SITE_ID;
  
  // create a timeline
  const now = new Date().getTime();
  const dateOffset = 60 * 60 * 24 * 1000 * 30; // 30 days
  const past = new Date().setTime(now - dateOffset);

  console.log(`now date: ${new Date(now).toLocaleDateString()}`)
  console.log(`then date: ${new Date(past).toLocaleDateString()}`)

  // create a fetch url
  const baseUrl = `${uaUrl}/api/websites/${siteId}/metrics`;
  const paramUrl = new URL(
    `${baseUrl}?type=url&start_at=${past}&end_at=${now}`
  );
  const fetchUrl = paramUrl.toString();


  // get all page metrics
  const res = await fetch(fetchUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  type Metric = {
    x: string;
    y: number;
  }

  const data = await <Promise<Metric[]>>res.json();
  
  // create a regex to identify post pages
  const postRegex = new RegExp(/^\/garden\/[a-z]{1,}/);
  
  // filter down to only contain post pages
  const topPosts = data.filter(({x}) => postRegex.test(x))

  return topPosts;
};

export const handler: Handler = async (event, context) => {
  try {
    // get the authentication token from umami
    const token = await getBearer(
      process.env.UA_USER || '',
      process.env.UA_PASS || ''
    );

    // get the top pages from umami analytics.
    const topPosts = await getTopPages(token);

    // return a list of the top pages from umami analytics
    return {
      statusCode: 200,
      headers: {
        'Cache-Control': 'max-age=600, must-revalidate' // set the response to cache for 10 minutes
      },
      body: JSON.stringify({
        posts: topPosts,
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'could not fetch popular posts.',
      }),
    };
  }
};
