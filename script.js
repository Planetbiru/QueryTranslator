

// Move init() outside of the class
function init() {
    // Add event listeners once the document is loaded
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.input').addEventListener('change', (e) => {
            let value = e.target.value;
            let targetType = document.querySelector('.target_type').value;
            document.querySelector('.output').value = converter.translate(value, targetType);
        });

        document.querySelector('.target_type').addEventListener('change', (e) => {
            let targetType = e.target.value;
            let value = document.querySelector('.input').value;
            document.querySelector('.output').value = converter.translate(value, targetType);
        });

        document.querySelector('.input').addEventListener('paste', (e) => {
            // Wait for the pasted text to fully be inserted
            setTimeout(() => {
                let targetType = document.querySelector('.target_type').value;
                let value = document.querySelector('.input').value;
                document.querySelector('.output').value = converter.translate(value, targetType);
            }, 0); // Timeout 0 ms to ensure paste is completed
        });

        // Handle initial value in the input element
        let targetType = document.querySelector('.target_type').value;
        let value = document.querySelector('.input').value;
        document.querySelector('.output').value = converter.translate(value, targetType);
    });
}

// Instantiate the class
const converter = new SqliteConverter();

// Initialize event listeners
init();
