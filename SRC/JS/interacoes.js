const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.textContent = "↑";
btnTopo.style.display = "none";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.width = "60px";
btnTopo.style.height = "60px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "50%"; // totalmente redondo
btnTopo.style.backgroundColor = "#0099ff";
btnTopo.style.color = "#fff";
btnTopo.style.fontSize = "24px";
btnTopo.style.fontWeight = "bold";
btnTopo.style.cursor = "pointer";
btnTopo.style.zIndex = "999";
btnTopo.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
document.body.appendChild(btnTopo);

window.onscroll = function () {
  btnTopo.style.display = window.scrollY > 200 ? "block" : "none";
};

btnTopo.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
