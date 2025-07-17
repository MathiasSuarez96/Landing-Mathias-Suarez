document.getElementById("btn-magico").addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.textContent = "Gracias por visitar mi página!";
  toast.style.position = "fixed";
  toast.style.bottom = "2rem";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#111";
  toast.style.color = "#fff";
  toast.style.padding = "1rem 2rem";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "1rem";
  toast.style.fontFamily = "Poppins, sans-serif";
  toast.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
  toast.style.zIndex = 1000;
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.5s ease";

  document.body.appendChild(toast);
  void toast.offsetWidth;
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 3000);
});