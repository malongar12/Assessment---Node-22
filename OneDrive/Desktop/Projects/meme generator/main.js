const generateBtn = document.querySelector('.meme-btn');
const memeImage = document.querySelector('.meme-generator img');
const memeTitle = document.querySelector('.meme-generator .meme-title')
const memeAutor = document.querySelector('.meme-generator .meme-autor')

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAutor.innerHTML = author
}




const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response) =>  Response.json())
        .then(data => {
            updateDetails(data.url, data.title, data.author)

        })

}



generateBtn.addEventListener("click", generateMeme)