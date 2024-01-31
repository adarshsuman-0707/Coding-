


let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  const el=document.getElementById("icon2")
  const ek=document.getElementById("icon3")
  const em=document.getElementById("icon4")
  const mb=document.getElementById("mainback")
if(window.scrollY!=1146){
    ek.classList.add('animate__animated','animate__zoomIn')
    el.classList.add('animate__animated','animate__zoomIn')
em.classList.add('animate__animated','animate__zoomIn')
el.classList.remove('hideel')
ek.classList.remove('hideel')
em.classList.remove('hideel')
}

if(window.scrollY>=1800){
mb.classList.add('animate__animated','animate__fadeInRight','animate__slower')
mb.classList.remove('hideel')
}

const card=document.getElementById("cardsec");
const card_item=document.getElementById("cardsecc")
if(window.scrollY>=2600)
{card.classList.add('animate__animated','animate__slideInLeft');
card.classList.remove('hideel')
card_item.classList.add('animate__animated','animate__slideInRight')
card_item.classList.remove('hideel')

}

const forms=document.getElementById("formss");
const baet=document.getElementById("formsss");
if(window.scrollY>=3200){
  forms.classList.add('animate__animated','animate__slideInRight')
 baet.classList.add('animate__animated','animate__slideInLeft')
forms.classList.remove('hideel')
baet.classList.remove('hideel')
}
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

const print=()=>{
  let name=document.getElementById("name").value;
  let email=document.getElementById("Email").vlaue;
  let address =document.getAnimations("address").value;
  let info={name:name,email:email,address:address};
  let information=JSON.stringify(info);

localStorage.setItem("DATA",information);
alert(`HI ${name} YOUR REQUEST IS ACCEPTED`)
  }
  // const display=()=>{
  //     let pr=localStorage.getItem("name");
  //     alert(pr);
  // }
  // const remove=()=>
  // {localStorage.removeItem("name");}


// const print=()=>{
//   let name=document.getElementById("name").vlaue;
 

//   // if(localStorage.getItem('information')==null){
//   //     localStorage.setItem("informtion",'[]');
//   // }
//   // const data=JSON.parse(localStorage.getItem('information'));
//   // data.push(information)
//   // localStorage.setItem('information',JSON.stringify(data))

//   alert(`HI ${name} YOUR REQUEST IS ACCEPTED`)
// }