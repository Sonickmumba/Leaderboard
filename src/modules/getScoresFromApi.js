const getScoresFromApi = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FT4UUgptojJViSR6KrS0/scores/');
  const object = await response.json();
  return object.result;
};

export default getScoresFromApi;