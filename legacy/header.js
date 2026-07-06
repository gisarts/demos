(() => {
  let didScroll = false;
  let lastScrollTop = 0;
  const delta = 5;
  const header = document.querySelector("header");
  const navbarHeight = header.offsetHeight;

  // Flag that a scroll happened
  window.addEventListener("scroll", () => {
    didScroll = true;
  });

  // Every 250ms, if we’ve scrolled, run the check
  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    // Ignore small scrolls
    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scrolled down past the header → hide it
      header.classList.remove("nav-down");
      header.classList.add("nav-up");
    } else if (
      st + window.innerHeight <
      document.documentElement.scrollHeight
    ) {
      // Scrolled up → show it
      header.classList.remove("nav-up");
      header.classList.add("nav-down");
    }

    lastScrollTop = st;
  }
})();
