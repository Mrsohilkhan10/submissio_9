const apiKey = "YOUR_API_KEY"

const newsContainer = document.getElementById("newsContainer")

async function getNews(topic){

newsContainer.innerHTML = "Loading..."

let url = `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${apiKey}`

let response = await fetch(url)

let data = await response.json()

displayNews(data.articles)

}

function displayNews(articles){

newsContainer.innerHTML = ""

articles.forEach(article => {

let card = document.createElement("div")

card.classList.add("card")

card.innerHTML = `

<img src="${article.urlToImage}">
<h3>${article.title}</h3>
<p>${article.description}</p>
<a href="${article.url}" target="_blank">Read More</a>

`

newsContainer.appendChild(card)

})

}

window.onload = function(){

getNews("technology")

}
