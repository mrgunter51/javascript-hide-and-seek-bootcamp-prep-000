function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('app').querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0;i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var grand = document.getElementById('grand-node')
  while(grand.querySelector('div') !== null){
    grand = grand.querySelector('div')
  }
  return grand
}
