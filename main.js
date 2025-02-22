onload = () =>{
    document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
    const hearts = document.querySelectorAll('.heart');
  
    hearts.forEach(heart => {
      const randomX = (Math.random() - 0.5) * 1000; // Random X movement
      const randomY = (Math.random() - 0.5) * 1000; // Random Y movement
  
      heart.style.setProperty('--random-x', `${randomX}px`);
      heart.style.setProperty('--random-y', `${randomY}px`);
    });
  });