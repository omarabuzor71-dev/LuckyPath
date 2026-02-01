function loginAdmin(){
  const password = document.getElementById('pass').value.trim();
  if(password !== '9999') return alert('خطأ: كلمة السر غير صحيحة');

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const ordersDiv = document.getElementById('orders');
  ordersDiv.innerHTML = '';

  orders.forEach((order, i) => {
    if(order.status === 'pending'){
      const btn = document.createElement('button');
      btn.innerText = 'موافقة';
      btn.onclick = () => approveOrder(i);
      const div = document.createElement('div');
      div.innerText = `${order.user} طلب ${order.amount} كوين`;
      div.appendChild(btn);
      ordersDiv.appendChild(div);
    }
  });
}

function approveOrder(index){
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders[index].status = 'done';
  localStorage.setItem('orders', JSON.stringify(orders));
  alert('تمت الموافقة');
  loginAdmin(); // إعادة تحميل الطلبات
}
