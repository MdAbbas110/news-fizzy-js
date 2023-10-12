const url =
  'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=dc9829d0f64a4f2596c2f366a1b4fe7c';

const urlBBc =
  'https://newsapi.org/v2/top-headlines?' +
  'sources=bbc-news&' +
  'apiKey=dc9829d0f64a4f2596c2f366a1b4fe7c';

async function getData() {
  let api = await fetch(urlBBc);
  let res = await api.json();
  console.log(res);

  let;
}

getData();
