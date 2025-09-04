const roles=["Web Developer","Freelancer", "Canva Designer"];
let i=0;
const typingElement=document.getElementById("typing");

function changetext(){
     typingElement.textContent = roles[i];
     i = (i + 1) % roles.length;
}

changetext();
setInterval(changetext,2000);

const fills=document.querySelectorAll(".fill");

fills.forEach(fill => {
     let width= fill.style.width;
     fill.textContent=width;
});


let boxes = document.querySelectorAll(".edu-box" );
     boxes.forEach(box => {
          box.addEventListener("click",()=> {
               box.classList.add("animate");

               setTimeout(() => {
                    box.classList.remove("animate");
               }, 500);
          });
     }); 

document.getElementById("contactform").addEventListener("submit",function(event){
    event.preventDefault();
  
  
    let name=document.getElementById("name").Value;
    let Email=document.getElementById("Email").Value;
    let message=document.getElementById("message").Value;
    let status=document.getElementById("status");

    if(name!="" && Email!="" && message!="")  {
        status.style.color="green";
        status.textContent="Message sent succesfully!";
        this.reset();
    
    } else {
        status.style.color="red";
        status.textContent="please fill out all the fields:";

    }
    
});