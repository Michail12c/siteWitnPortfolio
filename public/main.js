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
    document.querySelector(id).classList.add('animated', 'fadeIn')
    elem.parentElement.nextElementSibling.style.display = 'block'
    scrollsLine[index].style.backgroundColor = 'brown' 
  } )
})


//carousel

let carousel = document.querySelectorAll('.inner-carousel a'); 
let indicators = document.querySelectorAll('.carousel-indicator') 

carousel.forEach(el => {
  el.addEventListener('click', () => {
    setTimeout(() => {
      carousel.forEach(element => {
        if (element.classList.contains('active')){
         
          let id  = element.dataset.id 
          indicators.forEach(e => {
            e.classList.remove('fon')
          })
          indicators.forEach(e => {
            if(e.id === id){
              e.classList.add('fon')
            }
          }) 
        }
      })
    }, 200 )
 

  })
})

const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

  window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 1650) {
          upElem.classList.add('animated', 'fadeIn');
          upElem.classList.remove('fadeOut');
      } else {
          upElem.classList.add('fadeOut');
          upElem.classList.remove('fadeIn');
      }
  });
}
scrolling('.pageup')

let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
