import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const returnError = () => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      error: `something went wrong`,
    }),
  };
};

export const handler: Handler = async (event, context) => {
  // @ts-ignore
  const { slug } = event.queryStringParameters;

  // big old try catch because I really don't want anything solid for error tracking
  try {
    switch (event.httpMethod) {
      // get the view count, the cfw will increment the count on this as well.
      case 'GET':
        if (slug) {
          const response = await fetch(
            `${process.env.CFW_VIEW_ENDPOINT}?slug=${slug}`
          );
          const data = await response.json();
          return {
            statusCode: 200,
            body: JSON.stringify(data),
          };
        }
        break;
    }
  } catch (err) {
    return returnError();
  }

  // default return error
  return returnError();
};
