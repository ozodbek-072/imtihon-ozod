document
  .getElementById("shuffle-button")
  .addEventListener("click", shuffleDishes);
document
  .getElementById("reverse-button")
  .addEventListener("click", reverseDishes);

function shuffleDishes() {
  const dishesContainer = document.querySelector(".dishes-container");
  const dishes = Array.from(dishesContainer.children);
  const shuffledDishes = dishes.sort(() => Math.random() - 0.5);
  shuffledDishes.forEach((dish) => dishesContainer.appendChild(dish));
}

function reverseDishes() {
  const dishesContainer = document.querySelector(".dishes-container");
  const dishes = Array.from(dishesContainer.children);
  const reversedDishes = dishes.reverse();
  reversedDishes.forEach((dish) => dishesContainer.appendChild(dish));
}

//

// function nextTestimonial() {
//   const cardsContainer = document.querySelector(".testimonial-cards");
//   const cards = document.querySelectorAll(".testimonial-card");
//   cardsContainer.appendChild(cards[0]);
// }

// function prevTestimonial() {
//   const cardsContainer = document.querySelector(".testimonial-cards");
//   const cards = document.querySelectorAll(".testimonial-card");
//   cardsContainer.insertBefore(cards[cards.length - 1], cards[0]);
// }

//

document.querySelector(".trigger-image").addEventListener("click", function () {
  var videoContainer = document.getElementById("videoContainer");
  var youtubeVideo = document.getElementById("youtubeVideo");
  youtubeVideo.src = "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"; // Replace with your video ID
  videoContainer.classList.add("active");
});

document.getElementById("closeButton").addEventListener("click", function () {
  var videoContainer = document.getElementById("videoContainer");
  var youtubeVideo = document.getElementById("youtubeVideo");
  videoContainer.classList.remove("active");
  youtubeVideo.src = ""; // Stop the video
});

// nx

document.getElementById("playButton").addEventListener("click"),
  function () {
    var video = document.getElementById("modalVideo");
    video.play();
  };


  // 

  document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter button');
  const menuItems = document.querySelectorAll('.menu .item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');
      menuItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});



// 

document.addEventListener('DOMContentLoaded', () => {
  const shuffleButton = document.getElementById('shuffle-btn');
  const reverseButton = document.getElementById('reverse-btn');
  const cards = document.querySelectorAll('.card-container .card');

  shuffleButton.addEventListener('click', () => {
    const images = Array.from(cards).map(card => card.querySelector('img'));
    const shuffledImages = images.sort(() => 0.5 - Math.random());

    shuffledImages.forEach((img, index) => {
      cards[index].querySelector('img').src = img.src;
      cards[index].querySelector('img').alt = img.alt;
    });
  });

  reverseButton.addEventListener('click', () => {
    const images = Array.from(cards).map(card => card.querySelector('img'));
    const reversedImages = images.reverse();

    reversedImages.forEach((img, index) => {
      cards[index].querySelector('img').src = img.src;
      cards[index].querySelector('img').alt = img.alt;
    });
  });
});
