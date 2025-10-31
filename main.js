const accordion = document.getElementsByClassName("content-container");
const firstFaq = document.querySelector(".first-faq");

firstFaq.classList.add("active");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
