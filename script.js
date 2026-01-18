// Update Date and Time
function updateDateTime() {
    const now = new Date();
    
    // Format date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-IN', options);
    
    // Format time
    const timeString = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Update elements
    document.getElementById('current-date').textContent = dateString;
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('full-date').textContent = dateString;
    
    // Update day and time
    const dayTime = `${now.toLocaleDateString('en-IN', { weekday: 'long' })} • ${timeString}`;
    document.getElementById('day-time').textContent = dayTime;
}

// Update market status based on time
function updateMarketStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    
    // Market timings in minutes from midnight
    const marketTimes = {
        sridevi: 10 * 60,      // 10:00 AM
        milan: 13 * 60 + 30,   // 1:30 PM
        kalyan: 14 * 60,       // 2:00 PM
        srideviNight: 18 * 60 + 30, // 6:30 PM
        milanNight: 20 * 60,   // 8:00 PM
        mainBazar: 20 * 60 + 30 // 8:30 PM
    };
    
    // Logic to determine if market is open, closed, or upcoming
    // This is a simplified version
    console.log("Market status updated");
}

// Generate random numbers for display
function generateRandomNumbers() {
    // Single digits (1-9)
    const singles = [];
    while(singles.length < 4) {
        const num = Math.floor(Math.random() * 9) + 1;
        if(!singles.includes(num)) singles.push(num);
    }
    
    // Double digits (10-99)
    const doubles = [];
    while(doubles.length < 4) {
        const num = Math.floor(Math.random() * 90) + 10;
        if(!doubles.includes(num)) doubles.push(num);
    }
    
    return { singles, doubles };
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    updateMarketStatus();
    
    // Update time every second
    setInterval(updateDateTime, 1000);
    
    // Add click handlers for market cards
    const marketCards = document.querySelectorAll('.market-card');
    marketCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Store which market was clicked
            const marketName = this.querySelector('h3').textContent;
            localStorage.setItem('selectedMarket', marketName);
        });
    });
    
    // Load saved market if coming from another page
    const savedMarket = localStorage.getItem('selectedMarket');
    if(savedMarket) {
        console.log(`Last viewed market: ${savedMarket}`);
    }
});
