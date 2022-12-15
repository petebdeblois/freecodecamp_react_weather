const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "72a70044b4msh2e2d50fcce93879p1e13f0jsn010482e4cb19",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
