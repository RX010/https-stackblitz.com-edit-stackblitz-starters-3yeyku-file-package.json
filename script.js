// Get the hover sound element
const hoverSound = document.getElementById('hoverSound');

// Set the volume (value between 0.0 and 1.0)
hoverSound.volume = 0.3; // Adjust this value to lower the sound (0.0 is mute, 1.0 is max)

// Get all menu items
const menuItems = document.querySelectorAll('.navbar ul li a');

// Add mouseover event listener to each menu item
menuItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        hoverSound.currentTime = 0; // Reset sound to start
        hoverSound.play().catch(error => {
            console.error('Audio play failed:', error);
        });
    });
});
