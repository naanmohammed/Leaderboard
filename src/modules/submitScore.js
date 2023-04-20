const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameID = 'yk8C3WexuihEBieTHONU';

export const submitScore = async (event) => {
  event.preventDefault();
  const user = document.getElementById('nameInput').value;
  const score = document.getElementById('scoreInput').value;

  if (!user || !score) {
    alert('Please enter both name and score');
    return;
  }

  const data = { user, score };

  await fetch(`${baseURL}/games/${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  document.getElementById('nameInput').value = '';
  document.getElementById('scoreInput').value = '';
};

export default submitScore;