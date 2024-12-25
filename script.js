// 获取用户界面元素
const userScore = document.querySelectorAll(".scroe");
// 获取操作界面元素
const restart = document.querySelector(".restart");
const point = document.querySelector(".point");
const roll = document.querySelector(".roll");
const change = document.querySelector(".change");
// 游戏相关数据存储
const GameData = {
  p1Score: 0,
  p2Score: 0,
  pointAdd: 0,
};

// 事件逻辑
// roll点，从1到6
const rollGame = function () {
  const rollOnce = Math.floor(Math.random() * 6) + 1;
  rollOnce > 1 ? (GameData.pointAdd += rollOnce) : (GameData.pointAdd = 0);
  point.textContent = `+${GameData.pointAdd}`;
  if (GameData.pointAdd == 0) {
    changePlayer();
  }
  console.log(GameData.pointAdd + "--pointAdd");
};
// 将当前生成分数计入当前分数加入当前player的总分中
const scroeAdd = function () {
  if (userScore[0].classList.contains("choose")) {
    GameData.p1Score += GameData.pointAdd;
    userScore[0].textContent = GameData.p1Score;
  } else {
    GameData.p2Score += GameData.pointAdd;
    userScore[1].textContent = GameData.p2Score;
  }
  console.log(1, GameData.p1Score, 2, GameData.p2Score);
};
// change转换
const changePlayer = function () {
  scroeAdd();
  for (let i = 0; i < userScore.length; i++) {
    userScore[i].classList.toggle("choose");
    GameData.pointAdd = 0;
    point.textContent = `+${GameData.pointAdd}`;
  }
};
// 重新开始
const restartGame = function () {
  GameData.p1Score = 0;
  GameData.p2Score = 0;
  GameData.pointAdd = 0;
  userScore[0].textContent = GameData.p1Score;
  userScore[1].textContent = GameData.p2Score;
  userScore[1].textContent = GameData.p2Score;
  point.textContent = `+${GameData.pointAdd}`;
  if (!userScore[0].classList.contains("choose")) {
    userScore[0].classList.toggle("choose");
    userScore[1].classList.toggle("choose");
  }
};

// 元素操作
roll.addEventListener("click", rollGame);
change.addEventListener("click", changePlayer);
restart.addEventListener("click", restartGame);
