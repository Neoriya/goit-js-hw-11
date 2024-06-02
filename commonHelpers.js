import{i as u}from"./assets/vendor-482df00d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="43173775-fc7269b10cca3a5d436001063";function m(r){const o=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)throw new Error("Sorry, there are no images matching <br>your search query.Please try again!");return t.hits}).catch(t=>{throw console.error("catch",t),u.error({message:t.message,backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight"}),t})}function h(r){return r.map(({likes:o,views:t,comments:i,downloads:e,previewURL:s,tags:n,id:p})=>`<li data-id="${p}">
      <img src="${s}" alt="${n}" class="preview-image" width="360" height="152">
      <div class="info-container">
      <div class="info-box">
        <span class="label">Likes</span>
        <span class="data-label">${o}</span>
        </div>
        <div class="info-box">
        <span class="label">Views</span>
        <span class="data-label">${t}</span>
        </div>
        <div class="info-box">
        <span class="label">Comments</span>
        <span class="data-label">${i}</span>
        </div>
        <div class="info-box">
        <span class="label">Downloads</span>
        <span class="data-label">${e}</span>
        </div>
      </div>
  </li>`).join("")}console.log("TEST");const d=document.querySelector("input"),g=document.querySelector("button"),l=document.querySelector("ul"),c=document.getElementById("loading-message");d.addEventListener("input",y);g.addEventListener("click",b);let a;function y(r){a=r.target.value.trim().toLowerCase()}function b(r){if(r.preventDefault(),l.innerHTML="",!a||a.trim()==="")return u.error({message:"Sorry, the query field is empty.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight"});c.style.display="block",m(a).then(o=>{l.innerHTML="",l.insertAdjacentHTML("beforeend",h(o))}).catch(o=>console.error(o)).finally(()=>{c.style.display="none",d.value="",a=""})}
//# sourceMappingURL=commonHelpers.js.map
