import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
 });
// Kodlar buraya gelecek!
const navSection = document.querySelector('header');
navSection.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#fff94f" ;
    e.target.style.fontWeight = 'bold';
    e.target.style.color = "#B2BEB5"
}) 
const yazi = document.getElementById('yazi');
yazi.addEventListener("keydown", (e)=>{
    console.log("keydown worked") ;
    alert('keydown worked');
})
const bolum = document.querySelector("body");
bolum.addEventListener("load" , (e) => {
    console.log("fully loaded");
})
yazi.addEventListener("focus" , (e) =>{
    e.target.style.backgroundColor= "red";
    
})
yazi.addEventListener("blur" , (e)=>{
    e.target.style.backgroundColor = "";
})
const double = document.querySelectorAll("img")
console.log(double);
double.addEventListener("dblclik",(e)=>{
    console.log("dblclick calisiyor")
    alert("dblclick worked")
} )