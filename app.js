const getImage = () => {
    fetch('https://meme-api.herokuapp.com/gimme')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector("#image").setAttribute("src", data["url"]);
        })
        .catch((error) => { console.log(error.message); });
};
getImage();
document.querySelector("#btn").addEventListener('click', getImage);