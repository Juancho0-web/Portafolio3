const botones = document.querySelectorAll('.btncomprar');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
});