document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    document.getElementById('message').textContent = "Thanks, I know I will convince you. I love you my babes.";
});

document.getElementById('no').addEventListener('click', function() {
    let noButton = document.getElementById('no');
    let container = document.querySelector('.container');

    // Calculate random positions for the button within the container
    let randomX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
    let randomY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

    // Set the new position of the "No" button
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
