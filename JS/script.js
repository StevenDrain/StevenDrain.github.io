document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.ImageScale');
    images.forEach(img => {
        img.addEventListener('click', (event) => {
            event.stopPropagation();
            if (document.body.classList.contains('darken')) {
                document.body.classList.remove('darken');
                img.classList.remove('hovered');
                img.classList.remove('no-hover');
            } else {
                document.body.classList.add('darken');
                img.classList.add('hovered');
                img.classList.add('no-hover');
            }
        });
    });

    document.addEventListener('click', () => {
        if (document.body.classList.contains('darken')) {
            document.body.classList.remove('darken');
            images.forEach(img => {
                img.classList.remove('hovered');
                img.classList.remove('no-hover');
            });
        }
    });
});