let block = document.querySelector('#block');
let elem = document.querySelectorAll('.element');
let link = document.querySelectorAll('.element__link');

block.addEventListener('click', (event) => {
    let currentTarget = event.target;
    console.log(currentTarget);
    for (let i of elem) {
        i.classList.remove('active');
    }
    currentTarget.classList.add('active');
})

// element.parentElement - родительский элемент.
// element.getAttribute(); - получить значение указанного атрибута.
// Метод append позволяет вставить в конец какого-либо  элемента другой элемент или строку

for (let item of link) {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(item.parentElement);
        console.log(item.getAttribute('href'));
        item.parentElement.style.backgroundColor = 'green';
        item.parentElement.append(item.getAttribute('href'));
    })
}   