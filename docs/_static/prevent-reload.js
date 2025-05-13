// Prevent F5 from reloading the page
document.addEventListener('keydown', function(event) {
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
        event.preventDefault();
        // alert('Page reload is disabled to prevent loss of work.');
    }
});
