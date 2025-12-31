
  function getNextNewYear() {
    const now = new Date();
    return new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
  }

  const newYearDate = getNextNewYear().getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const diff = newYearDate - now;

    if (diff <= 0) {
      clearInterval(countdown);
      document.querySelector(".ny-countdown").innerHTML =
        "<h1>🎆 Happy New Year! 🎆</h1>";
      return;
    }

    document.getElementById("days").innerText =
      Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText =
      Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").innerText =
      Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("seconds").innerText =
      Math.floor((diff / 1000) % 60);
  }, 1000);

