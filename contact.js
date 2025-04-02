const form = document.getElementById('contact-form');
const statusDiv = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('https://formsubmit.co/southern257@gmail.com', {
      method: 'POST',
      body: formData
      // 🚫 Don't add headers manually — let FormData do its thing!
    });

    if (response.ok) {
      form.reset();
      statusDiv.textContent = 'Message sent successfully!';
      statusDiv.style.color = 'green';
    } else {
      statusDiv.textContent = 'Oops! Something went wrong.';
      statusDiv.style.color = 'red';
    }
  } catch (error) {
    statusDiv.textContent = 'Failed to send. Try again later.';
    statusDiv.style.color = 'red';
  }
});
