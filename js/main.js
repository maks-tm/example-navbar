const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');


/* Show Mobile Menu */
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
    document.querySelector(".dropdown-content").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelector(".dropdown-content").classList.remove('show');
  }
}


/* Show user account menu */
const closeBtn = document.querySelector('.closebtn');
const openBtn = document.querySelector('.openBtn');
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

/* Hide user account menu */
function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

closeBtn.addEventListener('click', () => {
  closeNav()
})

openBtn.addEventListener('click', () => {
  openNav()
})






            