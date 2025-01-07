
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission
        
        const submitButton = document.getElementById('submitButton');
        const buttonText = document.getElementById('buttonText');
        const loadingSpinner = document.getElementById('loadingSpinner');

        // Disable the button and show the loading spinner
        submitButton.disabled = true;
        buttonText.textContent = 'Sending...';
        loadingSpinner.style.display = 'inline-block';

        const formData = new FormData(this);

        try {
            const response = await fetch('send_email.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.status === 'success') {
                alert(result.message); // Show success alert
                this.reset(); // Reset the form
            } else {
                alert(result.message); // Show error alert
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        } finally {
            // Re-enable the button and hide the spinner
            submitButton.disabled = false;
            buttonText.textContent = 'Send Message';
            loadingSpinner.style.display = 'none';
        }
    });
