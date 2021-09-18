function getPilComp() {
  const comp = Math.floor(Math.random() * 3);

  if (comp == 0) return "batu";
  if (comp == 1) return "kertas";
  return "gunting";
}

function getHasil(comp, player) {
  if (player == comp) return "DRAW";
  if (player == "batu") return comp == "gunting" ? "PLAYER 1 WIN" : "COMP WIN";
  if (player == "kertas") return comp == "batu" ? "PLAYER 1 WIN" : "COMP WIN";
  if (player == "gunting") return comp == "kertas" ? "PLAYER 1 WIN" : "COMP WIN";
}

const pBatu = document.querySelector(".player .batu");
pBatu.addEventListener("click", function () {
  const pilComp = getPilComp();
  const pilPlayer = pBatu.className;
  const hasil = getHasil(pilComp, pilPlayer);
});
