function showMessage() {
  alert("お問い合わせありがとうございます！");
}

const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  fadeElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      element.classList.add('show');
    }
  });
});