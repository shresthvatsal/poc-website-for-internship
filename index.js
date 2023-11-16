document.addEventListener('DOMContentLoaded', function() {

    // Add hover effect to interactive containers
    const interactiveContainers = document.querySelectorAll('.container');

    interactiveContainers.forEach(function(container) {
        container.addEventListener('mouseover', function() {
            container.style.backgroundColor = '#03b3f8';
        });

        container.addEventListener('mouseout', function() {
            container.style.backgroundColor = 'white';
        });
    });

    // Select and validate form fields
    const commentForm = document.querySelector('form');
    const commentText = document.querySelector('textarea');
    const email = document.querySelector('input[type="email"]');
   
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        if (!validateComment(commentText)) {
            alert('Comment is empty. Please enter a comment.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Email is not valid. Please enter a valid email address.');
            return;
        }

      
        // Process form data (you can implement your processing logic here)
        processFormData(commentText.value, email.value, name.value);

        // Add comment to the page
        addCommentToPage(commentText.value);
    });

    // Function to validate comment text
    function validateComment(commentText) {
        return commentText.value.trim() !== '';
    }

    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email.value.trim());
    }

    // Function to validate name
   
    // Function to process form data
    function processFormData(comment, email) {
        // You can implement the logic to handle the form data here.
    }

    // Function to add comment to the page
    function addCommentToPage(comment) {
        const commentsList = document.querySelector('.comments-list');
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentsList.appendChild(newComment);
    }
});
