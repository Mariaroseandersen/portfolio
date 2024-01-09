const initSlider = () => {
  // Henter referencer til elementerne i HTML-dokumentet
  const imageList = document.querySelector(".slider_wrapper .image_list");
  const slideButtons = document.querySelectorAll(".slider_wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider_scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar_thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Håndterer træk på scrollbar-thumb'en
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    // Opdaterer thumb'ens position ved musebevægelse
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      // Begrænser thumb'ens position inden for scrollbar-området
      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      // Opdaterer thumb'ens position og scroll-områdets position
      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    // Fjerner event listeners ved 'mouseup'
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Tilføjer event listener for træk-interaktion
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Lytter til klik på slide-buttons og scroller billederne
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev_slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const initSlider = () => {
    // Henter referencer til elementerne i HTML-dokumentet
    const imageList = document.querySelector(".slider_wrapper .image_list");
    const slideButtons = document.querySelectorAll(".slider_wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider_scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar_thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Håndterer træk på scrollbar-thumb'en
    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;

      // Opdaterer thumb'ens position ved musebevægelse
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Begrænser thumb'ens position inden for scrollbar-området
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        // Opdaterer thumb'ens position og scroll-områdets position
        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      // Fjerner event listeners ved 'mouseup'
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      // Tilføjer event listener for træk-interaktion
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    // Lytter til klik på slide-buttons og scroller billederne
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev_slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    // Funktion til at håndtere visningen af slide-buttons baseret på scroll-positionen
    const handleSlideButton = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    // Opdaterer scrollbar-thumb'ens position baseret på billedernes rulning
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Lytter til scroll-hændelser på imageList og udfører relevante opdateringer
    imageList.addEventListener("scroll", () => {
      handleSlideButton();
      updateScrollThumbPosition();
    });
  };

  window.addEventListener("load", initSlider);
};
