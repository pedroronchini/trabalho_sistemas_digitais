// Função para obter o clima da API
function getCountry() {
  const country = document.getElementById('cityInput').value;


  // Chamada da API OpencountryMap
  fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(response => response.json())
    .then(data => {
      if (data.status && data.status === 404) {
        countryInfo.innerHTML = `
          <h2> O País ${country} não foi encontrado, por favor digite outro pais</h2>
        `;
      } else {
        
        const countryName = data[0].name.common;
        const countryCapital = data[0].capital;
        const countryCoatOfArms = data[0].coatOfArms.png;
        const countryArea = data[0].area;
        const countryFlag = data[0].flags.png;
        const countryRegion = data[0].region;
        const countryPopulation = data[0].population;

        countryInfo.innerHTML = `
          <h2>Nome: ${countryName} </h2>
          <img src="${countryFlag}" alt="Bandeira" width="400" height="200" />
          <p>Capital: ${countryCapital}</p>
          <p>Area: ${countryArea}</p>
          <p>Continente: ${countryRegion}</p>
          <p>População: ${countryPopulation}</p>
          <p>Brasão: <img src="${countryCoatOfArms}" alt="Brasão" width="200" height="200"/></p>
        `;
      }

      
    }).catch(error => {
      console.error('Erro ao obter dados do país:', error);
      countryInfo.textContent = 'Erro ao obter dados do país.'
    }); 
}