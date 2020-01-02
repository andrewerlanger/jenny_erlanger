var navbarManager = {
  init: function () {
    this.burger = document.getElementById("burger");
    this.navbarOptions = document.getElementById("navbar-options");
    this.setEventListener();
  },
  setEventListener: function () {
    this.burger.addEventListener("click", () => {
      console.log(this.navbarOptions);
      this.navbarOptions.classList.toggle("hidden");
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  navbarManager.init();
})