// Selecting elements
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section'); // Updated to select all 'section' elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('header nav');

// Toggle the menu icon and navbar active classes
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Function to handle page activation
const activePage = () => {
  const barsBox = document.querySelector('.bars-box');
  const header = document.querySelector('header');

  // Toggle active class for header and barsBox with a delay
  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach(link => {
    link.classList.remove('active'); // Remove 'active' from all links
  });

  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1100);

  sections.forEach(section => {
    section.classList.remove('active'); // Remove 'active' from all sections
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Event listeners for navLinks
navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();  // Remove 'active' from all links
      link.classList.add('active');  // Add 'active' to the clicked link
    }

    setTimeout(() => {
      sections[idx].classList.add('active');
    }, 1100);
  });
});

// Event listener for the logo link
logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active'); // Add 'active' to the first link

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});

// Resume buttons functionality
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(btn => {
      btn.classList.remove('active'); // Remove 'active' from all buttons
    });
    btn.classList.add('active'); // Add 'active' to the clicked button

    resumeDetails.forEach(detail => {
      detail.classList.remove('active'); // Remove 'active' from all details
    });
    resumeDetails[idx].classList.add('active');
  });
});

// Portfolio carousel functionality
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`; // Adjusting style for active portfolio

  portfolioDetails.forEach(detail => {
    detail.classList.remove('active');
  });
  portfolioDetails[index].classList.add('active');
};

// Navigation for portfolio carousel
arrowRight.addEventListener('click', () => {
  if (index < 5) { 
    index++;
    arrowLeft.classList.remove('disabled');
  }
  if (index === 5) { 
    arrowRight.classList.add('disabled');
  } else {
    arrowRight.classList.remove('disabled');
  }

  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) { 
    index--;
    arrowRight.classList.remove('disabled');
  }
  if (index === 0) {
    arrowLeft.classList.add('disabled');
  } else {
    arrowLeft.classList.remove('disabled');
  }

  activePortfolio();
});
