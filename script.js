"use strict";

// 백엔드에서 정보 가져오기------------------------

const musicList = [
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-album-cover-image-design-template-62fca565fdcbb25ced8e900c54d61835_screen.jpg?ts=1561530580",
    type: "mood",
    title: "Bon Voyagemood1",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/114/posts/34296/final_image/Final-image.jpg",
    type: "mood",
    title: "Bon Voyagemood2",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://350927.smushcdn.com/1388247/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg?lossy=0&strip=1&webp=1",
    type: "mood",
    title: "Bon Voyagemood3",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2020/09/PS20090100126.jpg",
    type: "mood",
    title: "Bon Voyagemood4",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2020/09/PS20090100126.jpg",
    type: "mood",
    title: "Bon Voyagemood5",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg",
    type: "mood",
    title: "Bon Voyagemood6",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://i.pinimg.com/736x/16/76/7f/16767ff0e8b8e3f892684393e967715f.jpg",
    type: "bleib",
    title: "Bon Voyage1bleib",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://cdn.flipsnack.com/template/4464/small/page_1?v=1626960988",
    type: "bleib",
    title: "Bon Voyage2bleib",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://cdn.create.vista.com/common/f3476718-c5ce-4685-9806-9152eb70c124.jpg?width=512",
    type: "bleib",
    title: "Bon Voyage3bleib",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-design-template-0cc1b101a59d1ea7554694d9544decda_screen.jpg?ts=1646865861",
    type: "bleib",
    title: "Bon Voyage4bleib",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://i.pinimg.com/736x/8d/fd/81/8dfd81b74cc58ba6a45a928ccb3255ca.jpg",
    type: "bleib",
    title: "Bon Voyage5bleib",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/114/posts/34296/final_image/Final-image.jpg",
    type: "bleib",
    title: "Bon Voyage6bleib",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://images.otwojob.com/product/w/a/R/waR0ImJfrYeVCPw.png",
    type: "focus",
    title: "Bon Voyage1focus",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://i.pinimg.com/550x/1b/82/96/1b8296c37422e8d37798742dccf29718.jpg",
    type: "focus",
    title: "Bon Voyage2focus",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    type: "focus",
    title: "Bon Voyage3focus",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://i.pinimg.com/736x/8d/fd/81/8dfd81b74cc58ba6a45a928ccb3255ca.jpg",
    type: "focus",
    title: "Bon Voyage4focus",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcd4Qd5c5Tvm__2ILmgiPHl9dMIdMFHPkKw&usqp=CAU",
    type: "focus",
    title: "Bon Voyage5focus",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://i.pinimg.com/550x/1b/82/96/1b8296c37422e8d37798742dccf29718.jpg",
    type: "focus",
    title: "Bon Voyage6focus",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://cdn.flipsnack.com/template/4466/medium.jpg?v=1626854126",
    type: "entdecke",
    title: "Bon Voyage1entdecke",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://cdn.create.vista.com/common/f3476718-c5ce-4685-9806-9152eb70c124.jpg?width=512",
    type: "entdecke",
    title: "Bon entdecke2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://i.pinimg.com/736x/16/76/7f/16767ff0e8b8e3f892684393e967715f.jpg",
    type: "entdecke",
    title: "Bon Voyage1entdecke",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://350927.smushcdn.com/1388247/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg?lossy=0&strip=1&webp=1",
    type: "entdecke",
    title: "Bon entdecke2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://cdn.create.vista.com/downloads/772c1a9f-e46e-42f5-9110-8efe9cc2c0c2_450.jpeg",
    type: "entdecke",
    title: "Bon Voyage1entdecke",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg",
    type: "entdecke",
    title: "Bon entdecke2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888",
    type: "popular",
    title: "Bon popular1",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-design-template-0cc1b101a59d1ea7554694d9544decda_screen.jpg?ts=1646865861",
    type: "popular",
    title: "Bon popular2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://cdn.flipsnack.com/template/4464/small/page_1?v=1626960988",
    type: "popular",
    title: "Bon popular1",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    type: "popular",
    title: "Bon popular2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://images.otwojob.com/product/w/a/R/waR0ImJfrYeVCPw.png",
    type: "popular",
    title: "Bon popular1",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://i.pinimg.com/736x/8d/fd/81/8dfd81b74cc58ba6a45a928ccb3255ca.jpg",
    type: "popular",
    title: "Bon popular2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcd4Qd5c5Tvm__2ILmgiPHl9dMIdMFHPkKw&usqp=CAU",
    type: "soundtrack",
    title: "Bon soundtrack1",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://cdn.flipsnack.com/template/4466/medium.jpg?v=1626854126",
    type: "soundtrack",
    title: "Bon soundtrack2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://i.ebayimg.com/images/g/lBkAAOSwpI5eId6S/s-l400.jpg",
    type: "soundtrack",
    title: "Bon soundtrack1",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210326104449-02-rizzoli-album-art-covers-restricted.jpg",
    type: "soundtrack",
    title: "Bon soundtrack2",
    descripttion: "Nothing but beautiful country love songs..",
  },

  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888",
    type: "soundtrack",
    title: "Bon soundtrack1",
    descripttion: "Nothing but beautiful country love songs..",
  },
  {
    img: "https://cdn.create.vista.com/downloads/772c1a9f-e46e-42f5-9110-8efe9cc2c0c2_450.jpeg",
    type: "soundtrack",
    title: "Bon soundtrack2",
    descripttion: "Nothing but beautiful country love songs..",
  },
];

