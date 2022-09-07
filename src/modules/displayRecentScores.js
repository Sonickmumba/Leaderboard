const displayRecentScores = (objects) => {
  const scoreContainer = document.querySelector('.container');
  objects.forEach((object) => {
    const ul = document.createElement('ul');
    const name = document.createElement('li');
    const score = document.createElement('li');
    name.innerHTML = `${object.user}`;
    score.innerHTML = `${object.score}`;
    ul.append(name, score);
    scoreContainer.appendChild(ul);
  });
};

export default displayRecentScores;