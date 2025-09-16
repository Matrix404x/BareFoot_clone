
  window.onscroll = function() {
    document.getElementById("scrollToTopBtn").style.display =
      (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
        ? "block" : "none";
  };

  document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
