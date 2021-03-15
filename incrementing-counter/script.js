const counters = document.querySelectorAll('[data-counter]');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const desiredValue = parseInt(counter.getAttribute('data-counter'), 10);
    const actualValue = parseInt(counter.innerText, 10);
    const incrementValue = desiredValue / 200;

    if (actualValue < desiredValue) {
      counter.innerText = Math.ceil(actualValue + incrementValue);
      setTimeout(updateCounter, 1);

      return true;
    }

    counter.innerText = desiredValue;
  }

  updateCounter();
});