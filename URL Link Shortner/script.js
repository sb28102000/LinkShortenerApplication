async function shortenURL() {
    const url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    if(response.ok){
        const data = await response.text();
        document.getElementById('result').innerHTML =`Shortened URL: <a href="${data}" target="_blank" color:red>${data}</a>`;
    }
    else{
        document.getElementById('result').innerHTML = "Error Shortening URL"
    }
}