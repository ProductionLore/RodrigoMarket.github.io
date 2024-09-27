let cartCount = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.getAttribute('data-product');
        const price = event.target.getAttribute('data-price');
        cartCount++;

        document.getElementById('cart-count').textContent = cartCount;

        alert(`${product} добавлен в корзину по цене ${price}₴. Всего товаров: ${cartCount}.`);
    });
});
