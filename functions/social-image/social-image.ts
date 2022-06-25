import { Handler } from '@netlify/functions';
import fs from 'fs/promises';

import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';
import nunjucks from 'nunjucks';

type HTMLType = 'post' | 'page';
type HTMLContent = {
  title: string;
  description?: string;
  image?: string;
  pubDate?: Date | string;
  readTime?: string;
};

/**
 * renders a nunjucks template using the passed in template type,
 * and the variables / html content.
 *
 * @param type template name
 * @param content content for the template
 * @returns {Promise<string>} an html string
 */
const renderNunjucksTemplate = async (
  type: HTMLType,
  content: HTMLContent
): Promise<string> => {
  // get nunjucks template as text
  const fileText = await fs.readFile(`./templates/${type}.html`, {
    encoding: 'utf-8',
  });

  // render nunjucks template to string
  nunjucks.configure({});
  return nunjucks.renderString(fileText, content);
};

/**
 * renders an html document in the browser and returns
 * the screenshot as a buffer
 *
 * @param htmlCode the html string to render in browser
 * @returns {Promise<Buffer | void | undefined>}
 */
const renderHTML = async (htmlCode: string): Promise<any> => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: true,
  });
  const page = await browser.newPage();
  await page.setContent(htmlCode);
  await page.setViewport({ width: 1200, height: 630 });
  return await page.screenshot({});
};

export const handler: Handler = async (event, context) => {
  const {
    title = 'mykal.codes',
    description = 'no description provided',
    type = 'page',
    pubDate = new Date(),
    readTime = 'about 3 minutes',
  } = event.queryStringParameters;

  // generate html and take screenshot
  const html = await renderNunjucksTemplate(type, {
    title,
    description,
    pubDate: new Date(pubDate),
    readTime,
  });
  const screenshot = await renderHTML(html);

  // return screenshot as png
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/png',
    },
    body: screenshot.toString('base64'),
    isBase64Encoded: true,
  };
};
