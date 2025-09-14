
    const text = "Desenvolvedor Web | Frontend Junior";
    const typingElement = document.getElementById("typing");
    const projetos = document.querySelector('.projetos');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');
    
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); 
      }
    }

    
    window.onload = typeEffect;

    
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        header.style.background = "#0d1117";
      } else {
        header.style.background = "#161b22";
      }
    });


    
btnLeft.addEventListener('click', () => {
  projetos.scrollBy({
    left: -310, 
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  projetos.scrollBy({
    left: 310,
    behavior: 'smooth'
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50 },
    "size": { "value": 3 },
    "color": { "value": "#58a6ff" },
    "line_linked": { "enable": true, "distance": 150, "color": "#58a6ff", "opacity": 0.4 },
    "move": { "speed": 2 }
  }
});