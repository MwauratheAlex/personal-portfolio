document.addEventListener("DOMContentLoaded", () => {
	// text animation
	const textEl = document.getElementById("hero-anim-text");
	const dotEl = document.getElementById("hero-anim-dot");

	textEl.classList.add("animate-hero-text");
	dotEl.classList.add("animate-hero-dot");

	const scriptURL = 'https://script.google.com/macros/s/AKfycbxNhcHCtarNOEDtg_z9xxhWjDlnQxLZltNrf-XqhNLQ7GY7wza8wGe3CDnrdLpj4J3a/exec'
	const form = document.forms['submit-to-google-sheet']
	const msg = document.getElementById("msg")

	// contact form
	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(_ => {
				msg.innerHTML = "message sent"
				setTimeout(() => {
					msg.innerHTML = ""
				}, 3000)
				form.reset()
			})
			.catch(error => console.error('Error!', error.message))
	})
});

// magnito project button animation
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

// general animation stuff
// navbar
const navbar = document.getElementById('navbar');
const navElements = document.querySelectorAll('.nav__element');
const home = document.getElementById('home');

gsap.set(navElements, { backgroundColor: "", color: "rgba(191, 219, 254,0.8)" })
gsap.to(navElements, {
	color: "rgba(191, 219, 254,0.9)",
	scrollTrigger: {
		trigger: home,
		start: "160% 80%",
		end: "200% 90%",
		scrub: true,
	}
});
gsap.set(navbar, { backgroundColor: "", color: "rgba(0,0,0,0.1)" })
gsap.to(navbar, {
	backgroundColor: "rgba(0,0,0, 0.8)",
	scrollTrigger: {
		trigger: home,
		start: "160% 80%",
		end: "200% 90%",
		scrub: true,
	}
});


// navbar elements
const navLogo = document.querySelector('.nav__logo');

gsap.to(navLogo, {
	opacity: 1,
	duration: 1,
	x: 0,
});
gsap.to(navElements, {
	opacity: 0.7,
	duration: 1,
	stagger: 0.1,
	ease: 'bounce.out'
});

// section headings slide in from right
const sectionHeadings = document.querySelectorAll('.section__heading');
gsap.set(sectionHeadings, { x: 100 });
sectionHeadings.forEach((heading) => {
	gsap.to(heading, {
		scrollTrigger: {
			trigger: heading,
			start: 'top bottom',
			toggleActions: 'play none none reset',
		},
		x: 0,
	});
});
// const entries = document.querySelectorAll('.entry');
// 
// entries.forEach((entry) => {
// 	const textRight = entry.querySelector('.text__right');
// 
// 	const tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: entry,
// 			start: 'top bottom',
// 			end: 'bottom 90%',
// 			scrub: true
// 		},
// 	});
// 
// 	tl.fromTo(
// 		textRight,
// 		{ xPercent: 0, opacity: 0 },
// 		{ xPercent: 0, opacity: 0.95 },
// 		'<'
// 	);
// })

