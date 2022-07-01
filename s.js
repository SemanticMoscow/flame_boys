document.querySelectorAll('button').forEach(b=>{
b.addEventListener('click',(e)=>{
let r=document.createRange();
r.selectNode(e.target);
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
});
});