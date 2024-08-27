let imgs = document.querySelectorAll('.img')

for (let i = 0; i < imgs.length; i++) {
    const image = imgs[i];
    
    image.setAttribute('description', image.children[0].alt)

    image.addEventListener('click', () => {
        image.classList.toggle('full')
    });
}
