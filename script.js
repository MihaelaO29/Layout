document.getElementById("flag-selector").addEventListener("click", () => {
    document.querySelector(".country-list").style.display = "block";
});

document.querySelectorAll(".country-list li").forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("selected-flag").src = item.getAttribute("data-flag");
        document.getElementById("selected-code").textContent = item.getAttribute("data-code");
        document.getElementById("phone").value = document.getElementById("phone").value.replace(/^\+\d+\s*/, '');
        document.querySelector(".country-list").style.display = "none";
    });
});

document.querySelector('.description-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.form-container').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

document.querySelector('.description-image-file').addEventListener('click', function () {
    document.querySelector('.form-container').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});