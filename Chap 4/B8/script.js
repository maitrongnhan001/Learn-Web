const btn1 = document.getElementById("btn1");
btn1.onclick = () => {
    document.getElementById("p1").style.setProperty("visibility", "visible");
}

const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
    document.getElementById("p1").style.setProperty("visibility", "hidden");
}