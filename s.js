document.querySelectorAll('kbd').forEach(k=>{k.addEventListener('click',(e)=>{navigator.clipboard.writeText(e.target.innerHTML);});});window.addEventListener('click',function(e){if(e.target.href!==undefined){chrome.tabs.create({url:e.target.href})}})