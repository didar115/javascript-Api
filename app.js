const loadQuotes = () => {
    fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(data => displayQuote(data));
}


const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quote.quote;
    
}





// collect user name and email from an api 


const userbuddy = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(data => displayBuddies(data));
}


const displayBuddies = data => {
    
    const divId = document.getElementById('quote-div');
  console.log(data);
    const buddies = data.results;
    for (const frnd of buddies) {
          const p = document.createElement("p");
        p.innerText = `
        Name: ${frnd.name.first} ${frnd.name.last}
         Email: ${frnd.email}
        `;
        divId.appendChild(p);
    }


}

userbuddy();


