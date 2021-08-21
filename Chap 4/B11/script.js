document.onclick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.getElementById("green").style.setProperty("left", x + "px");
    document.getElementById("green").style.setProperty("top", y + "px");
}