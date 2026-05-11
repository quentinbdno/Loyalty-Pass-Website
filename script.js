const qrButton = document.querySelector("#toggle-qr");
const qrPanel = document.querySelector("#qr-panel");

if (qrButton && qrPanel) {
  qrButton.addEventListener("click", () => {
    const isHidden = qrPanel.hasAttribute("hidden");

    if (isHidden) {
      qrPanel.removeAttribute("hidden");
      qrPanel.classList.add("is-visible");
      qrButton.textContent = "Masquer le QR code";
      return;
    }

    qrPanel.setAttribute("hidden", "");
    qrPanel.classList.remove("is-visible");
    qrButton.textContent = "Afficher le QR code";
  });
}
