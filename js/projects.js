// projects.js

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', function () {
            // Toggle the visibility of project details
            const details = this.querySelector('.project-details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });
});
