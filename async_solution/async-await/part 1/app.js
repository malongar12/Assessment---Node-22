let favNumber = 6;
let numURL = "http://numbersapi.com";


//1. 
$.getJSON(`${numURL}/${favNumber}?json`).then(data => {
    console.log(data);
  });


//2.

let favNumbers = [4, 10, 16];
$.getJSON(`${numURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});


//3.

Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${numURL}/${favNumber}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });