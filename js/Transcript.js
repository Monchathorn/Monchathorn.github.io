//แจ้งเตือน
alert("เพื่อการศึกษาเท่านั้น")

//นับจำนวนการกด Download File โดยเก็บค่าไว้
let counter = localStorage.getItem('counter') || 0;
document.getElementById('lastcount').innerHTML = counter;

//ถ้ามีการคลิกจะ +1
downloadbutton.addEventListener('click',count);
function count(){
    counter++;
    localStorage.setItem('counter',counter);
    document.getElementById('lastcount').innerHTML = counter;
}

//นับจำนวนการกด Download File โดยเก็บค่าไว้
let counter1 = localStorage.getItem('counter1') || 0;
document.getElementById('lastcount1').innerHTML = counter1;

//ถ้ามีการคลิกจะ +1
downloadbutton1.addEventListener('click',function(){
    counter1++;
    localStorage.setItem('counter1',counter1);
    document.getElementById('lastcount1').innerHTML = counter1; 
});

// mouse อยู่ในปุ่ม1เปลี่ยนข้อความ
downloadbutton.addEventListener('mouseover',function() {
    document.getElementById('text1').innerHTML = "Download"
  });

// mouse อยู่นอกปุ่ม1เปลี่ยนข้อความ
downloadbutton.addEventListener('mouseout',function () {
    document.getElementById('text1').innerHTML = "Transcript File"
  });

// mouse อยู่ในปุ่ม2เปลี่ยนข้อความ  
downloadbutton1.addEventListener('mouseover',function () {
    document.getElementById('text2').innerHTML = "Download"
  });
  
// mouse อยู่นอกปุ่ม2เปลี่ยนข้อความ  
downloadbutton1.addEventListener('mouseout',function () {
    document.getElementById('text2').innerHTML = "Certificate File"
  });
