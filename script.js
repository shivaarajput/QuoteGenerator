const hindiButton = document.getElementById('hindiButton');
const englishButton = document.getElementById('englishButton');
const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quoteText');

async function generateQuote() {
  try {
    let d = await fetch("https://api.adviceslip.com/advice");
    let p = await d.json();
    let randomQuote = p["slip"]["advice"];
    quoteText.textContent = randomQuote;
    quoteContainer.style.display = 'block';
    quoteContainer.classList.add('glassmorphism-background');
  } catch (error) {
    console.log('Error fetching quote:', error);
  }
}


async function generateHindi() {
  try {
    let d = await fetch("https://hindi-quotes.vercel.app/random");
    let p = await d.json();
    let randomQuote = p["quote"];
    quoteText.textContent = randomQuote;
    quoteContainer.style.display = 'block';
    quoteContainer.classList.add('glassmorphism-background');
  } catch (error) {
    console.log('Error fetching quote:', error);
  }
}

generateQuote();
