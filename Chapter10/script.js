document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', function (e) {
            const imageName = e.target.src.split('/').pop().replace('-thumbnail', '');
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            const img = document.createElement('img');
            img.src = `images/${imageName}`;
            overlay.appendChild(img);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});