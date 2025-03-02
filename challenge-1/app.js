const toggle_Button = document.querySelector("#toggleButton")
const status_Text = document.querySelector("#status")
const bulb = document.querySelector("#bulb")

document.querySelector("body").classList.add("dark-mode")


toggle_Button.addEventListener("click",()=>{

    if(status_Text.innerText=="Status: Off"){
        bulb.classList.replace("off","bulb")
        status_Text.innerText="Status: On"
        toggle_Button.innerText="Turn Off"
        body.classList.remove("dark-mode")
        
        
    }else if(status_Text.innerHTML=="Status: On"){
        bulb.classList.add("off")
        status_Text.innerText="Status: Off"
        toggle_Button.innerText="Turn On"
        body.classList.add("dark-mode")

    }
})