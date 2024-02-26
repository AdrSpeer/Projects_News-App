const search = (event) => {
  event.preventDefault();
  const sprachen = document.querySelector("#sprache").value;
  const sort = document.querySelector("#sort").value;
  const textInput = document.querySelector("#text-input").value;
  const output = document.querySelector(".output");
  const error = document.querySelector(".error");
  fetch(
    `https://newsapi.org/v2/everything?q=${textInput}&sortBy=${sort}&language=${sprachen}&apiKey=10d0a1842575497d98714f823c277e57`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = "";

      if (data.articles.length >= 1) {
        data.articles.forEach((singleData) => {
          let description = singleData.title;
          let content = singleData.content;
          let image = singleData.urlToImage;
          let readMore = singleData.url;
          output.innerHTML += `
      <div>
      <h2> ${description} </h2>
      <p> ${content} </p>
      <img src="${image}" >
      <a href="${readMore}" target='_blank'>Zum Artikel</a>
      </div>
      `;
        });
      } else {
        error.innerHTML =
          "<h3>Kein Ergbnis gefunden, bitte einen anderen Suchbegriff verwenden</h3>";
      }
    })
    .catch((error) => console.error("Fehler beim laden der News API", error));
};
