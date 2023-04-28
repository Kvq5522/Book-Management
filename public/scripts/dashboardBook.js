//toggle navbar
let el = document.getElementById("wrapper");
let toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

//others
let add_btn = document.getElementById("add-btn");
let close_add_section = document.getElementById("close-add-btn");
let edit_btn = document.querySelectorAll('[id^="edit-btn-"]');
let close_edit_section = document.getElementById("close-edit-btn");
let submit_add_btn = document.getElementById("submit-add-btn");

let navbar_highlight = document.getElementById("book-link").classList.add("active");

add_btn.addEventListener('click', () => {
    let add_section = document.getElementById("add-book");
    add_section.style.display = 'block';
})

close_add_section.addEventListener('click', () =>{
    let add_section = document.getElementById("add-book");
    add_section.style.display = "none";
})

edit_btn.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        let edit_section = document.getElementById("edit-book");
        edit_section.style.display ='block';
    })
})

close_edit_section.addEventListener('click', () => {
    let edit_section = document.getElementById("edit-book");
    edit_section.style.display = "none";
})

submit_add_btn.addEventListener('click', async () => {
    let name = document.getElementById("add-name").value;
    let category = document.getElementById("add-category").value;
    let author = document.getElementById("add-author").value;
    let number = document.getElementById("add-number").value;
    let price = document.getElementById("add-price").value;

    let data = await fetch('/book/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                category: category,
                author: author,
                quantity: number,
                price: price
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message == 'Add book successfully') {
                    let add_section = document.getElementById("add-book");
                    add_section.style.display = "none";
                    alert('Add book successfully');
                    addBookToTable(name, category, author, number, price);
                    
                } else {
                    alert('Add book failed');
                }
            }
        );
});

const addBookToTable = (name, category, author, number, price) => {
    let table = document.getElementById("book-table");
    let size = table.rows.length;
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4= row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = name;
    cell1.id = `name-${size}`;
    cell2.innerHTML = category;
    cell2.id = `category-${size}`;
    cell3.innerHTML = author;
    cell3.id = `author-${size}`;
    cell4.innerHTML = number;
    cell4.id = `number-${size}`; 
    cell5.innerHTML = price;
    cell5.id = `price-${size}`;

    let edit_btn = document.createElement("button");
    edit_btn.innerHTML = "Edit";
    edit_btn.classList.add("edit-btn");
    edit_btn.id = `edit-btn-${size}`;

    let delete_btn = document.createElement("button");
    delete_btn.innerHTML = "Delete";
    delete_btn.classList.add("delete-btn");
    delete_btn.id = `delete-btn-${size}`;

    cell6.appendChild(edit_btn);
    cell6.appendChild(delete_btn);
}
