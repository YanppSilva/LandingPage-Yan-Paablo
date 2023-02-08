const menuLinks = document.querySelectorAll('.cabecalho__navegacao a[href^="#"]');

function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}


// Por conta da falta de compatibilidade da propriedade scroll-behavior com alguns navegadores, esta função está desativada.

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth"
//   })
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 60;
  smoothScrollTo(0, distanceFromTheTop);
  // nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
})



function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

//Botão home
const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 3.0;
console.log(metadeWindow);

function animarScroll(event) {
  const topoItem = scrollAnima.getBoundingClientRect().top;
  const itemVisivel = topoItem - metadeWindow < 0;

  if(itemVisivel) {
    scrollAnima.classList.add('show-btn');
  } else {
    scrollAnima.classList.remove('show-btn');
  }
}

window.addEventListener('scroll', animarScroll);

const botaoHome = document.querySelector('[data-scroll="suave"] a[href^="#"]')

function scrollTop(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const topo = document.querySelector(href);

  topo.scrollIntoView({
    behavior:'smooth',
    block: 'start',
  })
}

botaoHome.addEventListener('click', scrollTop);

//modal sites - revisar

