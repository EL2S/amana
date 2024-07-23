document.addEventListener("DOMContentLoaded", function() {
    // Get the current path
    var path = window.location.pathname;

    // Function to set the active link
    function setActiveNavLink() {
        // Select all nav links
        var navLinks = document.querySelectorAll('.nav-item .nav-link');

        // Iterate over nav links to remove 'collapsed' class from all
        navLinks.forEach(function(navLink) {
            navLink.classList.add('collapsed');
        });

        // Find the closest parent nav link and remove 'collapsed' class from it
        var activeNavLink = document.querySelector('.nav-link[href="' + path + '"]');
        if (!activeNavLink) {
            // Check if the path is a subpage
            var subPaths = path.split('/').filter(function(p) { return p !== ''; });
            if (subPaths.length > 1) {
                var parentPath = '/' + subPaths[0] + '/';
                var parentNavLink = document.querySelector('.nav-link[href="' + parentPath + '"]');
                if (parentNavLink) {
                    parentNavLink.classList.remove('collapsed');
                }
            }
        } else {
            activeNavLink.classList.remove('collapsed');
        }
    }

    // Call the function to set the active link
    setActiveNavLink();
});
