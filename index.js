// Upper nav buttons

document.querySelector(".email").addEventListener("click", ()=>{
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@suvidhafoundationedutech.org',"_blank");
  });

Array.from(document.getElementsByClassName("facebook")).forEach(btn => {
  btn.addEventListener("click", ()=>{
    window.open('https://www.facebook.com/suvidhamahilamandal/',"_blank");
  });
});
Array.from(document.getElementsByClassName("linkedin")).forEach(btn => {
  btn.addEventListener("click", ()=>{
    window.open('https://www.linkedin.com/company/suvidha-foundation/mycompany/',"_blank");
  });
});
Array.from(document.getElementsByClassName("instagram")).forEach(btn => {
  btn.addEventListener("click", ()=>{
    window.open('https://www.instagram.com/suvidha_mahila_mandal',"_blank");
  });
});

// Main nav buttons

document.querySelector("#help-now").addEventListener("click",()=>{
  location.href="./help.html";
})
document.querySelectorAll(".apply").forEach(btn=>{
  btn.addEventListener("click",()=>{
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform","_blank");
  })
})


// Slider section 

document.querySelectorAll(".donote-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
        location.href="./help.html";
      })
})

// know about us section 
document.querySelector("#know-about-us").addEventListener("click",()=>{
  location.href="./about.html";
})

// Event Section 
document.querySelector("#events-btn").addEventListener("click",()=>{
  location.href="./event.html";
})

// Testimonial  
document.querySelector(".testimonial1-btn").addEventListener("click",()=>{
  window.open("https://drive.google.com/drive/u/0/folders/1lCc5YL2t6eFN3nlk9mgseCXCg7kOdty8","_blank");
})

// contact btn

// document.querySelector("#msg-btn").addEventListener("click",()=>{
//     console.log("click")
//     window.open("https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform","_blank")
// })
