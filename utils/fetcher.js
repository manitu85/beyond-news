import { resolveHref } from 'next/dist/next-server/lib/router/router';

export const fetcher = async url => {
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
    }
  });

  if (res.status == 200) {
    return res.json();
  }
};
