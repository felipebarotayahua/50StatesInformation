  fetch('https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states')
  .then(response => response.json())
  .then(data => {
    const stateInfoDiv = document.getElementById('state-info');
    data.forEach(stateData => {
      stateData.states.forEach(state => {
        const stateInfo = `
          <h3>${state.name}</h3>
          
          <p><strong>Capital:</strong> ${state.capital}</p>
          <p><strong>Date of Statehood:</strong> ${state.date_of_statehood}</p>
          <p><strong>Population:</strong> ${state.population}</p>
          <p><strong>Nickname:</strong> ${state.nickname}</p>
          <p><strong>Motto:</strong> ${state.motto}</p>
          <p><strong>Landmass:</strong> ${state.landmass}</p>
          <p><strong>Major Industry:</strong> ${state.majorindustry}</p>
          <p><strong>Tourist Attractions:</strong> ${state.touristattractions}</p>
          <p><strong>Fun Fact:</strong> ${state.funfact}</p>
          <p><strong>Symbols:</strong></p>
          <ul>
            ${state.symbols.map(symbol => `<li>${symbol.name}: ${symbol.value}</li>`).join('')}
          </ul>
          <hr>
        `;
        stateInfoDiv.insertAdjacentHTML('beforeend', stateInfo);
      });
    });
  })
  .catch(error => console.error(error));
