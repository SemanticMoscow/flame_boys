document.querySelectorAll('button').forEach(b=>{b.addEventListener('click',(e)=>{let r=document.createRange();r.selectNode(e.target);window.getSelection().addRange(r);document.execCommand('copy');window.getSelection().removeAllRanges();});});document.addEventListener('DOMContentLoaded',()=>{const a=document.querySelectorAll('a');a.forEach(l=>{let h=l.getAttribute('href');l.addEventListener('click',()=>chrome.tabs.create({active:true,url:h}));});});