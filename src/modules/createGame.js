const createGame = async () => {
  const baseURL = '';
  let gameID = '';
  const gameName = "Naan's Game";
  const response = await fetch(`${baseURL}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: gameName }),
  });
  const data = await response.json();
  gameID = data.result.split(':')[1].trim();
  localStorage.setItem('gameID', gameID);
};

export default createGame;