import{a as b,S as w,i as y}from"./assets/vendor-BjmtRwYh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function u(t,s){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"45176970-913b8fa7a45cf3c015efbbbdd",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s})}`;try{return(await b(a)).data}catch{throw new Error("Failed to fetch images")}}const L=document.getElementById("gallery");function f(t){let s="";s=t.map(({largeImageURL:a,webformatURL:e,tags:r,likes:l,views:m,comments:h,downloads:g})=>`<li class="card">
        <a class="list" href="${a}">
          <img src="${e}" alt="${r}">
        </a>
        <ul class="info-list">
            <li>
                <p class="info-title">Likes</p>
                <p class="info-data">${l}</p>
            </li>
            <li>
                <p class="info-title">Views</p>
                <p class="info-data">${m}</p>
            </li>
            <li>
                <p class="info-title">Comments</p>
                <p class="info-data">${h}</p>
            </li>
            <li>
                <p class="info-title">Downloads</p>
                <p class="info-data">${g}</p>
            </li>
          </ul>
      </li>`).join(""),L.insertAdjacentHTML("beforeend",s),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(t){y.error({message:t,position:"bottomCenter"})}function P(t){y.warning({message:t,position:"bottomCenter"})}function I(t){y.info({message:t,position:"bottomCenter"})}const E=document.getElementById("search-form"),$=document.getElementById("search-input"),n=document.querySelector(".load-more"),c=document.getElementById("pending-icon");let i=1,d="";E.addEventListener("submit",async t=>{t.preventDefault();const s=$.value.trim();if(s===""){P("Please enter a search query");return}d=s,i=1;try{c.style.display="block";const o=await u(d,i);if(o.hits.length===0||d===""){gallery.innerHTML="",p("Sorry, there are no images matching your search query. Please try again!"),n.style.display="none";return}else gallery.innerHTML="",f(o.hits),o.totalHits>i*15?n.style.display="block":n.style.display="none"}catch{p("Failed to fetch images. Please try again later.")}finally{c.style.display="none"}});n.addEventListener("click",async()=>{i++,c.style.display="block";try{const t=await u(d,i);if(c.style.display="none",t.hits.length>0){f(t.hits),t.totalHits>i*15?n.style.display="block":(n.style.display="none",I("We're sorry, but you've reached the end of search results."));const s=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch{p("Failed to load more images. Please try again later.")}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
