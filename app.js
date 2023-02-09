const menuLinks = document.querySelectorAll('.cabecalho__navegacao a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}


// Por conta da falta de compatibilidade da propriedade scroll-behavior com alguns navegadores, esta função está desativada || Due to the lack of compatibility of the scroll-behavior property with some browsers, this function is disabled.

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

function animarScroll(event) {
  const topoItem = scrollAnima.getBoundingClientRect().top;
  const itemVisivel = topoItem - metadeWindow < 0;

  if (itemVisivel) {
    scrollAnima.classList.add('show-btn');
  } else {
    scrollAnima.classList.remove('show-btn');
  }
}

window.addEventListener('scroll', animarScroll);

const botaoHome = document.querySelector('[data-scroll="suave"] a[href^="#"]')

function scrollTop(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const topo = document.querySelector(href);

  topo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

botaoHome.addEventListener('click', scrollTop);


// Opção de Modais com multiplas telas || Option of Modals with multiple screens 

// Pega o elemento modal || Get the modal elements
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");

// Pega o botão de abrir o modal || et the buttons that open the modals
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");

// Pega o botão de fechar de cada modal || Get the close buttons for each modal
var close1 = document.getElementsByClassName("close1")[0];
var close2 = document.getElementsByClassName("close2")[0];
var close3 = document.getElementsByClassName("close3")[0];
var close4 = document.getElementsByClassName("close4")[0];
var close5 = document.getElementsByClassName("close5")[0];
var close6 = document.getElementsByClassName("close6")[0];

// Quando o usuário clica no no botão, abre o modal correspondente || When the user clicks on a button, open the corresponding modal
btn1.onclick = function() {
  modal1.style.display = "flex";
};

btn2.onclick = function() {
  modal2.style.display = "flex";
};

btn3.onclick = function() {
  modal3.style.display = "flex";
};

btn4.onclick = function() {
  modal4.style.display = "flex";
};

btn5.onclick = function() {
  modal5.style.display = "flex";
};

btn6.onclick = function() {
  modal6.style.display = "flex";
};

// Quando o usuário clica no botão de fechar, fecha o modal || When the user clicks on the close button, close the modal
close1.onclick = function() {
  modal1.style.display = "none";
};

close2.onclick = function() {
  modal2.style.display = "none";
};

close3.onclick = function() {
  modal3.style.display = "none";
};

close4.onclick = function() {
  modal4.style.display = "none";
};

close5.onclick = function() {
  modal5.style.display = "none";
};

close6.onclick = function() {
  modal6.style.display = "none";
};

// QUando o usuário clicar em qualquer lugar fora do modal || When the user clicks anywhere outside the modal, close it
window.onclick = function(evento) {
  if (evento.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.stuçe.display = "none";
  }
};

// Opção de Modal de unica tela || Single screen modal option

//modal sites - revisar
// function iniciaModal(modalID) {
//   const modal = document.getElementById(modalID);
//   if (modal) {
//     modal.classList.add('mostrar');
//     modal.addEventListener('click', (e) => {
//       if (e.target.id == modalID || e.target.className == 'fechar') {
//         modal.classList.remove('mostrar');
//       };
//     });
//   }
// }

// const site = document.querySelector('.ver__site');
// site.addEventListener('click', () => iniciaModal('modal-sites'));

