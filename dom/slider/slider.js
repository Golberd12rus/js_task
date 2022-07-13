const slider = document.querySelector('.items');
let offset = 0;

document.getElementById('left').addEventListener('click', e => {
  e.preventDefault();
  if (offset>0){
    offset -= 100;
   slider.style.right = offset + 'px'; 
  }
  
});

document.getElementById('right').addEventListener('click', e => {
  e.preventDefault();
  if (offset<500){
    offset += 100;
    slider.style.right = offset + 'px';
  }
  
});