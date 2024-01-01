document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');
    const sidePanel = document.querySelector('.side-panel');

    overlay.addEventListener('click', function () {
        sidePanel.style.transform = 'translateX(-100%)';
        overlay.style.display = 'none';
    });

    document.querySelector('.content').addEventListener('click', function () {
        sidePanel.style.transform = 'translateX(-100%)';
        overlay.style.display = 'none';
    });

    document.querySelector('.container').addEventListener('click', function (e) {
        if (e.target.classList.contains('open-panel')) {
            sidePanel.style.transform = 'translateX(0)';
            overlay.style.display = 'block';
        }
    });
});
