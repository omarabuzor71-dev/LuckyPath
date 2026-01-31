let username = localStorage.getItem('user') || '';
let coins = parseInt(localStorage.getItem('coins') || '0');
let level = parseInt(localStorage.getItem('level') || '1');
let vip = localStorage.getItem('vip') || 'Normal';

if(username) {
  document.getElementById('loginBox').classList.add('hidden');
  document.getElementById('appBox').classList.remove('hidden');
  document.getElementById('username').innerText = username;
}

function login(){
  let input = document.getElementById('usernameInput').value.trim();
  if(!input) return alert('أدخل اسم المستخدم');
  username = input;
  localStorage.setItem('user', username);
  document.getElementById('loginBox').classList.add('hidden');
  document.getElementById('appBox').classList.remove('hidden');
  document.getElementById('username').innerText = username;
}

document.getElementById('playBtn').onclick = () => {
  let baseWin = Math.floor(Math.random()*30)+20;
  let multiplier = vip==='Bronze'?1.1:vip==='Silver'?1.25:vip==='Gold'?1.5:1;
  let win = Math.floor(baseWin*multiplier);
  coins += win;
  localStorage.setItem('coins', coins);
  document.getElementById('coins').innerText = coins;
};

function logout() {
  localStorage.clear();
  location.reload();
}

function requestPayment(a){
  let ref = prompt('حوّل على 39995590 وادخل رقم العملية');
  if(!ref) return;
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push({user: username, amount: a, ref: ref, status: 'pending'});
  localStorage.setItem('orders', JSON.stringify(orders));
  alert('تم الإرسال');
}