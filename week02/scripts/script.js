// Get references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the Add Chapter button
button.addEventListener('click', function () {
    // Get the trimmed value of the input field
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

        // Append the list item to the unordered list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Focus back on the input field
        input.focus();

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    } else {
        // If the input is empty, alert the user and focus back on the input field
        alert('Please enter a chapter!');
        input.focus();
    }
});

// To ensure the DOM is fully loaded before initializing event listeners
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    input.focus();
});
