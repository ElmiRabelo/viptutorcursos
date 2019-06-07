////--->> Typing Effect
class TypeWriter{
  constructor(txtElement, words, wait=2000){
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = '';
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type();
  }

  type(){
    let typeSpeed = 200;
    const currentWord = this.wordIndex % this.words.length;
    const fullWord = this.words[currentWord];

    if(this.isDeleting){
      //remover palavras
      this.txt = fullWord.substring(0, this.txt.length - 1);
    } else {
      //adicionar letras
      this.txt = fullWord.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `
      <span class="typing">${this.txt}</span>
    `;

    if(this.isDeleting){
      typeSpeed /= 2;
    }


    if(!this.isDeleting && this.txt === fullWord){
      //fazer uma pausa
      typeSpeed = this.wait;

      this.isDeleting = true;

    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;

      //ir para proxima palavra
      this.wordIndex++;

      typeSpeed = 300;

    }
    setTimeout( () => this.type(), typeSpeed);
  }
}

///responsive navbar
function menuSlide() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navbar-active');

  });
}


document.addEventListener('DOMContentLoaded', initType);

function initType(){
  const txtElement = document.querySelector('.special-text');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait);
}
// invocando menuSlide
menuSlide();

////--->> Navbar opacity
window.addEventListener('scroll', () => {
  if(window.scrollY > 180) {
    document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
})
