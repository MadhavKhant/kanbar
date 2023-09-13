document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then(response => response.json())
        .then(data => {
            const todoColumn = document.getElementById('todo-column');
            const inProgressColumn = document.getElementById('in-progress-column');
            const doneColumn = document.getElementById('done-column');

            data.tickets.forEach(ticket => {
                const card = document.createElement('div');
                card.className = 'card';
                card.textContent = ticket.title;

                if (ticket.status === 'Todo') {
                    card.classList.add('todo');
                    todoColumn.appendChild(card);
                } else if (ticket.status === 'In progress') {
                    card.classList.add('in-progress');
                    inProgressColumn.appendChild(card);
                } else if (ticket.status === 'Done') {
                    card.classList.add('done');
                    doneColumn.appendChild(card);
                }
            });
        })
        .catch(error => console.error(error));
});
