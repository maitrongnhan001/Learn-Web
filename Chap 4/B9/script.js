var found = true;
document.onclick = () => {
    if (found) {
        document.getElementById("green").style.setProperty("visibility", "hidden");
    } else {
        document.getElementById("green").style.setProperty("visibility", "visible")
    }
    found = !found;
}