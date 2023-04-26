//toggle navbar
let el = document.getElementById("wrapper");
let toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

//others
let add_btn = document.getElementById("add-btn");
let close_add_section = document.getElementById("close");
let navbar_highlight = document.getElementById("book-link").classList.add("active");

add_btn.addEventListener('click', () => {
    let add_section = document.getElementById("add-book");
    add_section.style.display = 'block';
})
