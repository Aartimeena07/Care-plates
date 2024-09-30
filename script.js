 
window.addEventListener('scroll', function() {
    const donateButton = document.querySelector('.floating-donate');
    const volunteerButton = document.querySelector('.floating-volunteer');
    
    let scrollPos = window.scrollY;
    
    donateButton.style.transform = `translateY(${scrollPos * 0.2}px)`;
    volunteerButton.style.transform = `translateY(${scrollPos * 0.2}px)`;
  });
  