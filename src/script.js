// menu show and hidden
let showMenuBtn = document.querySelector("#showMenuBtn"),
  mobileMenu = document.querySelector("#mobileMenu"),
  hideMenuBtn = document.querySelector("#hideMenuBtn");

showMenuBtn.addEventListener('click',()=>{
   mobileMenu.style = `transform:translateX(0)`
   
})  

hideMenuBtn.addEventListener("click", () => {
   mobileMenu.style = `transform:translateX(100%)`;
  console.log("show");
});  

// profile image hover
let profileImgBox = document.querySelector("#profileImgBox"),
  profileImg = document.querySelector(".profileImg");

