(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
      container: document.querySelector("main"),
      burgerBtn: document.querySelector(".burger-btn"),
      footer: document.querySelector("footer")
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-burger-open");
      refs.container.classList.toggle("some-class");
      refs.footer.classList.toggle("some-class");
      refs.burgerBtn.classList.toggle("hide");
    }
  })();