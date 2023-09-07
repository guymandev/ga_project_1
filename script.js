const navMenu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const allSections = document.querySelectorAll('#main section');

navMenu.addEventListener('click', function(event) {
    event.preventDefault();
    const clickedLink = event.target;
    if (clickedLink.tagName !== 'A') return;
    
    if (clickedLink.innerText.toLowerCase() !== 'contact') {

        allSections.forEach(function(section) {
            if (section.id === clickedLink.innerText.toLowerCase()) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            };
        });       
    };
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    

