const emailInput = document.getElementById('email');
  const comment = document.createElement('span');
  comment.style.color = 'red';

  emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!pattern.test(emailValue)) {
      comment.textContent = 'El correo electrónico debe contener solo letras, @ y puntos.';
      emailInput.parentNode.insertBefore(comment, emailInput.nextSibling);
    } else {
      comment.textContent = '';
    }
  });