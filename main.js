////--->> Navbar opacity
window.addEventListener('scroll', () => {
  if(window.scrollY > 180) {
    document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
})


////--->> Typing Effect
  const words = ["Qualidade na Didática", "Agilidade no Ensino", "Ensino Personalizado"];
  let count = 0;
  let index = 0;
  let currentWord = '';
  let letter = '';

(function type(){

  if(count === words.length){
    count = 0;
  }
  currentWord = words[count];
  letter = currentWord.slice(0, ++index);
  
  document.querySelector('.special-text').textContent = letter;
  
  if(letter === currentWord) {
    count++;
    index = 0;
  }

  setTimeout(type, 140);
})();