(()=>{"use strict";const e=JSON.parse('{"B":[{"productName":"RASTACLAT","productLabel":"The cloth of a righteous man or woman.","bgColorHex":"#F1EFE2","imgFileName":"rastaclat.png"},{"productName":"NECKLACE","productLabel":"An ornamental chain worn around the neck.","bgColorHex":"#C4A47B","imgFileName":"necklace.png"},{"productName":"PET-TAG","productLabel":"A pet tag is a small flat tag worn on pets\' collars or harnesses.","bgColorHex":"#519ed6","imgFileName":"pet-tag.png"},{"productName":"LETTER","productLabel":"A piece of writing that someone has written.","bgColorHex":"#CFCAC8","imgFileName":"letter.png"},{"productName":"STORYBOX","productLabel":"An enclosed glass-front display containing an object in a thought-provoking way","bgColorHex":"#AFB8D5","imgFileName":"shadowbox.png"}]}'),t=()=>{const t=document.querySelector("main")||document.createElement("main");t.innerHTML="";const n=document.querySelectorAll(".nav-li"),a=(()=>{const t=document.createElement("div");return t.classList.add("main-wrapper"),e.B.forEach((e=>{const n=document.createElement("div");n.classList.add("product-div","left-div");const a=document.createElement("div");a.classList.add("product-div","right-div");const d=document.createElement("section");d.classList.add("main-product"),d.style.backgroundColor=e.bgColorHex;const c=document.createElement("h2");c.classList.add("product-header");const o=document.createElement("p");o.classList.add("product-label");const r=document.createElement("button");r.classList.add("learnMore-btn"),r.innerHTML="Learn More";const s=document.createElement("img");s.src=`../assets/products/${e.imgFileName}`,s.classList.add("product-img"),c.innerHTML=e.productName,o.innerHTML=e.productLabel,n.appendChild(c),n.appendChild(o),n.appendChild(r),a.appendChild(s),d.appendChild(n),d.appendChild(a),t.appendChild(d)})),t})(),d=(()=>{const e=document.createElement("div");return e.innerHTML="products",e})(),c=(()=>{const e=document.createElement("div");e.classList.add("contact-wrapper");const t=document.createElement("img"),n=document.createElement("p"),a=document.createElement("a"),d=document.createElement("p"),c=document.createElement("a"),o=document.createElement("p"),r=document.createElement("p");return t.src="../assets/logo.jpg",t.classList.add("brand-logo"),n.innerHTML="+63 901 109 9910",d.classList.add("fa-brands","fa-facebook","sm-brand-contacts"),d.innerHTML="&nbsp;/beaneandsonny",a.appendChild(d),a.href="https://www.facebook.com/beaneandsonny",a.target="_blank",o.classList.add("fa-brands","fa-instagram","sm-brand-contacts"),o.innerHTML="&nbsp;@beaneandsonny",c.appendChild(o),c.href="https://www.instagram.com/beaneandsonny/",c.target="_blank",r.innerHTML="Cebu City, PH 6000",e.appendChild(t),e.appendChild(n),e.append(a),e.append(c),e.append(r),e})();return n.forEach((e=>{e.classList.contains("active-nav")&&("home"===e.dataset.route&&t.appendChild(a),"products"===e.dataset.route&&t.appendChild(d),"contact"===e.dataset.route&&t.appendChild(c))})),t};(()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header"),n=document.createElement("h1");return n.innerHTML="Beane & Sonny",e.appendChild(n),e.appendChild((()=>{const e=document.createElement("nav"),n=document.createElement("ul");return["HOME","PRODUCTS","CONTACT"].forEach((e=>{const a=document.createElement("li");a.innerHTML=e,"HOME"==e&&a.classList.add("active-nav"),a.classList.add("nav-li"),a.dataset.route=`${e.toLowerCase()}`,a.addEventListener("click",(()=>{document.querySelectorAll(".nav-li").forEach((e=>e.classList.remove("active-nav"))),a.classList.add("active-nav"),t()})),n.appendChild(a)})),n.classList.add("nav-ul"),e.appendChild(n),e})()),e})()),e.appendChild(t()),e.appendChild((()=>{const e=document.createElement("footer"),t=document.createElement("p"),n=document.createElement("a"),a=document.createElement("i");return t.innerHTML="Copyright © 2022 crisxchan",n.href="https://github.com/crisxchan",n.target="_blank",a.classList.add("fa-brands","fa-github","ghlogo"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e})())})()})();