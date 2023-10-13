const key = 'dc9829d0f64a4f2596c2f366a1b4fe7c';
const url = 'https://newsapi.org/v2/everything?q=';
const urlBBc =
  'https://newsapi.org/v2/top-headlines?' +
  'sources=bbc-news&' +
  'apiKey=dc9829d0f64a4f2596c2f366a1b4fe7c';

window.addEventListener('load', () => getData('sports'));

async function getData(query) {
  let api = await fetch(`${url}${query}&apiKey=${key}`);
  let res = await api.json();
  bindData(res.articles);
}

function bindData(articles) {
  const cards = document.querySelector('.cards-container');
  const template = document.querySelector('#template');

  cards.innerHTML = '';

  articles.forEach((article) => {
    if (!article.urlToImage) return;

    const cardClone = template.content.cloneNode(true);
    cards.appendChild(cardClone);
  });
}
