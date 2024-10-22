document.addEventListener('DOMContentLoaded', function() {
    let editButton = document.getElementById('edit-button');
    let saveButton = document.getElementById('save-button');
    let editableText = document.getElementById('editable-text');
    let versionHistory = document.getElementById('version-history');

    let textHistory = []; // Array to store previous versions

    editButton.addEventListener('click', function() {
        editableText.contentEditable = true;
        editableText.style.border = "1px solid #00509e";
        editButton.style.display = "none";
        saveButton.style.display = "inline-block";
    });

    saveButton.addEventListener('click', function() {
        // Store the current text as a new version
        let currentText = editableText.innerText;
        textHistory.push(currentText);

        // Update the version history list
        let listItem = document.createElement('li');
        listItem.innerText = "Version " + textHistory.length + ": " + currentText;
        versionHistory.appendChild(listItem);

        // Turn off editing mode
        editableText.contentEditable = false;
        editableText.style.border = "1px solid #ddd";
        editButton.style.display = "inline-block";
        saveButton.style.display = "none";
    });
});
