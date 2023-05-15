document.querySelectorAll('.edit-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const blog = event.target.closest('.blog');
        const content = blog.querySelector('.blog-content');
        const saveButton = blog.querySelector('.save-button');
        const cancelButton = blog.querySelector('.cancel-button');

        // Switch to edit mode
        content.setAttribute('contentEditable', true);

        // Show save and cancel buttons
        saveButton.style.display = 'inline';
        cancelButton.style.display = 'inline';
    });
});

document.querySelectorAll('.save-button').forEach(button => {
    button.addEventListener('click', async (event) => {
        const blog = event.target.closest('.blog');
        const id = blog.dataset.id;
        const content = blog.querySelector('.blog-content');
        const saveButton = blog.querySelector('.save-button');
        const cancelButton = blog.querySelector('.cancel-button');

        // Switch off edit mode
        content.setAttribute('contentEditable', false);

        // Hide save and cancel buttons
        saveButton.style.display = 'none';
        cancelButton.style.display = 'none';

        // Make a fetch request to update the blog content
        const response = await fetch(`/admin/edit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content.textContent,
            }),
        });

        if (!response.ok) {
            console.error('Failed to save blog content');
        }
    });
});

document.querySelectorAll('.cancel-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const blog = event.target.closest('.blog');
        const content = blog.querySelector('.blog-content');
        const saveButton = blog.querySelector('.save-button');
        const cancelButton = blog.querySelector('.cancel-button');

        // Switch off edit mode
        content.setAttribute('contentEditable', false);

        // Hide save and cancel buttons
        saveButton.style.display = 'none';
        cancelButton.style.display = 'none';
    });
});


document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', async (event) => {
        const blog = event.target.closest('.blog');
        const id = blog.dataset.id;

        // Make a fetch request to delete the blog
        const response = await fetch(`/admin/delete/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Remove the blog element from the page
            blog.remove();
        } else {
            console.error('Failed to delete blog');
        }
    });
});


