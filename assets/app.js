(() => {
  // assets/app.js
  document.addEventListener("DOMContentLoaded", () => {
    const textEl = document.getElementById("hero-anim-text");
    const dotEl = document.getElementById("hero-anim-dot");
    textEl.classList.add("animate-hero-text");
    dotEl.classList.add("animate-hero-dot");
    const scriptURL = "https://script.google.com/macros/s/AKfycbxNhcHCtarNOEDtg_z9xxhWjDlnQxLZltNrf-XqhNLQ7GY7wza8wGe3CDnrdLpj4J3a/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) }).then((_) => {
        msg.innerHTML = "message sent";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 3e3);
        form.reset();
      }).catch((error) => console.error("Error!", error.message));
    });
  });
  var magnito = document.querySelector(".magnito");
  var magnitoText = document.querySelector(".magnito .text");
  var activateMagnito = (event) => {
    const boundBox = magnito.getBoundingClientRect();
    const magnetoStrength = 40;
    const magnetoTextStrength = 80;
    let newX, newY;
    if (event.type === "mousemove") {
      newX = (event.clientX - boundBox.left) / magnito.offsetWidth - 0.5;
      newY = (event.clientY - boundBox.top) / magnito.offsetHeight - 0.5;
    } else if (event.type === "touchmove") {
      event.preventDefault();
      newX = (event.touches[0].clientX - boundBox.left) / magnito.offsetWidth - 0.5;
      newY = (event.touches[0].clientY - boundBox.top) / magnito.offsetHeight - 0.5;
    }
    gsap.to(magnito, {
      duration: 1,
      x: newX * magnetoStrength,
      y: newY * magnetoStrength,
      ease: "power4.out"
    });
    gsap.to(magnitoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: "power4.out"
    });
  };
  var resetMagnito = (_) => {
    gsap.to(magnito, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "power4.out"
    });
    gsap.to(magnitoText, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "power4.out"
    });
  };
  magnito.addEventListener("mousemove", activateMagnito);
  magnito.addEventListener("mouseleave", resetMagnito);
  magnito.addEventListener("touchmove", activateMagnito, { passive: false });
  magnito.addEventListener("touchend", resetMagnito);
  magnito.addEventListener("touchcancel", resetMagnito);
  var navElements = document.querySelectorAll(".nav__element");
  var navLogo = document.querySelector(".nav__logo");
  gsap.to(navLogo, {
    opacity: 1,
    duration: 1,
    x: 0
  });
  gsap.to(navElements, {
    opacity: 1,
    duration: 2,
    stagger: 0.1,
    ease: "bounce.out"
  });
  var sectionHeadings = document.querySelectorAll(".section__heading");
  gsap.set(sectionHeadings, { x: 100 });
  sectionHeadings.forEach((heading) => {
    gsap.to(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "top bottom",
        toggleActions: "play none none reset"
      },
      x: 0
    });
  });
})();
