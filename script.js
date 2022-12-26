$(document).ready(function(){
    // typing text animation script
     var typed = new Typed(".typing", {
        strings: ["BSIT STUDENT"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    });

    document.getElementById('toggle-navbar').addEventListener('click', function() {
        var navbar = document.querySelector('.navbar');
        if (navbar.style.display === "none") {
          navbar.style.display = "block";
        } else {
          navbar.style.display = "none";
        }
      });
      