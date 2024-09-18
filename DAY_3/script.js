async function fetchQuotes() {
  try {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    const quotes = data.quotes;

    const quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML = '';

    quotes.forEach(quote => {
      const quoteElement = document.createElement('div');
      quoteElement.innerHTML = `
        <h2>${quote.author}</h2>
        <p>"${quote.quote}"</p>
      `;
      quotesContainer.appendChild(quoteElement);
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }
}

fetchQuotes();