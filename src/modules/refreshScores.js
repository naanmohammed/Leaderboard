const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
let gameID = 'yk8C3WexuihEBieTHONU';

export const refreshScores = async () => {
  const response = await fetch(`${baseURL}/games/${gameID}/scores/`);
  const data = await response.json();
  const scoreList = document.getElementById('recentScoresList');
  scoreList.innerHTML = '';

  const scores = data.result.sort((a, b) => b.score - a.score);

  scores.forEach(score => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    scoreList.appendChild(listItem);
  });
};

export default refreshScores;