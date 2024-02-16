import{S as h,a as u,i as c}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function F({largeImageURL:t,webformatURL:r,tags:s,likes:n,views:e,comments:o,downloads:i}){return`<li class="gallery-item">
   <a class="gallery-link" href="${t}">
   <img class="gallery-image"
   src="${r}" 
   alt="${s}" />
  </a> <div class="info-box">
  <p>Likes:<span> ${n}</span></p>
        <p>Views:<span> ${e}</span></p>
        <p>Comments:<span> ${o}</span></p>
        <p>Downloads:<span> ${i}</span> </p>    
    </div>
  </li>`}let b=new h(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function p(t){const r=t.map(F).join("");a.gallery.insertAdjacentHTML("beforeend",r),b.refresh()}const y=15;async function m(){return u.defaults.baseURL="https://pixabay.com/api/",(await u.get("",{params:{key:"42132229-e88b92984f0d2a7001cb07c65",image_type:"photo",orientation:"horizontal",safesearch:"true",q:d,page:l,per_page:y}})).data}let d="",l=1;const a={formEl:document.querySelector(".form"),inputEl:document.querySelector(".query"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".load-more")};a.formEl.addEventListener("submit",L);a.btnLoad.addEventListener("click",B);async function L(t){t.preventDefault(),g();let r=t.target.elements.query.value;if(d=r,r.trim()==="")c.show({message:"Please fill the input field",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});else try{a.gallery.innerHTML="",a.btnLoad.style.display="none",l=1;const s=await m(l,d);if(s.hits.length>0){p(s.hits),a.btnLoad.style.display="block";const n=a.gallery.querySelector(".gallery-item");if(n){const e=n.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}else a.gallery.innerHTML="",a.btnLoad.style.display="none",c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});f(s.totalHits,l)}catch(s){console.error("Error data:",s),c.show({message:"An error occurred while fetching images. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"})}finally{g()}t.target.reset()}async function B(){g(),l+=1;try{const t=await m(l,d);p(t.hits),f(t.totalHits,l)}catch(t){console.error("Error data:",t),c.show({message:"An error occurred while loading more images. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"})}finally{g()}}function g(){a.loader.classList.toggle("hidden",!1)}function f(t,r){Math.ceil(t/y)===r&&(a.btnLoad.style.display="none",c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}))}
//# sourceMappingURL=commonHelpers.js.map
