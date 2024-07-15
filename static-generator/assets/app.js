// get the magnito
const magnito = document.querySelector('.magnito');
const magnitoText = document.querySelector('.magnito .text');

// mouse move stuff
const activateMagnito = (event) => {
	const boundBox = magnito.getBoundingClientRect();
	const magnetoStrength = 40;
	const magnetoTextStrength = 80;
	let newX, newY;
	if (event.type === "mousemove") {
		newX = (event.clientX - boundBox.left) / magnito.offsetWidth - 0.5;
		newY = (event.clientY - boundBox.top) / magnito.offsetHeight - 0.5;
	} else if (event.type === 'touchmove') {
		event.preventDefault();
		newX = (event.touches[0].clientX - boundBox.left) / magnito.offsetWidth - 0.5;
		newY = (event.touches[0].clientY - boundBox.top) / magnito.offsetHeight - 0.5;
	}

	// move button to new position
	gsap.to(magnito, {
		duration: 1,
		x: newX * magnetoStrength,
		y: newY * magnetoStrength,
		ease: 'power4.out'
	});

	gsap.to(magnitoText, {
		duration: 1,
		x: newX * magnetoTextStrength,
		y: newY * magnetoTextStrength,
		ease: 'power4.out'
	});

};
// mouse leave stuff
const resetMagnito = (_) => {
	gsap.to(magnito, {
		duration: 1,
		x: 0,
		y: 0,
		ease: 'power4.out'
	});

	gsap.to(magnitoText, {
		duration: 1,
		x: 0,
		y: 0,
		ease: 'power4.out'
	});

};

// mouse events
magnito.addEventListener('mousemove', activateMagnito);
magnito.addEventListener('mouseleave', resetMagnito);

// touch events
magnito.addEventListener('touchmove', activateMagnito, { passive: false });
magnito.addEventListener('touchend', resetMagnito);
magnito.addEventListener('touchcancel', resetMagnito);
