// Function to fetch to-do items
function fetchToDoItems() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data from a server)
        setTimeout(() => {
            const mockData = [
                { id: 1, task: 'Complete homework', completed: false },
                { id: 2, task: 'Read a book', completed: true },
                { id: 3, task: 'Exercise', completed: false },
            ];
            resolve(mockData);
        }, 1000);
    });
}

// Function to render to-do items
function renderToDoList(todoList) {
    const listContainer = document.getElementById('todo-list');
    listContainer.innerHTML = ''; // Clear the existing list

    todoList.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.task} ${item.completed ? '(Completed)' : ''}`;
        listContainer.appendChild(listItem);
    });
}

// Callback function for handling completed tasks
function markTaskAsCompleted(taskId, callback) {
    // Simulating an asynchronous operation (e.g., updating data on a server)
    setTimeout(() => {
        callback(`Task ${taskId} marked as completed`);
    }, 500);
}

// Main function to manage the to-do list
function manageToDoList() {
    fetchToDoItems()
        .then((data) => {
            renderToDoList(data);

            // Example of using a callback function
            markTaskAsCompleted(1, (message) => {
                console.log(message);

                // After marking a task as completed, fetch updated data and re-render the list
                fetchToDoItems().then((updatedData) => {
                    renderToDoList(updatedData);
                });
            });
        })
        .catch((error) => {
            console.error('Error fetching to-do items:', error);
        });
}

// Initialize the to-do list manager
manageToDoList();
