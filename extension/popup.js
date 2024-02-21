document.addEventListener('DOMContentLoaded', function() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const jokeText = data.joke;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.textContent = jokeText;
    })
    .catch(error => {
        console.error('Error fetching dad joke:', error);
    });
});
