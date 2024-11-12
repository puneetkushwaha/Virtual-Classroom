// Simple script to toggle between pages
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Show the dashboard after login
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');
});

// Show classroom page
document.getElementById('to-classroom').addEventListener('click', function() {
    document.getElementById('dashboard').classList.remove('active');
    document.getElementById('classroom').classList.add('active');
});

// Go back to dashboard
document.getElementById('back-to-dashboard').addEventListener('click', function() {
    document.getElementById('classroom').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');
});
