const quoteButton = document.getElementById('quoteButton');
const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quoteText');

quoteButton.addEventListener('click', generateQuote);

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


