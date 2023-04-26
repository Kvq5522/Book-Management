<<<<<<< HEAD
//toogle navbar
=======
'use strict';

>>>>>>> 8f2df5576ce67969eaa50cd82ff53541b4d6196f
let el = document.getElementById("wrapper");
let toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

//others
let navbar_highlight = document.getElementById('home-link').classList.add('active');
