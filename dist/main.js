(()=>{"use strict";function e(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),r=document.createElement("img");return t.innerHTML="Barney's Tavern",n.innerHTML="Welcome to Barney's Tavern! All we serve is elaborated with fresh ingredients collected from our trustworthy local partners. Just come, relax and enjoy a great time!",r.src="./images/tavern.jpg",e.setAttribute("id","home-content"),e.append(t,n,r),e}class t{constructor(e,t,n,r,o){this.menuName=e,this.starter=t,this.dish=n,this.dessert=r,this.price=o}get createComponent(){const e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("ul"),r=document.createElement("li"),o=document.createElement("li"),c=document.createElement("li"),i=document.createElement("p");return t.innerHTML=this.menuName,r.innerHTML=this.starter,o.innerHTML=this.dish,c.innerHTML=this.dessert,i.innerHTML=this.price,n.append(r,o,c),e.append(t,n,i),e}}const n=new t("Burger Menu","Fries / Salad","Burger","Brownie / Cookie / Smoothie","$20").createComponent,r=new t("Pizza Menu","Fries / Salad","Pizza","Brownie / Cookie / Smoothie","$25").createComponent,o=new t("Tacos Menu","Fries / Salad","Tacos","Brownie / Cookie / Smoothie","$15").createComponent,c=document.querySelector("#home"),i=document.querySelector("#menus"),a=document.querySelector("#contact"),m=document.querySelector("#content");function d(){m.innerHTML=""}m.appendChild(e()),c.addEventListener("click",(()=>{d(),m.appendChild(e())})),i.addEventListener("click",(()=>{d(),m.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");return t.innerHTML="Our Menus",e.setAttribute("id","menus-content"),e.append(t,n,r,o),e}())})),a.addEventListener("click",(()=>{d(),m.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),r=document.createElement("p");return t.innerHTML="Contact Us",n.innerHTML="Barney's Tavern<br>123 Somewhere Street<br>Somewhere around the world and maybe closer than you think",r.innerHTML="Call +01 1234567890",e.setAttribute("id","contact-content"),e.append(t,n,r),e}())}))})();