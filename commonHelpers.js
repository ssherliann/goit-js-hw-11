import{S as f,i as a}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p=document.querySelector(".input-search"),u=document.querySelector(".form-search"),m=document.querySelector(".gallery"),l=document.querySelector(".loader"),h="42111796-9c286351ad531542ab3bfb8be";l.style.display="none";u.addEventListener("submit",c=>{c.preventDefault(),m.innerHTML="",l.style.display="block",s(p.value);function s(n){const i=`https://pixabay.com/api/?key=${h}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(l.style.display="none",e&&e.hits&&e.hits.length>0){const t=e.hits.map(r=>`<li class="gallery-item"><a href="${r.webformatURL}">
                    <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"></a>
                    <p>Likes: ${r.likes}</p>
                    <p>Views: ${r.views}</p>
                    <p>Comments: ${r.comments}</p>
                    <p>Downloads: ${r.downloads}</p>
                    </li>`).join("");m.insertAdjacentHTML("afterbegin",t);const o=new f(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",animation:250});o.on("show.simplelightbox"),o.refresh(),u.reset()}else a.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"izi-toast",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",maxWidth:"432px",position:"topRight"})}).catch(e=>{console.error("An error occurred:",e),a.error({title:"Error",message:`An error occurred: ${e}`})})}});
//# sourceMappingURL=commonHelpers.js.map
