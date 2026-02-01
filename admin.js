function loginAdmin(){
  if(document.getElementById('pass').value!=='9999') return alert('خطأ');
  let o=JSON.parse(localStorage.getItem('orders')||'[]');
  let d=document.getElementById('orders');d.innerHTML='';
  o.forEach((x,i)=>{if(x.status=='pending') d.innerHTML+=x.user+' '+x.amount+' <button onclick="approve('+i+')">موافقة</button><br>';});
}
function approve(i){
  let o=JSON.parse(localStorage.getItem('orders'));
  o[i].status='done';
  localStorage.setItem('orders',JSON.stringify(o));
  alert('تمت الموافقة');
  loginAdmin();
}
