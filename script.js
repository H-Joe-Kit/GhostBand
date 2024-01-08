// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction(); };

// Get the navbar
var navbar = document.querySelector('.navbar');

// Get the initial position of the navbar
var sticky = navbar.offsetTop;

// Function to add or remove the sticky class
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

//Event listener that listens for click on nav option
//so that when navigating it doesnt go underneath the navbar
document.addEventListener('DOMContentLoaded', function() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;

  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);

          if (targetSection) {
              const sectionPosition = window.scrollY + targetSection.getBoundingClientRect().top - navbarHeight;
              window.scrollTo({
                  top: sectionPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
});
