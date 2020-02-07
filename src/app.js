var app = function() {
    event.stopPropagation();
    $(document).ready(function(){
          $("div").toggleClass("open");
    });
};

window.onclick = function() {
    document.getElementById("dropdown").classList.remove("open");
}



  