document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms.filters;
    const shopElements = document.querySelectorAll('.shop_elements');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const genres = Array.from(form.elements.genre).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
        const categories = Array.from(form.elements.category).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        shopElements.forEach(element => {
            const elementGenre = element.getAttribute('genre');
            const elementCategory = element.getAttribute('category');

            const showProduct = (genres.length === 0 || genres.includes(elementGenre)) &&
                                (categories.length === 0 || categories.includes(elementCategory));

            element.style.display = showProduct ? 'inline-block' : 'none';
        });
    });
});