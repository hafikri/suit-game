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

const pilihImgPlayer = document.querySelectorAll(".player img");
pilihImgPlayer.forEach(function (i) {
  i.addEventListener("click", function () {
    const pilComp = getPilComp();
    const pilPlayer = i.className;
    const hasil = getHasil(pilComp, pilPlayer);
    i.classList.toggle("active");

    const imgComputer = document.querySelector(`.comp .${pilComp}`);
    // console.log(imgComputer);
    imgComputer.classList.toggle("active");

    //   const imgCompSelect = imgComputer.querySelector(".batu");
    //   console.log(imgCompSelect);

    const info = document.querySelector(".info");
    info.classList.toggle("menang");
    info.innerHTML = hasil;
  });
});

const refresh = document.querySelector(".reload");
refresh.addEventListener("click", function () {
  window.location.reload();
});
// console.log(refresh);

// const pBatu = document.querySelector(".player .batu");
// pBatu.addEventListener("click", function () {
//   const pilComp = getPilComp();
//   const pilPlayer = pBatu.className;
//   const hasil = getHasil(pilComp, pilPlayer);

//   const imgComputer = document.querySelector(".comp img");
//   //   const imgCompSelect = imgComputer.querySelector(".batu");
//   //   console.log(imgCompSelect);

//   const info = document.querySelector(".info");
//   info.classList.toggle("menang");
//   info.innerHTML = hasil;
// });

// const pKertas = document.querySelector(".player .kertas");
// pKertas.addEventListener("click", function () {
//   const pilComp = getPilComp();
//   const pilPlayer = pKertas.className;
//   const hasil = getHasil(pilComp, pilPlayer);

//   const imgComputer = document.querySelector(".comp img");
//   //   const imgCompSelect = imgComputer.querySelector(".batu");
//   //   console.log(imgCompSelect);

//   const info = document.querySelector(".info");
//   info.classList.toggle("menang");
//   info.innerHTML = hasil;
// });

// const pGunting = document.querySelector(".player .gunting");
// pGunting.addEventListener("click", function () {
//   const pilComp = getPilComp();
//   const pilPlayer = pGunting.className;
//   const hasil = getHasil(pilComp, pilPlayer);

//   const imgComputer = document.querySelector(".comp img");
//   //   const imgCompSelect = imgComputer.querySelector(".batu");
//   //   console.log(imgCompSelect);

//   const info = document.querySelector(".info");
//   info.classList.toggle("menang");
//   info.innerHTML = hasil;
// });
