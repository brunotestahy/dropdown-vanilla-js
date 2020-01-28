const App = function() {
  //primitive variables

  //html variables
  const dropdown = document.getElementsByClassName("dropdown-menu");
  const dropdownBtb = document.getElementById("dropdownMenuButton");

  //functions
  function onWindowClick(event) {
    if (!event.target.matches(".dropdown-toggle")) {
      if (dropdown[0].classList.contains("show")) {
        dropdown[0].classList.remove("show");
      }
    }
  }

  function onDropdownBtb() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  //events
  window.addEventListener("click", onWindowClick);
  dropdownBtb.addEventListener("click", onDropdownBtb);
};

App();
