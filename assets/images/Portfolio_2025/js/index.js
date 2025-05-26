document.addEventListener("DOMContentLoaded", () => {
    // Welkom bericht in console
    console.log("Welkom op het portfolio van Donatella!");
  
    // Alert bij klikken op de knop "Bekijk projecten"
    const btnBekijkProjecten = document.querySelector("#home button.btn-orange");
    if (btnBekijkProjecten) {
      btnBekijkProjecten.addEventListener("click", (e) => {
        e.preventDefault(); // voorkomt navigatie (optioneel)
        alert("Je gaat nu naar de projectpagina!");
        // window.location.href = "./portfolio.html"; // als je wil dat hij echt navigeert
      });
    }
  
    // Alert bij klikken op "Portfolio Highlights" titel
    const portfolioTitle = document.querySelector("#projecten h2");
    if (portfolioTitle) {
      portfolioTitle.style.cursor = "pointer"; // visuele hint
      portfolioTitle.addEventListener("click", () => {
        alert("Dit zijn enkele hoogtepunten van mijn portfolio!");
      });
    }
  });
  