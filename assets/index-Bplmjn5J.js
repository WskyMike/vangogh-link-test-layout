(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function o(){const i=document.getElementById("footer-large"),r=document.getElementById("footer-small");i.classList.remove("active"),r.classList.remove("active"),window.innerWidth>1168?i.classList.add("active"):r.classList.add("active")}o();window.addEventListener("resize",o);const l="/vangogh-link-test-layout/assets/item1-BrGM7SYK.jpg",d="/vangogh-link-test-layout/assets/item2-DByqwSAq.jpg",n="/vangogh-link-test-layout/assets/item3-B_eYl-Mb.jpg",u=[{id:"light1",title:"Встраиваемый светильник Markt",priceCurrent:"3 490 ₽",priceOld:"5 060 ₽",badge:"Акция",image:l},{id:"light2",title:"Линейный светильник ARG",priceCurrent:"6 700 ₽",priceOld:null,badge:null,image:d},{id:"light3",title:"Сведодиодный светильник ",priceCurrent:"5 060 ₽",priceOld:"6 060 ₽",badge:"Акция",image:n},{id:"light4",title:"Встраиваемый светильник Markt",priceCurrent:"3 490 ₽",priceOld:null,badge:null,image:l},{id:"light5",title:"Линейный светильник ARG",priceCurrent:"6 700 ₽",priceOld:"6 060 ₽",badge:"Акция",image:d},{id:"light6",title:"Сведодиодный светильник ",priceCurrent:"5 060 ₽",priceOld:null,badge:null,image:n},{id:"light7",title:"Встраиваемый светильник Markt",priceCurrent:"3 490 ₽",priceOld:"6 060 ₽",badge:"Акция",image:l},{id:"light8",title:"Линейный светильник ARG",priceCurrent:"6 700 ₽",priceOld:null,badge:null,image:d}];function g(){["light2","light4","light6","light8"].forEach(r=>{const c=document.querySelector(`.search-results__card[data-id="${r}"]`);if(c){const s=c.querySelector(".search-results__card-price-current");s&&(s.style.color="#231815")}})}const p=document.getElementById("cards-container");u.forEach(({id:i,title:r,priceCurrent:c,priceOld:s,badge:e,image:t})=>{const a=`
      <div class="search-results__card" data-id="${i}">
        <div class="search-results__card-img-wrapper">
          <img src="${t}" alt="${r}" class="search-results__card-img" />
          <div class="search-results__card-rectangle">
            <button class="search-results__card-btn">Подробнее</button>
          </div>
        </div>
        <div class="search-results__card-info">
          <h3 class="search-results__card-text">${r}</h3>
          <div class="search-results__card-price">
            <span class="search-results__card-price-current">${c}</span>
            ${s?`<span class="search-results__card-price-old">${s}</span>`:""}
          </div>
        </div>
        ${e?`<div class="search-results__card-badge">${e}</div>`:""}
      </div>
    `;p.insertAdjacentHTML("beforeend",a)});g();
