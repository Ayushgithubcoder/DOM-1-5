/**
 * Write your challenge solution here
 */
const red= document.querySelector("#redButton")

const green= document.querySelector("#greenButton")

const blue= document.querySelector("#blueButton")

const purple= document.querySelector("#purpleButton")

const reset= document.querySelector("#resetButton")

const color_change=document.querySelector("#mainHeading")


red.addEventListener("click",()=>{
    color_change.style.color="red"
})
green.addEventListener("click",()=>{
    color_change.style.color="green"
    
})
blue.addEventListener("click",()=>{
    color_change.style.color="blue"
    
})
purple.addEventListener("click",()=>{
    color_change.style.color="purple"
})
reset.addEventListener("click",()=>{
    color_change.style.color="black"
    
})