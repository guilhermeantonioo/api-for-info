const token = "e5b07b138c5057";

function getLocation (){ 
    fetch(`https://ipinfo.io/json?token=e5b07b138c5057`)
    .then((Response) => Response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Erro ao obter a localização:", error));
}

getLocation();


