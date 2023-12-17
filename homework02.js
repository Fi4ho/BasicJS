//Homework 01
// Get all paragraphs and headers
var elements = document.querySelectorAll('p, h1, h3,');

// Loop through each element and change its text content
for (var i = 0; i < elements.length; i++) {
    // Your custom logic to change the text content
    // For example, setting a new text
    elements[i].textContent = "New Text";
}