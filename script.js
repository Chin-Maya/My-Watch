function updateClock() {
    const now = new Date();
    
    // Get current time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format time
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Update time on the page
    document.getElementById('time').textContent = timeString;

    // Get current date
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Update date on the page
    document.getElementById('date').textContent = dateString;
}

// Initial call to display clock immediately
updateClock();
// Update clock every second
setInterval(updateClock, 1000);
