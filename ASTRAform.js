window.onbeforeunload = function () {
    window.scrollTo(0, 0); // Forces the scroll to the top when page reloads
};


document.addEventListener("DOMContentLoaded", function() {
    const labelsEl = document.querySelectorAll('.labels');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class when element comes into view
          observer.unobserve(entry.target); // Optional: Stop observing once the element is visible
        }
      });
    }, { threshold: 0.1 }); // threshold is how much of the element should be visible to trigger the event
  
    labelsEl.forEach(el => {
      observer.observe(el); // Observe each element
    });
  });
  