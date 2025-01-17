// Get references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Event listener for the 'Add Chapter' button
button.addEventListener('click', () => {
    // Get the input value
    const chapter = input.value.trim();

    // Check if the input is not empty
    if (chapter !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = chapter;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Append the delete button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Add delete functionality to the button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
    } else {
        alert('Please enter a chapter!');
    }
});
