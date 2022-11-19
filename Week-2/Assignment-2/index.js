console.log('Assignment 2');


const containerElement = document.getElementById("box__container");

const redBox = document.getElementById("red")
const yellowBox = document.getElementById("yellow")
const blueBox = document.getElementById("blue")
const greenBox = document.getElementById("green")


containerElement.addEventListener("mouseover",function(event){
    console.log('event.target', event.target)
    redBox.style.transform = `rotate(90deg) translate(0,200px)`;
    yellowBox.style.transform = `rotate(-90deg) translate(0,200px)`;
    blueBox.style.transform = `rotate(-90deg) translate(0,-200px)`;
    greenBox.style.transform = `rotate(90deg) translate(0,-200px)`;
})

containerElement.addEventListener("mouseout",function(event){
    console.log('event.target', event.target)
    redBox.style.transform = `rotate(0deg) translate(0,0)`;
    yellowBox.style.transform = `rotate(0deg) translate(0,0)`;
    blueBox.style.transform = `rotate(0deg) translate(0,0)`;
    greenBox.style.transform = `rotate(0deg) translate(0,0)`;
})