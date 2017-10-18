function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
<<<<<<< HEAD
  return document.getElementById('app').querySelector('#nested .target')
=======
  return document.getElementById('app').querySelector('#nested.target').innerHTML
>>>>>>> a1178f96a29bedb3e86e34a51b8fefcb2503f947
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0;i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
<<<<<<< HEAD
  var grand = document.getElementById('grand-node')
  while(grand.querySelector('div') !== null){
    grand = grand.querySelector('div')
  }
  return grand
=======

>>>>>>> a1178f96a29bedb3e86e34a51b8fefcb2503f947
}
