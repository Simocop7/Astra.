window.onbeforeunload = function () {
    window.scrollTo(0, 0); // Forces the scroll to the top when page reloads
};


document.addEventListener("DOMContentLoaded", function() {
    const aboutEl = document.querySelectorAll('.about');
    const valueEl = document.querySelectorAll('.value-frame');
    const refTitleEl = document.querySelectorAll('.ref-title');
    const subtitleEl = document.querySelectorAll('.subtitle');
    const howEl = document.querySelectorAll('.how-frame');
    const clsTextEl = document.querySelectorAll('.cls-text');
    const clsTitleEl = document.querySelectorAll('.cls-title');
    const faqsPressEl = document.querySelectorAll('.FAQs-press');
    const howHorEl = document.querySelectorAll('.how-frame-hor');
    const clsBtnEl = document.querySelectorAll('.cls-btn');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class when element comes into view
          observer.unobserve(entry.target); // Optional: Stop observing once the element is visible
        }
      });
    }, { threshold: 0.1 }); // threshold is how much of the element should be visible to trigger the event
  
    aboutEl.forEach(el => {
      observer.observe(el); // Observe each element
    });

    valueEl.forEach(el => {
        observer.observe(el); // Observe each element
    });

    refTitleEl.forEach(el => {
        observer.observe(el); // Observe each element
    });

    subtitleEl.forEach(el => {
        observer.observe(el); // Observe each element
    });

    howEl.forEach(el => {
    observer.observe(el); // Observe each element
    });

    clsTitleEl.forEach(el => {
        observer.observe(el); // Observe each element
    });

    clsTextEl.forEach(el => {
        observer.observe(el); // Observe each element
    });

    faqsPressEl.forEach(el => {
        observer.observe(el); // Observe each element
    });

    howHorEl.forEach(el => {
        observer.observe(el); // Observe each element
    });
    
    clsBtnEl.forEach(el => {
      observer.observe(el); // Observe each element
    });
  });
  