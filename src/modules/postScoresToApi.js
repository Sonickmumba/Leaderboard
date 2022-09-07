const postScoresToApi = async (userName, userScore) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FT4UUgptojJViSR6KrS0/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: userName,
        score: userScore,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export default postScoresToApi;