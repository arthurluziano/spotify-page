let likeMusicBtn = document.querySelector('.bx-heart')

likeMusicBtn.addEventListener('click', () => {
  if (likeMusicBtn.classList.contains('bx-heart')) {
    likeMusicBtn.classList.toggle('bx-heart')
    likeMusicBtn.classList.toggle('bxs-heart')

    likeMusicBtn.style.color = '#00eb00'
  } else {
    likeMusicBtn.classList.toggle('bx-heart')
    likeMusicBtn.classList.toggle('bxs-heart')

    likeMusicBtn.style.color = '#fff'
  }
})