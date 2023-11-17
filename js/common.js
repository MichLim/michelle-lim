// common.js

function includeNavbar() {
    document.write(`
        <header>
            <h1>Michelle Lim</h1>
        </header>
    
        <nav class="nav nav-pills justify-content-center">
            <a class="nav-item nav-link" href="about.html">About Me</a>
            <a class="nav-item nav-link" href="projects.html">Projects</a>
            <a class="nav-item nav-link" href="contact.html">Contact</a>
            <a class="nav-item nav-link" href="fun.html">Fun Stuff</a>
        </nav>
    `);
}

function includeFooter() {
    document.write(`
        <footer>
            <p>&copy; 2023 Michelle Lim</p>
        </footer>
    `);
}

