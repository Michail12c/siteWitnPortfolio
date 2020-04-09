M.AutoInit();


const activeElement = document.querySelectorAll('#service'); 
const scrollsLine = document.querySelectorAll('.scrollsLine');  

document.querySelector('#services1').style.display = 'block'; 
document.querySelectorAll('.line-active')[0].style.display = 'block'; 
scrollsLine[0].style.backgroundColor = 'brown'; 

activeElement.forEach((elem, index) => {
  elem.addEventListener('click', (e,) => {
    e.preventDefault()

    const id = e.target.name
    const lineActive  =  document.querySelectorAll('.line-active');
    let masImages = document.querySelectorAll('.imageElem')

    masImages.forEach(elem => elem.style.display = 'none') 
    lineActive.forEach(elem => elem.style.display = 'none')
    scrollsLine.forEach(elem => elem.style.backgroundColor = '#fff')

    document.querySelector(id).style.display = 'block'
    elem.parentElement.nextElementSibling.style.display = 'block'
    scrollsLine[index].style.backgroundColor = 'brown' 
  } )
})

