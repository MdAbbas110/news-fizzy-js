const API_KEY = 'dc9829d0f64a4f2596c2f366a1b4fe7c';
const url = 'https://newsapi.org/v2/everything?q=';
const urlBBc =
  'https://newsapi.org/v2/top-headlines?' +
  'sources=bbc-news&' +
  'apiKey=dc9829d0f64a4f2596c2f366a1b4fe7c';

window.addEventListener('load', () => fetchNews('India'));

function reload() {
  window.location.reload();
}

function reload() {
  window.location.reload();
}

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  bindData(data.articles);
}

function bindData(articles) {
  const cardsContainer = document.getElementById('cards-container');
  const newsCardTemplate = document.getElementById('template-news-card');

  cardsContainer.innerHTML = '';

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector('#news-img');
  const newsTitle = cardClone.querySelector('#news-title');
  const newsSource = cardClone.querySelector('#news-source');
  const newsDesc = cardClone.querySelector('#news-desc');

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML.description;

  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    timeZone: 'Asia/jakarta',
  });

  newsSource.innerHTML = `${article.source.name} ° ${date}`;

  cardClone.firstElementChild.addEventListener('click', () => {
    window.open(article.url, '_blank');
  });
}

function onNavItemClick(id) {
  fetchNews(id);
}

const searchInput = document.getElementById('search-text');
const searchLogo = document.getElementById('eye');

searchLogo.addEventListener('click', () => {
  const query = searchInput.value;
  if (!query) return;

  fetchNews(query);
});
