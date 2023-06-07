
// function fadeAndRedirect() {
//     document.body.classList.add("fade-out");
//     setTimeout(function () {
//         window.location.href = "index4.html"; // Replace with the desired target page URL
//     }, 2000); // Adjust the delay as needed
// }


function fadeAndRedirect() {
    setTimeout(function () {
        document.body.classList.add("fade-out");
        setTimeout(function () {
            window.location.href = "index4.html"; // Replace with the desired target page URL
        }, 1000); // Adjust the fade-out delay as needed (in milliseconds)
    }, 8000); // Adjust the additional delay before fading (in milliseconds)
}

function fadeBackground() {
    document.body.style.backgroundColor = "white";
}
setTimeout(fadeBackground, 9000); // 