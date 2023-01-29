var index = 1;


// 隱藏所有的 slider
function hideAll() {
  var siders = document.getElementsByClassName('slider');
  for (var i=0; i < siders.length; i++) {
    siders[i].style.display = 'none';
  }
}

// 改變Dots 的選種狀態
function changeActive(n) {
  var allDots = document.getElementsByClassName('dots');
  for (var i=0; i < allDots.length; i++) {
    allDots[i].className = allDots[i].className.replace('active','');
  }
  allDots[n-1].className = allDots[n-1].className + ' active';
}

// 跳轉指定的索引位置
function go(n) {
  var siders = document.getElementsByClassName('slider');
  hideAll();
  siders[n-1].style.display = 'block';
  changeActive(n);
  index = n;
}

// 左右按鈕的翻頁
function page(num) {
  if (num == -1) {
    index--;
    if (index < 1) {
      index = 3;
    }
  }
  if (num == 1) {
    index++;
    if (index > 3) {
      index = 1;
    }
  }
  go(index);
}
