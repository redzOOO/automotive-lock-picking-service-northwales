document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const carReg = document.getElementById('carReg').value;
    // Mock API compatibility check
    if (carReg) {
        document.getElementById('compatibilityMessage').textContent = 'Compatible!';
        document.getElementById('compatibilityMessage').style.display = 'block';
        document.getElementById('details-form').style.display = 'block';
    }
});
