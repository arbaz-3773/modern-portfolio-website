const dark_mode = document.querySelector("#dark-light")

dark_mode.addEventListener("click", () => {
document.body.classList.toggle("dark-mode")
});

const form = document.querySelector("#contectForm")
form.addEventListener("submit", function(e) { e.preventDefault();
  
const name = document.querySelector("#name"). value.trim();
const message = document.querySelector("#message"). value.trim();
const email = document.querySelector("#email"). value.trim();

if(name === "" || email === "" || message === ""){
  alert("please fil all")
  return;
}

const ean = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
if(!email.match(ean)){
  alert("please enter a valid email")
  return;
}else{
alert("submit successfully")
form.reset()
}
});

const selctions = document.querySelectorAll("selction")

window.addEventListener("scroll", () => {
 const scrollY = window.scrollY + window.innerHeight-100;
 selctions.forEach(section => {
   if(scrollY > section.offsetTop){
     section.style.opacity = 1;
     section.style.transform = "translateY(0)";
     section.style.transition = "all 0.6s ease-out";
     
   }else {
section.style.opacity = 0;
     section.style.transform = "translateY(50px)";
   }
   
 });
  
});