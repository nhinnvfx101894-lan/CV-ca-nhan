document.addEventListener("DOMContentLoaded", function () {
  // Requirement 9: Email verification regex
  const btnSubmitEmail = document.getElementById("btn-submit-email");
  const inputEmail = document.getElementById("user-email");
  const emailError = document.getElementById("email-error");
  const emailFormContainer = document.getElementById("email-form-container");
  const personalDetails = document.getElementById("personal-details");

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (btnSubmitEmail && inputEmail) {
    btnSubmitEmail.addEventListener("click", function () {
      const emailValue = inputEmail.value.trim();
      if (emailValue !== "" && regex.test(emailValue)) {
        emailError.classList.add("hide");
        emailFormContainer.classList.add("hide");
        personalDetails.classList.remove("hide");
      } else {
        emailError.classList.remove("hide");
      }
    });
  }

  // Requirement 10: Toggle View More / View Less
  const clickableTriggers = document.querySelectorAll(
    ".Resume-item .item-title, .Resume-item .btn-view-more",
  );

  clickableTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      const parentCard = this.closest(".Resume-item");
      if (!parentCard) return;

      const infoContent = parentCard.querySelector(".Resume-item-info");
      const button = parentCard.querySelector(".btn-view-more");

      if (infoContent.classList.contains("hide")) {
        infoContent.classList.remove("hide");
        parentCard.classList.add("is-open");
        if (button) button.innerHTML = "&#9650; VIEW LESS";
      } else {
        infoContent.classList.add("hide");
        parentCard.classList.remove("is-open");
        if (button) button.innerHTML = "&#9660; VIEW MORE";
      }
    });
  });
});
