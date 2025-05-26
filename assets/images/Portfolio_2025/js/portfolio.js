
document.addEventListener("DOMContentLoaded", () => {
    // Voorbeeld: Event listeners toevoegen op "Learn more" paragrafen (kan ook zonder JS door Bootstrap data attribuut)
  
    const learnMoreElems = document.querySelectorAll('.underline-text[data-bs-toggle="modal"]');
  
    learnMoreElems.forEach(elem => {
      elem.addEventListener('click', (event) => {
        const targetModalId = elem.getAttribute('data-bs-target');
        if (!targetModalId) return;
  
        // Bootstrap modal instance ophalen
        const modalElement = document.querySelector(targetModalId);
        if (!modalElement) return;
  
        const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
        modal.show();
      });
    });
  
    // Eventueel hier extra code voor modals toevoegen
  });
  