const btnHome = document.querySelector(".logo");
const containBleib = document.querySelector("#bleib");
const containFocus = document.querySelector("#focus");
const containMood = document.querySelector("#mood");
const containEntdecke = document.querySelector("#entdecke");
const containPopular = document.querySelector("#popular");
const containSoundtrack = document.querySelector("#soundtrack");

const htmlBleib = document.getElementById("bleib");
const htmlFocus = document.getElementById("focus");
const htmlMood = document.getElementById("mood");
const htmlEntdecke = document.getElementById("entdecke");
const htmlPopular = document.getElementById("popular");
const htmlSoundtrack = document.getElementById("soundtrack");
// let countBleib,
//   countFocus = 0;

const addMusic = function (obj) {
  let html = ` <div class="music-section-article">
  <div class="music-section-article-image">
  <img src="${obj.img}" alt="Album Cover Image">
  </img><img src="https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button.png"></div>
  <div class="music-section-article-title">${obj.title}</div>
  <p>${obj.descripttion}</p>
</div>  `;

  let container;
  //   let count;

  switch (obj.type) {
    case "bleib":
      container = containBleib;
      //   count = countBleib;
      break;
    case "focus":
      container = containFocus;
      //   count = countFocus;
      break;
    case "mood":
      container = containMood;
      //   count = countMood;
      break;
    case "entdecke":
      container = containEntdecke;
      //   count = countEntdecke;
      break;
    case "popular":
      container = containPopular;
      //   count = countPopular;
      break;
    case "soundtrack":
      container = containSoundtrack;
    //   count = countSoundtrack;
  }
  //   count++;
  //   console.log(count);
  container.insertAdjacentHTML("beforeend", html);
};

// const mapped = musicList.map((obj) => obj.type + "i");

// console.log("mapped" + mapped);
// //   .filter((obj) => obj.type !== "focuds")
// //   .forEach((music, i) => {
// //     addMusic(music);
// //   });

const musicListByType = [[], [], [], [], [], []];

const newArrByType = function (arr) {
  arr.forEach((element) => {
    switch (element.type) {
      case "bleib":
        musicListByType[0].push(element);
        break;
      case "focus":
        musicListByType[1].push(element);
        break;
      case "mood":
        musicListByType[2].push(element);
        break;
      case "entdecke":
        musicListByType[3].push(element);
        break;

      case "popular":
        musicListByType[4].push(element);
        break;
      case "soundtrack":
        musicListByType[5].push(element);
        break;
    }
  });

  return musicListByType;
};

const loadMain = function () {
  const containerWidth = document.getElementById("bleib").offsetWidth;
  numItems = Math.floor(containerWidth / 240);
  if (window.innerWidth > 600) {
    musicListByType.forEach((list) => {
      for (let i = 0; i < numItems; i++) {
        addMusic(list[i]);
      }
    });
  } else {
    musicListByType.forEach((list) => {
      for (let i = 0; i < 2; i++) {
        addMusic(list[i]);
      }
    });
  }
};

console.log(musicListByType);

let numItems;
//num of items by screen size
window.addEventListener("resize", () => {
  htmlBleib.innerHTML = "";
  htmlFocus.innerHTML = "";
  htmlMood.innerHTML = "";
  htmlEntdecke.innerHTML = "";
  htmlPopular.innerHTML = "";
  htmlSoundtrack.innerHTML = "";

  loadMain();
});

newArrByType(musicList);
loadMain();
