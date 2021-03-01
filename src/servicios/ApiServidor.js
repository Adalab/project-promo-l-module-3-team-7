const ENDPOINT = "https://awesome-profile-cards.herokuapp.com/card'";

async function fetchCard(userData) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  
  if (data.success === true) {
    return {
      textToRender: 'La tarjeta ha sido creada:',
      cardURL: data.cardURL,
      hiddenClass: ""
    }
  } else {
    return {
      textToRender: data.error,
      cardURL: "",
      hiddenClass: ""
    }
  }
  
 
}

function parseResponse(response) {
  return response.json();
}

function createDataBase(data) {
  let results = [];
  if (data !== null) {
    const fetchResults = data.results;
    for (const result of fetchResults) {
      results.push({
        id: result.login.username,
        name: { first: result.name.first, last: result.name.last },
        city: result.location.city,
        photo: result.picture.thumbnail,
        gender: result.gender,
      });
    }
    return results;
  }
}

export { fetchCard };
