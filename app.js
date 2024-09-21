document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');
    const commentList = document.getElementById('comment-list');
  
    // Fonction pour créer un nouveau commentaire
    function addComment(firstName, lastName, message) {

      const commentContainer = document.createElement('div');
      commentContainer.className = 'flex space-x-4 text-sm text-gray-500';
  
      // Créer la structure du commentaire
      commentContainer.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;
  
      commentList.appendChild(commentContainer);
    }
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const message = messageInput.value.trim();
  
      // Vérifier si tous les champs sont remplis
      if (!firstName || !lastName || !message) {

        errorMessage.style.display = 'block';
      } else {
        // Cacher le message d'erreur si tout est rempli
        errorMessage.style.display = 'none';
  
        addComment(firstName, lastName, message);
  
        // Réinitialiser des champs du formulaire
        firstNameInput.value = '';
        lastNameInput.value = '';
        messageInput.value = '';
      }
    });
  });
  