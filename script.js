const icons = document.querySelectorAll('.tabs li a');
const cards = document.querySelectorAll('.card__content');


icons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
   
    if (cards[index].classList.contains('active')) {
      cards[index].classList.remove('active');
    } else {
      
      cards.forEach(card => card.classList.remove('active'));

      
      cards[index].classList.add('active');
    }
  });
});