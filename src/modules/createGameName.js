const createGameName = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: 'Leaderboard',
      }),
    });
    const key = await response.json();
    return key;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createGameName;