import{i as d}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m="43173775-fc7269b10cca3a5d436001063";function h(o){const r=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)throw new Error("Sorry, there are no images matching <br>your search query.Please try again!");return t.hits}).catch(t=>{throw console.error("Error fetching images:",t),d.error({message:t.message,backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight"}),t})}function g(o){return o.map(({likes:r,views:t,comments:n,downloads:e,webformatURL:s,largeImageURL:i,tags:p,id:f})=>`<li data-id="${f}">
      <img src="${s}" alt="${p}" class="preview-image" width="360" height="152">
      <div class="info-container">
      <div class="info-box">
        <span class="label">Likes</span>
        <span class="data-label">${r}</span>
        </div>
        <div class="info-box">
        <span class="label">Views</span>
        <span class="data-label">${t}</span>
        </div>
        <div class="info-box">
        <span class="label">Comments</span>
        <span class="data-label">${n}</span>
        </div>
        <div class="info-box">
        <span class="label">Downloads</span>
        <span class="data-label">${e}</span>
        </div>
      </div>
  </li>`).join("")}console.log("TEST");const y=document.querySelector("form"),c=document.querySelector("input"),l=document.querySelector("ul"),u=document.getElementById("loading-message");c.addEventListener("input",b);y.addEventListener("submit",v);let a;function b(o){a=o.target.value.trim().toLowerCase()}function v(o){if(o.preventDefault(),l.innerHTML="",!a||a.trim()===""){d.error({message:"Sorry, the query field is empty.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight"}),c.value="",a="";return}u.style.display="block",h(a).then(r=>{l.innerHTML="",l.insertAdjacentHTML("beforeend",g(r))}).catch(r=>{console.error("Error fetching images:",r)}).finally(()=>{u.style.display="none",c.value="",a=""})}
//# sourceMappingURL=commonHelpers.js.map
