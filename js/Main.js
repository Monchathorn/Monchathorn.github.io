let Theme = document.getElementById("Theme");
let wave1 = document.getElementById("wave1");
let body = document.body;

  //เปลี่ยนโหมดกลางวันกลางคืน
  Theme.addEventListener("click", function() {
    let currentTheme = body.getAttribute("data-bs-theme");
    
    // ถ้าเป็นโหมดกลางวันให้เปลี่ยนเป็นโหมดกลางคืน
    if (currentTheme === "white") {
      body.setAttribute("data-bs-theme", "dark");
      wave1.setAttribute("fill", "#24242c");

    // ถ้าเป็นโหมดกลางคืนให้เปลี่ยนเป็นโหมดกลางวัน
    } else {
      body.setAttribute("data-bs-theme", "white");
      wave1.setAttribute("fill", "#FFF");
    }
  });

// ถ้า mouse อยู่ในรูปจะเปลี่ยนขนาด 
let Expandimage = document.querySelectorAll(".Expandimage");

    Expandimage.forEach(function(image) {
  image.addEventListener("mouseover", function() {
    image.style.transform = "scale(1.25)"; // เพิ่มขนาดรูป 1.255 เท่า
  });

// ถ้า mouse อยู่นอกรูปจะเปลี่ยนขนาด 
  image.addEventListener("mouseout", function() {
    image.style.transform = "scale(1)"; // กลับไปยังขนาดปกติ
  });
});