(() => {
  // assets/app.js
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
})();
