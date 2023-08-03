const gifArea = $('#gif')
const text = $('#search')
const $searchInput = $("#search");



function gif(res) {
  let Results = res.data.length;
  if (Results) {
    let randomIdx = Math.floor(Math.random() * Results);
    let $Col = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $Col.append($newGif);
    gifArea.append($Col);
  }
}



$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = text.val();
  text.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  gif(response.data);
});


$("#remove").on("click", function() {
  $gifArea.empty();
});