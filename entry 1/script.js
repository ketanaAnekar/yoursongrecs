document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', function () {
            toggleKeyState(this);
        });
    });

    function toggleKeyState(key) {
        key.classList.toggle('active');
    }
});


