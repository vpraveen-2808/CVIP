
const longUrlInput = document.getElementById('longurl');
const shortenButton = document.getElementById('shorten');
const shortUrlInput = document.getElementById('shorturl');
const copyButton = document.getElementById('copy');


shortenButton.addEventListener('click', () => {
    const longUrl = longUrlInput.value;

    
    shortenUrl(longUrl)
        .then((shortenedUrl) => {
            
            shortUrlInput.value = shortenedUrl;
        })
        .catch((error) => {
            
            console.error(error);
            alert('An error occurred while shortening the URL. Please try again later.');
        });
});


copyButton.addEventListener('click', () => {
    shortUrlInput.select();
    document.execCommand('copy');
    alert('Copied to clipboard');
});


function shortenUrl(longUrl) {
    return fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Unable to shorten URL');
            }
            return response.text();
        });
}
