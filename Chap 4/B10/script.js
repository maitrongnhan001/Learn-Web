document.onclick = () => {
    //green
    let x = parseInt(Math.random() * 1000);
    let y = parseInt(Math.random() * 800);
    document.getElementById("green").style.setProperty("left", x + "px");
    document.getElementById("green").style.setProperty("top", y + "px");

    //red
    x = parseInt(Math.random() * 1000);
    y = parseInt(Math.random() * 400);
    document.getElementById("red").style.setProperty("left", x + "px");
    document.getElementById("red").style.setProperty("top", y + "px");

    //black
    x = parseInt(Math.random() * 1000);
    y = parseInt(Math.random() * 400);
    document.getElementById("black").style.setProperty("left", x + "px");
    document.getElementById("black").style.setProperty("top", y + "px");
}