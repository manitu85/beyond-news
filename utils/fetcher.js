export const fetcher = async url => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
      // credentials: 'same-origin'
    }
  });
  return res.json();
};

// const fetcher = await fetch(
//   `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page}`,
//   {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
//     }
//   }
// );
