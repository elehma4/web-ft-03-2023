document.querySelectorAll('.toggle-approval').forEach(button => {
    button.addEventListener('click', async function() {
        const id = this.dataset.id;
        const response = await fetch(`/comments/approval/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Something went wrong!');
        }
    });
});
