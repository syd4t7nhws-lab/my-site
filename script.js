function sendForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name.trim() === "") {
    alert("名前を入力してください");
    return;
  }

  if (email.trim() === "") {
    alert("メールアドレスを入力してください");
    return;
  }

  if (message.trim() === "") {
    alert("お問い合わせ内容を入力してください");
    return;
  }

  alert("お問い合わせありがとうございます！");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

const fadeElements = document.querySelectorAll('.fade-up');

const fadeInOnScroll = () => {
  fadeElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if (position < screenPosition) {
      element.classList.add('show');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);

fadeInOnScroll();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  hamburger.classList.toggle("open");
});