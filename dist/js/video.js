document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('.video-container video');

    videos.forEach(function (video) {
      video.addEventListener('click', function () {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  });