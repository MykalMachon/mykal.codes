// @ts-ignore
import React from 'https://esm.sh/react@18.2.0';

// @ts-ignore
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts';

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);

  // header info
  const type = searchParams.get('type');

  // primary info
  const title = searchParams.get('title');
  const description = searchParams.get('desc');

  // attributes
  const readTime = searchParams.get('readTime');
  const pubDate = searchParams.get('pubDate');
  const primaryTag = searchParams.get('tag');

  return new ImageResponse({
    element: (
      <PageComponent
        type={type}
        title={title}
        description={description}
        readTime={readTime}
        pubDate={pubDate}
        primaryTag={primaryTag}
      />
    ),
  });
}

const PageComponent = ({
  type,
  title,
  description,
  readTime,
  pubDate,
  primaryTag,
}) => {
  return (
    <div>
      <div>
        <p>Mykal Machon - {type || 'Page'}</p>
      </div>
      <div>
        <h1>{title || "Mykal Machon's Digital Garden"}</h1>
        <p>{description || "Where I post about whatever I'm doing."}</p>
      </div>
      <div>
        {readTime && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <small>Reading Time</small>
              <p>{readTime}</p>
            </div>
          </div>
        )}
        {pubDate && (
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <div>
              <small>Published on</small>
              <p>{pubDate}</p>
            </div>
          </div>
        )}
        {primaryTag && (
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <div>
              <small>Tags</small>
              <p>{primaryTag}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
