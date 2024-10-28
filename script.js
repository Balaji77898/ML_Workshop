document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fraudDetectionForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capture form data
        const amount = parseFloat(document.getElementById('amount').value);
        const time = parseFloat(document.getElementById('time').value);
        const v1 = parseFloat(document.getElementById('v1').value);
        const v2 = parseFloat(document.getElementById('v2').value);
        const v3 = parseFloat(document.getElementById('v3').value);
        const v4 = parseFloat(document.getElementById('v4').value);

        // Mock prediction logic
        const isFraud = predictFraud(amount, time, v1, v2, v3, v4);

        // Display result
        if (isFraud) {
            resultDiv.innerHTML = '<p class="fraud">Potential fraud detected!</p>';
        } else {
            resultDiv.innerHTML = '<p class="legitimate">Transaction appears to be legitimate.</p>';
        }
    });
});

// Example mock function for fraud prediction logic
function predictFraud(amount, time, v1, v2, v3, v4) {
    // Mock thresholds for fraud detection
    if (amount > 1000 || v1 < -10 || v2 > 15 || time > 60000) {
        return true; // Indicate fraud
    }
    return false; // Indicate legitimate
}