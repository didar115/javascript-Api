const loadQuotes = () => {
	fetch("https://api.kanye.rest")
		.then((res) => res.json())
		.then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
	const quoteElement = document.getElementById("quote");
	quoteElement.innerHTML = quote.quote;
};

// collect user name and email from an api

const userbuddy = () => {
	fetch("https://randomuser.me/api/?results=10")
		.then((res) => res.json())
		.then((data) => displayBuddies(data));
};

const displayBuddies = (data) => {
	const divId = document.getElementById("quote-div");
	const buddies = data.results;
	for (const frnd of buddies) {
		const p = document.createElement("p");
		p.innerText = `
        Name: ${frnd.name.first} ${frnd.name.last}
         Email: ${frnd.email}
        `;
		divId.appendChild(p);
	}
};
userbuddy();

//displaying all countries api

const allCountries = () => {
	fetch("https://restcountries.eu/rest/v2/all")
		.then((res) => res.json())
		.then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
	//this one also be use but we learn forEach now bcz forEach works fine in map,filter array
	// for (const country of data) {
	//     console.log(country.name);
	// }
    // console.log(countries);
	const countryDiv = document.getElementById("countries");
    countries.forEach((element) => {
        // console.log(element.name);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${element.name}</h3>
        <p>${element.capital}</p>
        <button onclick="countryDetails('${element.name}')">Details</button>
        `;
        countryDiv.appendChild(div);
	});
};

const countryDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]));

    
}

const displayDetails = (data) => {
    
    const div = document.getElementById('details');
    div.innerHTML = `
    <h4 color: "green">${data.name}</h4>
    <h5>capital: ${data.capital}</h5>
    <p>population:${data.population}</p>
    <img width="250px" src="${data.flag}">
    `;
    // console.log(data.capital);
    
}

allCountries();
