document.getElementById("flag-selector").addEventListener("click", function () {
    document.querySelector(".country-list").style.display = "block";
});

document.querySelectorAll(".country-list li").forEach(function (item) {
    item.addEventListener("click", function () {
        let flagUrl = this.getAttribute("data-flag");
        let countryCode = this.getAttribute("data-code");


        document.getElementById("selected-flag").src = flagUrl;
        document.getElementById("selected-code").textContent = countryCode;


        let phoneInput = document.getElementById("phone");
        if (!phoneInput.value.startsWith(countryCode)) {
            phoneInput.value = countryCode + " ";
        }


        document.querySelector(".country-list").style.display = "none";
    });
});

document.getElementById('phone').addEventListener('input', function(event) {
    var inputValue = event.target.value;
        var cleanedValue = inputValue.replace(/[^0-9]/g, '');
        event.target.value = cleanedValue;
});