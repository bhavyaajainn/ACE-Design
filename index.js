document.addEventListener("DOMContentLoaded", function () {
  const welcome = document.getElementById("welcome");
  const team = document.getElementById("team");
  const work = document.getElementById("work");
  const contact = document.getElementById("contact");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");
  let lastClickedElement = null;

  const welcomeData = document.getElementById("welcome-modal");
  const teamData = document.getElementById("team-modal");
  const workData = document.getElementById("work-modal");
  const contactData = document.getElementById("contact-modal");
  const closeData = document.getElementById("close-modal");

  welcome.addEventListener("click", function () {
    lastClickedElement = welcomeData;
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-visible");
    welcomeData.classList.add("modal-data-visible");
  });

  team.addEventListener("click", function () {
    lastClickedElement = teamData;
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-visible");
    teamData.classList.add("modal-data-visible");
  });

  work.addEventListener("click", function () {
    lastClickedElement = workData;
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-visible");
    workData.classList.add("modal-data-visible");
  });

  contact.addEventListener("click", function () {
    lastClickedElement = contactData;
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-visible");
    contactData.classList.add("modal-data-visible");
  });

  close.addEventListener("click", function () {
    modal.classList.add("modal-hidden");

    modal.addEventListener(
      "animationend",
      function () {
        modal.classList.remove("modal-visible");
        modal.classList.remove("modal-hidden");
        lastClickedElement.classList.remove("modal-data-visible");
        lastClickedElement = null;
      },
      { once: true }
    );
  });

  let currentIndex = 0;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  function showSlide(index) {
    
    const slides = document.querySelectorAll('.carousel-data');
    const totalSlides = slides.length;

    const visibleSlides = Math.floor(document.querySelector('.work-carousel').offsetWidth / slides[0].offsetWidth);
    const maxIndex = totalSlides - visibleSlides;

    if(index > maxIndex){
      currentIndex = 0
    } else if(index < 0){
      currentIndex = maxIndex;
    } else{
      currentIndex = index;
    }
    const offset = -currentIndex * (100 / visibleSlides);
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  next.addEventListener('click', function(){
    showSlide(currentIndex + 1);
  })

  prev.addEventListener('click', function(){
    showSlide(currentIndex - 1);
  })
    
  showSlide(currentIndex);

  window.addEventListener('resize', ()=>{
    showSlide(currentIndex);
  });
});
