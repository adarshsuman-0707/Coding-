// var user=document.getElementById('one')
// user.innerHTML="HI";
// var user=document.getElementsByClassName('two')
// user.style.color="red";
// let user1=document.querySelectorAll(".two")
// console.log(user1);
// user1.style.backgroundColor="green";
// console.log(user1.innerHTML);
// user1.style.width="160px"
// console.log(user1);
// user1.style.color="yellow"
// user1.innerHTML="ME ADARSH suman"

// let u=document.getElementsByClassName("two")
// u.style.color="blue";



// <----------image chnge krna ho continously --------------->

// console.log(im);
// console.log(im.getAttribute("src"));
// let num=0;
// let arr=["Screenshot 2023-08-02 205201.png","Screenshot 2023-08-02 212717.png","Screenshot 2023-09-09 174551.png"]
// setInterval(()=>{
   
// im.setAttribute("src",arr[num])

// num=(num+1)%arr.length;

// },5000)



let button=document.createElement("button")
button.style.width="50px"
let body= document.querySelector("body")
body.prepend(button);
button.innerHTML="Touch me"

let change=()=>{
    let im=document.getElementById("im");
    let num=0;
    let arr=["Screenshot 2023-08-02 205201.png","Screenshot 2023-08-02 212717.png","Screenshot 2023-09-09 174551.png"]
    setInterval(()=>{
       
    im.setAttribute("src",arr[num])
    console.log(im.getAttribute("src"));
    num=(num+1)%arr.length;
    
    },5000)
}

button.addEventListener("click",change)


let div=document.querySelector("div")
let highlight=document.createElement('h1');
highlight.innerHTML="me hu kon"
div.style.border="2px solid black"

div.appendChild(highlight)


let ul=document.querySelector("ul")
let l1=document.createElement("li")
let l2=document.createElement("li");
let l3=document.createElement("li");
let l4=document.createElement("li");
l1.innerHTML="MANGO";
l2.innerHTML="orange";
l3.innerHTML="grapes";
l4.innerHTML="apple";
ul.append(l1,l2,l3,l4)
// <--------------event=============>
var num=1;
let color=()=>{
    
    if(num==1){
        num=0;
    body.style.backgroundColor="red";
    body.style.color="yellow";
 
}else{
       num=1;
    body.style.backgroundColor="Blue";
    body.style.color="white";
}}

let d= document.getElementById("chnge");
d.addEventListener("click",color)
let p=document.querySelector("p")
let input=document.querySelector("input")
input.addEventListener("input",(e)=>{
    // console.log(e.target.value);
    p.innerHTML=input.value;

    // console.log(input.value);
})


// <------------to-do-list------------->
let list=document.querySelector("#list");
let add=document.querySelector("#add");
// let lis=document.createElement("li")
add.addEventListener("click",()=>{
    let order=document.querySelector("ol")
    let lis=document.createElement("li")
    lis.innerHTML=list.value;
    order.append(lis)
    list.value=''
    lis.addEventListener("click",()=>{
        lis.remove('li')
    })
})
let remo=document.querySelector("#remove");
remo.addEventListener("click",()=>{
    let order=document.querySelector("ol")
    //  let lis=document.createElement("li")
 order.remove()
})



// <----------------make different with radio--------->
let rad=document.querySelector("#pic1");
let rad1=document.querySelector("#pic2");
let rad2=document.querySelector("#pic3");
let imgrad=document.querySelector("#radios");
console.log(imgrad.getAttribute("src"));
// console.log(rad.value==on);'
var man,women,other;
console.log(rad.value);

rad.addEventListener("click",()=>{
    imgrad.setAttribute("src","https://tse4.mm.bing.net/th?id=OIP.FBgfDbVt-FKv-26InzztjQHaF0&pid=Api&P=0&h=180")})
rad1.addEventListener("click",()=>{
    imgrad.setAttribute("src","https://tse1.mm.bing.net/th?id=OIP.YtF-v0Js5eUn8-z-Qh3OOAHaKk&pid=Api&P=0&w=400&h=571")
})
rad2.addEventListener("click",()=>{
    imgrad.setAttribute("src","https://tse4.mm.bing.net/th?id=OIP.kMA_u6ThGAFTI7_hGFlXVAHaHr&pid=Api&P=0&h=1801")
})