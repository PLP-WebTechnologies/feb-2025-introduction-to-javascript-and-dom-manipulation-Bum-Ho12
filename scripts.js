
document.addEventListener('DOMContentLoaded', function() {
    // Elements for changing text content
    const changeTextElement = document.getElementById('changeText');
    const textChangeBtn = document.getElementById('textChangeBtn');

    // Elements for style modification
    const styleTarget = document.getElementById('styleTarget');
    const colorBtn = document.getElementById('colorBtn');
    const sizeBtn = document.getElementById('sizeBtn');
    const themeBtn = document.getElementById('themeBtn');

    // Elements for adding/removing content
    const addElementBtn = document.getElementById('addElementBtn');
    const removeElementBtn = document.getElementById('removeElementBtn');
    const dynamicElement = document.getElementById('dynamicElement');

    // Variables to track state
    let isDarkMode = false;
    let isLarge = false;
    let colorIndex = 0;
    const colors = [
        '#e9e9e9', // Default
        '#ffcccb', // Light red
        '#c1e1c1', // Light green
        '#c7c7f9', // Light blue
        '#faebd7'  // Light orange
    ];

    // Function to change text content
    textChangeBtn.addEventListener('click', function() {
        const texts = [
            "This text has been changed!",
            "JavaScript is fun!",
            "DOM manipulation is powerful!",
            "Keep clicking to see more messages!",
            "You're doing great!"
        ];

        // Get random text from the array
        const randomIndex = Math.floor(Math.random() * texts.length);
        changeTextElement.textContent = texts[randomIndex];
    });

    // Function to change background color
    colorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        styleTarget.style.backgroundColor = colors[colorIndex];
    });

    // Function to change text size
    sizeBtn.addEventListener('click', function() {
        isLarge = !isLarge;
        if (isLarge) {
            styleTarget.style.fontSize = '24px';
            styleTarget.style.padding = '30px';
        } else {
            styleTarget.style.fontSize = '16px';
            styleTarget.style.padding = '20px';
        }
    });

    // Function to toggle dark mode
    themeBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
        }
    });

    // Function to add element
    addElementBtn.addEventListener('click', function() {
        dynamicElement.style.display = 'block';
    });

    // Function to remove element
    removeElementBtn.addEventListener('click', function() {
        dynamicElement.style.display = 'none';
    });
});
