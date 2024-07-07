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


document.querySelectorAll(".help-now").forEach(btn=>{
  btn.addEventListener("click",()=>{
    location.href="./help.html";
  })
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

function closeVideo(){
  let closeBtn = document.querySelector("#close-opt")
  closeBtn.addEventListener("click",()=>{
    document.querySelector(".video-div").innerHTML = "";
    document.querySelector("main").style.filter = "contrast(1)";
    document.querySelector("header").style.filter = "contrast(1)";
    document.querySelector(".video-div").style.border = "none";
  })
  
}

let watchBtn = document.querySelectorAll(".watch-video");
watchBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".video-div").innerHTML = `<video src="Suvidha_Foundation_Video.mp4" controls autoplay ></video>        <img src="./images/main nav/cross.svg" alt="" id="close-opt">`;
    document.querySelector("main").style.filter = "contrast(30%)";
    document.querySelector("header").style.filter = "contrast(30%)";
    document.querySelector(".video-div").style.border = "5px solid #F2C94C";
    closeVideo()
  })
})

closeBtn.addEventListener("click",()=>{
  document.querySelector(".video-div").innerHTML = "";
})
