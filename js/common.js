// common.js

function includeNavbar() {
    document.write(`
        <header>
            <h1>Michelle Lim</h1>
        </header>
    
        <nav class="nav nav-pills justify-content-center">
            <a class="nav-item nav-link ${isActivePage('about.html')}" href="about.html">About Me</a>
            <a class="nav-item nav-link ${isActivePage('projects.html')}" href="projects.html">Projects</a>
            <a class="nav-item nav-link ${isActivePage('contact.html')}" href="contact.html">Contact</a>
            <a class="nav-item nav-link ${isActivePage('fun.html')}" href="fun.html">Fun Stuff</a>
        </nav>
    `);
}

function isActivePage(pageName) {
    // Get the current page URL
    let currentPage = window.location.href;

    // Check if the current page URL contains the page name
    if (currentPage.includes(pageName)) {
        return 'active';
    } else {
        return '';
    }
}


function includeFooter() {
    document.write(`
        <footer>
            <p>&copy; 2023 Michelle Lim</p>
        </footer>
    `);
}

