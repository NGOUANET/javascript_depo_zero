 // Sélectionner le formulaire
 const formulaire = document.getElementById('monFormulaire');
 // Sélectionner l'élément pour afficher le message
 const message = document.getElementById('message');

 // Ajouter un écouteur d'événement pour la soumission du formulaire
 formulaire.addEventListener('submit', function(event) {
     // Empêcher la soumission par défaut
     event.preventDefault();

     // Récupérer les valeurs des champs du formulaire
     const nom = document.getElementById('nom').value;
     const email = document.getElementById('email').value;

     // Afficher un message sous le formulaire avec les données
     message.textContent = `nom : ${nom}, email : ${email}`;
 });