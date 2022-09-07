import submitScore from './submitScore.js';
import displayRecentScores from './displayRecentScores.js';
import getScoresFromApi from './getScoresFromApi.js';

const displayScore = async () => {
  const scores = await getScoresFromApi();
  displayRecentScores(scores);
  submitScore();
};

export default displayScore;