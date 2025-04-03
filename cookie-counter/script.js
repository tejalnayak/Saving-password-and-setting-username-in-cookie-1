// Function to get a cookie value by name
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Function to increment the count and update the cookie
function incrementCount() {
    let count = parseInt(getCookie("visitCount")) || 0;
    count++;
    setCookie("visitCount", count, 7); // Cookie expires in 7 days
    document.getElementById("countDisplay").textContent = count;
}

// Ensure DOM is loaded before running script
document.addEventListener("DOMContentLoaded", function() {
    incrementCount();
});