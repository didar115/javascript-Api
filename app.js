const loadQuotes = () => {
    fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(data => displayQuote(data));
}


const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quote.quote;
    
}