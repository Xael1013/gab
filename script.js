const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector('header');
  const barsAnimation = document.querySelector('.bars-animation');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  barsAnimation.classList.remove('active');
  setTimeout(() => {
    barsAnimation.classList.add('active');
  }, 1100);

  sections.forEach(section => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('fa-x');
  navbar.classList.remove('active');
};

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    activePage();
  });
});





navLinks.forEach((link, idx) =>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
                
            }, 1100);
        }

    });
});

logoLink.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
                sections[0].classList.add('active');
                
            }, 1100);
    }
});


const aboutBtns = document.querySelectorAll('.about-btn');

aboutBtns.forEach((btn, idx) =>{

    btn.addEventListener('click', () => {
        const aboutDetails = document.querySelectorAll('.about-detail');
        aboutBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

         aboutDetails.forEach(details => {
            details.classList.remove('active');
        });
        aboutDetails[idx].classList.add('active');
    })
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');

    });
    portfolioDetails[index].classList.add('active');

}

// Right arrow dito mo iibahin if magdadag ka kasi ibahin mo lang yung if else kasi naka depende yan kung ilang slid ang ilalagay mo 
arrowRight.addEventListener('click', () => {
    if (index < 1) {   
        index++;
        arrowLeft.classList.remove('disabled');

    }
    else {
        index = 2;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

// Left arrow
arrowLeft.addEventListener('click', () => {
    if (index > 1) {   
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
         arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
