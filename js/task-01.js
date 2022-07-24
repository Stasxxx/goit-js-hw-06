const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories', categoriesEl.length);
console.log("")

categoriesEl.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
    console.log("")
});