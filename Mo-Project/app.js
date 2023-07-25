const Button = document.querySelector("#btn");

Button.addEventListener("click", function(){
const textInput = document.querySelector("#input").value;
const text = document.createTextNode(textInput);
const li = document.createElement('li');
li.appendChild(text);
document.querySelector("#newDiv").appendChild(li);






const newBtn = document.createElement("Button");
newBtn.className = "delete";
newBtn.appendChild(document.createTextNode('X'))
li.appendChild(newBtn)

newBtn.addEventListener('click', function(event){
    event.target.parentNobe.remove()
})



})