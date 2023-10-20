let Theme = document.getElementById("Theme");
let body = document.body;

//เปลี่ยนโหมดกลางวันกลางคืน
Theme.addEventListener("click", function() {
let currentTheme = body.getAttribute("class");
    
// ถ้าเป็นโหมดกลางวันให้เปลี่ยนเป็นโหมดกลางคืน
if (currentTheme === "Day") {
  body.setAttribute("class", "Night");

// ถ้าเป็นโหมดกลางคืนให้เปลี่ยนเป็นโหมดกลางวัน
} else {
  body.setAttribute("class", "Day");
}
});
