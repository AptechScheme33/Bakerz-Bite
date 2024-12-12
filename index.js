// Navbar Starts
// Get elements for sidebar toggle and close button
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const sidebarToggle = document.getElementById('sidebar-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const visitorCounter = document.getElementById('visitorCounter');

// Function to toggle the sidebar visibility
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show');   // Add 'show' class to make sidebar visible
    content.classList.toggle('expanded'); // Move content to the right when sidebar is open
});

// Function to close the sidebar when cross button is clicked
// closeSidebar.addEventListener('click', function() {
//     sidebar.classList.remove('show');  // Remove 'show' class to hide sidebar
//     content.classList.remove('expanded'); // Move content back to the left
// });

// Visitor Counter Logic
let visitorCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;

// Increment the visitor count when the page loads
visitorCount++;
localStorage.setItem('visitorCount', visitorCount); // Save visitor count to local storage

// Update the visitor counter display
visitorCounter.textContent = visitorCount;
// Navbar Ends
// Footer Button Starts






  // Footer Button Ends
//   CounterUp JS Starts
  const counters = document.querySelectorAll('.counter');
  const speed = 1000; // Adjust speed for smooth animation

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
//   CounterUp JS Ends


     
   //Comparison Table Starts
// Function to animate the ticks and crosses
function animateIcons() {
const icons = document.querySelectorAll('.tick, .cross');
icons.forEach((icon, index) => {
 setTimeout(() => {
   icon.classList.add('appear');
 }, index * 500); // Delay between each icon's animation
});
}

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
 if (entry.isIntersecting) {
   animateIcons(); // Call the animation function when in view
   observer.unobserve(entry.target); // Stop observing after animation
 }
});
});

// Observe the comparison table
const comparisonTable = document.querySelector('.comparison-table');
observer.observe(comparisonTable);
 //Comparison Table Ends
// Feedback Rating Starts

// Star rating functionality
const stars = document.querySelectorAll('.stars i');
let ratingValue = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    ratingValue = parseInt(star.getAttribute('data-value'));
    stars.forEach(s => {
      s.classList.remove('text-warning');
    });
    for (let i = 0; i < ratingValue; i++) {
      stars[i].classList.add('text-warning');
    }
  });
});

// Form submission logic
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();

  const form = this;

  // Check if a rating is selected
  if (ratingValue === 0) {
    // Show SweetAlert warning
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please select a rating before submitting!',
      background: '#000', // Black background
      color: '#fff' // White text
    });
    return; // Prevent form submission if no rating is selected
  }

  // Validate form
  if (form.checkValidity()) {
    // Collect feedback data
    const feedback = {
      rating: ratingValue,
      review: document.getElementById('review').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value
    };

    // Store feedback in local storage
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    feedbackList.push(feedback);
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

    // Show SweetAlert success message
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your feedback has been submitted successfully.',
      background: '#000', // Black background
      color: '#fff' // White text
    });

    // Reset form
    form.reset();
    ratingValue = 0;
    stars.forEach(star => star.classList.remove('text-warning'));
    form.classList.remove('was-validated');
  } else {
    form.classList.add('was-validated');
  }
});

function book() {
  // Scroll to the form
  document.getElementById('appointmentForm').scrollIntoView({ behavior: 'smooth' });
}

// Professional Section JS
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('show-content'); // Show content when hovering
  });

  // Remove the class on clicking a card or after interaction
  card.addEventListener('click', () => {
    card.classList.toggle('show-content'); // Toggle visibility when clicked
  });

  // Optionally, remove the class when clicking outside or on another card
  card.addEventListener('mouseleave', () => {
    // The content stays visible until explicitly removed by clicking or toggle
  });
});


