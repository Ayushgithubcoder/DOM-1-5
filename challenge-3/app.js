/**
 * Write your challenge solution here
 */
//Input values
const name_input=document.querySelector("#nameInput")
const job_title_input=document.querySelector("#jobInput")
const age_input=document.querySelector("#ageInput")
const bio_input=document.querySelector("#bioInput")



//Output values
const name_output=document.querySelector("#nameDisplay")
const job_title_output=document.querySelector("#jobDisplay")
const age_output=document.querySelector("#ageDisplay")
const bio_output=document.querySelector("#bioDisplay")

name_input.addEventListener("input",(event)=>{
    name_output.innerText=event.target.value
})

job_title_input.addEventListener("input",(event)=>{
    if(event.target.value<18 && event.target.value>120) {
        job_title_output.innerText="Not allowed"
    }
    job_title_output.innerText=event.target.value
})

age_input.addEventListener("input",(event)=>{
    age_output.innerText=event.target.value
})

bio_input.addEventListener("input",(event)=>{
    bio_output.innerText=event.target.value
})



