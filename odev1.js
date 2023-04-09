let userName = prompt("Lütfen Bir isim girin"); 
let name_ = document.getElementById("userName"); 

userName = userName.charAt(0).toUpperCase() + userName.slice(1); 

name_.innerHTML = userName; 

// Tarih Fonksiyonu

function showTime() {
    let myClock = document.getElementById("myClock"); 
    let now = new Date(); 
    let day = now.getDate(); 
    let month = now.getMonth() + 1; 
    let year = now.getFullYear(); 
    let hour = now.getHours(); 
    let minute = now.getMinutes(); 
    let second = now.getSeconds(); 

   
  
    // Tarih ve saat bilgilerini birleştirir
    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  
    myClock.innerHTML = time 
  
   
    setTimeout(showTime, 1000); 
  }
  
  showTime(); 