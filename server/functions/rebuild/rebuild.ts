import { Handler, HandlerEvent, HandlerContext, schedule } from "@netlify/functions";

const myHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  console.log(`Started at ${new Date()}`)
  console.log("Received event:", event);
  console.log("Received context", context)
  // @ts-ignore
  await fetch(process.env.BUILD_HOOK, { method: 'POST' });
  return {
    statusCode: 200,
  };
};

const handler = schedule("0 6,12,18 * * *", myHandler)

export { handler };
