import './style.css'

const quoteBtn = document.querySelector('#quote-btn');
const catInput = document.querySelector<HTMLInputElement>('#category-input');

// Make an http GET request to our Express server route '/api/quote' and get back a quote
async function getQuote() {
  const quoteOutput = document.querySelector<HTMLElement>('.quote');
  const category = catInput?.value;
  const resObj = await fetch(`/api/quote?cat=${category}`);
  const data = await resObj.json();

  if (data.quote && quoteOutput) {
    quoteOutput.style.color = 'initial';
    quoteOutput.innerText = `"${data.quote}"`;
  } else if (data.message && quoteOutput) {
    quoteOutput.style.color = 'red';
    quoteOutput.innerText = data.message;
  }
}

quoteBtn?.addEventListener('click', getQuote);
catInput?.addEventListener('keydown', (eventObj) => {
  if (eventObj.key === 'Enter') {
    getQuote();
  }
})
