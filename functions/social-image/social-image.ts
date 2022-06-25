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
};

const renderNunjucksTemplate = async (
  type: HTMLType,
  content: HTMLContent
): Promise<string> => {
  nunjucks.configure({});
  // get file needed
  const fileText = await fs.readFile(`./templates/${type}.html`, {
    encoding: 'utf-8',
  });
  // generate the file as needed
  const generatedHTML = nunjucks.renderString(fileText, content);
  return generatedHTML;
};

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
  // decipher passed in props
  const {
    title = 'mykal.codes',
    description = 'no description provided',
    type = 'page',
  } = event.queryStringParameters;

  // generate html
  const html = await renderNunjucksTemplate(type, { title, description });
  // take screenshot
  const screenshot = await renderHTML(html);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/png',
    },
    body: screenshot.toString('base64'),
    isBase64Encoded: true,
  };
};
