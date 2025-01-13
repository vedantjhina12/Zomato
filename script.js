// Search functionality
document.querySelector('input').addEventListener('focus', function() {
    this.placeholder = ''; // Clear placeholder text when input is focused
});

document.querySelector('input').addEventListener('blur', function() {
    this.placeholder = 'Search for restaurant, cuisine or a dish'; // Restore placeholder text when input loses focus
});

// Example of dynamic feedback for search input
document.querySelector('input').addEventListener('input', function() {
    let inputValue = this.value.trim();
    if (inputValue) {
        // Simulate a search suggestion (you can replace it with actual search logic)
        console.log('Searching for:', inputValue);
    } else {
        console.log('Please enter a search term.');
    }
});
