$(document).ready(function () {
    let currentIndex = 0;

    function showSlide(index) {
      const translateValue = -index * 100 + "%";
      $(".carousel-inner").css("transform", "translateX(" + translateValue + ")");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % $(".carousel-item").length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + $(".carousel-item").length) % $(".carousel-item").length;
      showSlide(currentIndex);
    }

    // Autoplay
    setInterval(nextSlide, 3000);

    // Event listeners for manual navigation
    $(".carousel-inner").on("swipeleft", nextSlide);
    $(".carousel-inner").on("swiperight", prevSlide);
  });