const token = "e5b07b138c5057";

function getLocation (){ 
    fetch("https://ipinfo.io/json").then((Response) => Response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Erro ao obter a localização:", error));
}

getLocation();


// # Get details for 45.71.131.12

// $ curl ipinfo.io/45.71.131.12?token=e5b07b138c5057/json

// {
// "ip": "45.71.131.12",
// "city": "Pontal",
// "region": "São Paulo",
// "country": "BR",
// "loc": "-21.0225,-48.0372",
// "org": "AS267608 Micheleto Internet Eireli",
// "postal": "14180-000",
// "timezone": "America/Sao_Paulo"
// }