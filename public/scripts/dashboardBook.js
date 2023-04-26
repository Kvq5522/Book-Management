//toggle navbar
let el = document.getElementById("wrapper");
let toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

//others
let add_btn = document.getElementById("add-btn");
let close_add_section = document.getElementById("close-add-button");
let edit_btn = document.getElementById("edit-btn");
let close_edit_section = document.getElementById("close-edit-btn");

let navbar_highlight = document.getElementById("book-link").classList.add("active");

add_btn.addEventListener('click', () => {
    let add_section = document.getElementById("add-book");
    add_section.style.display = 'block';
})

close_add_section.addEventListener('click', () =>{
    let add_section = document.getElementById("add-book");
    add_section.style.display = "none";
})

edit_btn.addEventListener('click', ()=> {
    let add_section = document.getElementById("edit-book");
    add_section.style.display ='block';
})

close_edit_section.addEventListener('click', () => {
    let edit_section = document.getElementById("edit-book");
    edit_section.style.display = "none";
})
