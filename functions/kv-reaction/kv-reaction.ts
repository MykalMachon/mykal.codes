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
  const { slug, reaction } = event.queryStringParameters;

  // big old try catch because I really don't want anything solid for error tracking
  try {
    switch (event.httpMethod) {
      case 'GET':
        if (slug) {
          const response = await fetch(
            `${process.env.CFW_REACTION_ENDPOINT}?slug=${slug}`
          );
          const data = await response.json();
          return {
            statusCode: 200,
            body: JSON.stringify(data),
          };
        }
        break;

      case 'POST':
        if (slug && reaction) {
          const response = await fetch(
            `${process.env.CFW_REACTION_ENDPOINT}/?slug=${slug}&reaction=${reaction}`,
            { method: 'POST' }
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
