import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async (event, context) => {
  try {
    // get the form contents and parse them as json
    // const { payload } = JSON.parse(event.body);

    // get the discord webhook url
    const webhookUrl = process.env.WEBHOOK_URL;
    console.log("new form submission, attempting to send discord ping");
    console.log(webhookUrl);

    // send contact to my discord
    fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify({
        content: `You recieved a new contact form submssion. Look in Netlify for details`,
      }),
    });
    return {
      statusCode: 200,
    };
  } catch (err) {
    return {
      statusCode: 500,
      error: err,
    };
  }
};

export { handler };
