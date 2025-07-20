const music = document.getElementById("bgMusic");
    let isPlaying = false;

    function toggleMode() {
      document.body.classList.toggle('light');
    }

    function toggleAudio() {
      if (!isPlaying) {
        music.muted = false;
        music.play().then(() => {
          isPlaying = true;
        }).catch((e) => {
          alert("Autoplay blocked. Tap again to allow playback.");
          console.error(e);
        });
      } else {
        music.pause();
        isPlaying = false;
      }
    }