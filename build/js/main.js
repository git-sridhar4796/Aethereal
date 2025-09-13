// Select all elements that have the initial animation class.
const cards = document.querySelectorAll(".card-anime");

// Create the Intersection Observer instance.
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Check if the element is visible in the viewport.
      if (entry.isIntersecting) {
        // Add the final animation class to the element.
        entry.target.classList.add("card-animation");

        // Stop observing the element so the animation only happens once.
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // Set a threshold for when to trigger the animation.
    // 0.2 means the animation will start when 20% of the element is visible.
    threshold: 0.2,
  }
);

// Loop over all the selected cards and tell the observer to watch them.
cards.forEach((card) => {
  observer.observe(card);
});

// NAV-ITEM ANIMATION

// Select all nav items.
const navItems = document.querySelectorAll(".nav-anime");

// Loop through each item and apply the animation after a short delay.
// This creates a staggered effect.
navItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("nav-animation");
  }, 100 * index); // Staggers the animation by 100ms for each item.
});

// NAVBAR BRAND ANIMATION

// Select all nav items.
const navBrand = document.querySelectorAll(".navbar-brand");

// Loop through each item and apply the animation after a short delay.
// This creates a staggered effect.
navBrand.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("brand-animate");
  }, 100 * index); // Staggers the animation by 100ms for each item.
});

// IMAGE CAROUSEL ANIMATION

// Select all elements that have the initial animation class.
const carousels = document.querySelectorAll(".carousel-inner");

// Create the Intersection Observer instance.
const observerC = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Check if the element is visible in the viewport.
      if (entry.isIntersecting) {
        // Add the final animation class to the element.
        entry.target.classList.add("carousel-animate");

        // Stop observing the element so the animation only happens once.
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // Set a threshold for when to trigger the animation.
    // 0.2 means the animation will start when 20% of the element is visible.
    threshold: 0.2,
  }
);

// Loop over all the selected carousels and tell the observer to watch them.
carousels.forEach((carousel) => {
  observerC.observe(carousel);
});

// TESTIMONIAL ANIMATION

// Select all elements that have the initial animation class.
const testimonials = document.querySelectorAll(".testimonial-anime");

// Create the Intersection Observer instance.
const observerT = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Check if the element is visible in the viewport.
      if (entry.isIntersecting) {
        // Add the final animation class to the element.
        entry.target.classList.add("testimonial-animate");

        // Stop observing the element so the animation only happens once.
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // Set a threshold for when to trigger the animation.
    // 0.2 means the animation will start when 20% of the element is visible.
    threshold: 0.3,
  }
);

// Loop over all the selected testimonials and tell the observer to watch them.
testimonials.forEach((testimonial) => {
  observerT.observe(testimonial);
});

// CONTACT FORM ANIMATION

// Select all elements that have the initial animation class.
const contacts = document.querySelectorAll(".contact-anime");

// Create the Intersection Observer instance.
const observerContact = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Check if the element is visible in the viewport.
      if (entry.isIntersecting) {
        // Add the final animation class to the element.
        entry.target.classList.add("contact-animate");

        // Stop observing the element so the animation only happens once.
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // Set a threshold for when to trigger the animation.
    // 0.2 means the animation will start when 20% of the element is visible.
    threshold: 0.3,
  }
);

// Loop over all the selected contacts and tell the observer to watch them.
contacts.forEach((contact) => {
  observerContact.observe(contact);
});

// MAP ANIMATION

// Select all elements that have the initial animation class.
const maps = document.querySelectorAll(".map-anime");

// Create the Intersection Observer instance.
const observerMap = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Check if the element is visible in the viewport.
      if (entry.isIntersecting) {
        // Add the final animation class to the element.
        entry.target.classList.add("map-animate");

        // Stop observing the element so the animation only happens once.
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // Set a threshold for when to trigger the animation.
    // 0.2 means the animation will start when 20% of the element is visible.
    threshold: 0.3,
  }
);

// Loop over all the selected contacts and tell the observer to watch them.
maps.forEach((map) => {
  observerMap.observe(map);
});
