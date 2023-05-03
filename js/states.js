// Pulls api
const getStates = () => {
    axios
    .get("https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states")
    .then((response) => {
    const states = response.data[0].states;
    console.log(`GET States`, states);
    })
    .catch((error) => console.error(error));
    };
    getStates();


    //  https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1    Basewebsite





    // adv listener
    document.getElementById('search-button').addEventListener('click', function() {
        var searchQuery = document.getElementById('search-input').value;
        fetch('https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states/' + encodeURIComponent(searchQuery))
          .then(function(response) {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(function(data) {
            // Display the data in a modal or other element
          })
          .catch(function(error) {
            console.error('There was a problem with the fetch operation:', error);
          });
      });




    // Endpoint for all states: /states
// Endpoint for a specific state (example: New Hampshire): /states/New%20Hampshire
document.getElementById('search-button').addEventListener('click', function() {
    var searchQuery = document.getElementById('search-input').value;
    fetch('https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states/' + encodeURIComponent(searchQuery))
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        var modal = document.getElementById('state-modal');
        modal.querySelector('.modal-title').textContent = data.name;
        modal.querySelector('#capital').textContent = data.capital;
        modal.querySelector('#majorindustry').textContent = data.majorindustry;
        modal.querySelector('#attraction').textContent = data.touristattractions;
        modal.querySelector('#population').textContent = data.population;
        $('#state-modal').modal('show');
      })
      .catch(function(error) {
        console.error('There was a problem with the fetch operation:', error);
      });
  });


  