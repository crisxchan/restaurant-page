(()=>{"use strict";(()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header"),n=document.createElement("h1");return n.innerHTML="Beane & Sonny",e.appendChild(n),e.appendChild((()=>{const e=document.createElement("nav"),n=document.createElement("ul");return["HOME","PRODUCTS","CONTACT US"].forEach((e=>{const t=document.createElement("li");t.innerHTML=e,t.classList.add("nav-li"),t.addEventListener("click",(()=>{document.querySelectorAll(".nav-li").forEach((e=>e.classList.remove("active-nav"))),t.classList.add("active-nav")})),n.appendChild(t)})),n.classList.add("nav-ul"),e.appendChild(n),e})()),e})()),e.appendChild((()=>{const e=document.createElement("main");return e.innerHTML="qwewe",e})()),e.appendChild((()=>{const e=document.createElement("footer"),n=document.createElement("p"),t=document.createElement("a"),a=document.createElement("i");return n.innerHTML="Copyright © 2022 crisxchan",t.href="https://github.com/crisxchan",t.target="_blank",a.classList.add("fa","fa-github","ghlogo"),t.appendChild(a),e.appendChild(n),e.appendChild(t),e})())})()})();