const accordion = document.getElementsByClassName("accordion_faq");
const firstFaq = document.querySelector(".accordion_faq--first");

firstFaq.classList.add("active");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
