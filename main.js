  let xClose = document.getElementById('x-close')
  let menuLateral = document.getElementById("menu-lateral")
  let lista = document.getElementById("lista")
  let menuClose2 = document.getElementById("menu-close")
  let corpo = document.getElementById('body')

  function menuClose(){
      xClose.style.display = 'none'
      lista.style.display = 'none'
      menuClose2.style.display = 'none'
      menuLateral.style.width = '0'
      corpo.style.backgroundColor ='hsl(36, 100%, 99%)'
  }
    function menuOpen(){
      xClose.style.display = 'block'
      lista.style.display = 'block'
      menuClose2.style.display = 'block'
      menuLateral.style.width = '250px'
      corpo.style.backgroundColor ='hsl(233, 8%, 79%)'
  }