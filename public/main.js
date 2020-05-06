M.AutoInit();

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.brand-logo');
    let width = document.documentElement.clientWidth 
    if(width < 575){
      logo.remove()
    }
});


const modal = document.querySelector('.modal-scroll')
const activeElement = document.querySelectorAll('#service')
const scrollsLine = document.querySelectorAll('.scrollsLine') 

if(modal){
  modal.addEventListener('click', () => {
    calcScroll()
  }) 
}
 

if(document.querySelector('.modal-close')){
  document.querySelector('.modal-close').addEventListener('click', () => {
    document.body.style.marginRight = `0px`
  })
  document.querySelector('.main-title').addEventListener('click', () => {
    document.body.style.marginRight = `0px`
  })
}


let services = document.querySelector('#services1'); 
if(services){
  services.style.display = 'block'; 
}

document.querySelectorAll('.line-active')[0].style.display = 'block'; 
scrollsLine[0].style.backgroundColor = 'rgb(34, 33, 33)'; 

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
    scrollsLine[index].style.backgroundColor = 'rgb(34, 33, 33)' 
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


function animateElement(e){
  e.target.classList.add('bounceIn')
  setTimeout(() => {
    e.target.classList.remove('bounceIn')
  }, 800)
}


 let elemSkills = document.querySelectorAll('.skills-inner');
 elemSkills.forEach(item => {
   item.classList.add('animated')
 }) 
 elemSkills.forEach(elem=> {
   elem.addEventListener('mouseleave', animateElement)
 })


let elemSlider = document.querySelector('.slider-wrapper')
let sectionSlider = document.querySelector('.section-slider')
 elemSlider.addEventListener('mouseenter', () => {
   sectionSlider.classList.remove('#e8eaf6')
   sectionSlider.classList.remove('indigo')
   sectionSlider.classList.remove('lighten-5')
   sectionSlider.style.backgroundColor = "rgb(186, 224, 155)"
 })

  elemSlider.addEventListener('mouseleave', () => { 
    sectionSlider.style.backgroundColor = "none"
    sectionSlider.classList.add('#e8eaf6')
    sectionSlider.classList.add('indigo')
    sectionSlider.classList.add('lighten-5')
    elemSlider.classList.add('fadeOutLeft')

    setTimeout(() => {
      elemSlider.classList.remove('fadeOutLeft')
    }, 800)
 })

 let skillsInner = document.querySelectorAll('.skills-inner')
 let sectionSkillsWrapper = document.querySelector('.section-skills-wrapper'); 

 skillsInner.forEach(item => {
   item.addEventListener('mouseenter', (e) => {
     sectionSkillsWrapper.classList.remove('#e8eaf6')
     sectionSkillsWrapper.classList.remove('indigo')
     sectionSkillsWrapper.classList.remove('lighten-5')
     sectionSkillsWrapper.style.backgroundColor = 'rgba(182, 199, 173';
   })
  item.addEventListener('mouseleave', () => {
    sectionSkillsWrapper.style.backgroundColor = 'none';
    sectionSkillsWrapper.classList.add('#e8eaf6')
    sectionSkillsWrapper.classList.add('indigo')
    sectionSkillsWrapper.classList.add('lighten-5') 
  })  
 })
