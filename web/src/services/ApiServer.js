const ENDPOINT = "https://awesome-profile-cards.herokuapp.com/card";

const fetchCard = (userData) => {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default { fetchCard: fetchCard };
