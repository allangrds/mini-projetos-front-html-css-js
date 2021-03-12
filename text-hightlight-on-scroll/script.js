const paragraphToHighlight = document.querySelectorAll('.highlight');

function isInViewport (element) {
  const distance = element.getBoundingClientRect();
  
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', function(event) {
  paragraphToHighlight.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add("highlighted");
      }
  });
}, false);