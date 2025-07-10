// Set active page in sidebar
document.addEventListener('DOMContentLoaded', function() {
    // Get current page from URL
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    // Set active menu item
    const menuItems = document.querySelectorAll('.sidebar-menu a');
    menuItems.forEach(item => {
        const pageName = item.getAttribute('href').replace('#', '');
        if (pageName === currentPage || (currentPage === 'index' && pageName === 'dashboard')) {
            item.parentElement.classList.add('active');
        }
    });
    
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // You can add content switching logic here
        });
    });
});