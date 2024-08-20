    // Sélectionner le div
    const monDiv = document.getElementById('monDiv');

    // Ajouter un écouteur d'événement pour le survol de la souris
    monDiv.addEventListener('mouseover', () => {
        monDiv.style.backgroundColor = 'lightgreen'; // Changer la couleur
    });

    // Ajouter un écouteur d'événement pour la sortie de la souris
    monDiv.addEventListener('mouseout', () => {
        monDiv.style.backgroundColor = 'lightblue'; // Réinitialiser la couleur
    });