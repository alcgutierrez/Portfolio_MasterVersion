<script>
window.onscroll = function() {myFunction()};

var main_navbar = document.getElementById("main_navbar");
var sticky = main_navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_navbar.classList.add("sticky")
  } else {
    main_navbar.classList.remove("sticky");
  }
}
</script>
