resize = function() {
  document.getElementById('main').style.width = '1280px';
  document.getElementById('main').style.height = '1024px';
}

onload = function() {
  setTimeout(resize, 100);
}

addEventListener('DOMContentLoaded', onload);