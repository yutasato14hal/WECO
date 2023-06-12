window.addEventListener("DOMContentLoaded", function () {
  $(".tab-list-item").on("click", function () {
    let index = $(".tab-list-item").index(this);

    $(".tab-list-item").removeClass("is-btn-active");
    $(this).addClass("is-btn-active");
    $(".tab-contents").removeClass("is-contents-active");
    $(".tab-contents").eq(index).addClass("is-contents-active");
  });
});

// slick
window.addEventListener("DOMContentLoaded", function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
});

// list

const pmlist = [
  {
    id: "botan",
    href: "./Images/00001.png",
  },
  {
    id: "botan2",
    href: "./Images/00002.png",
  },
  {
    id: "botan3",
    href: "./Images/00003.png",
  },
  {
    id: "botan4",
    href: "./Images/00004.png",
  },
  {
    id: "botan5",
    href: "./Images/00005.png",
  },
  {
    id: "botan6",
    href: "./Images/00006.png",
  },
  {
    id: "botan7",
    href: "./Images/00007.png",
  },
  {
    id: "botan8",
    href: "./Images/00008.png",
  },
  {
    id: "botan9",
    href: "./Images/00009.png",
  },
  {
    id: "botan10",
    href: "./Images/00010.png",
  },
];

const pflist = [
    {
        id: "botan",
        href: "./Images/10001.png",
      },
      {
        id: "botan2",
        href: "./Images/10002.png",
      },
      {
        id: "botan3",
        href: "./Images/10003.png",
      },
      {
        id: "botan4",
        href: "./Images/10004.png",
      },
      {
        id: "botan5",
        href: "./Images/10005.png",
      },
      {
        id: "botan6",
        href: "./Images/10006.png",
      },
      {
        id: "botan7",
        href: "./Images/10007.png",
      },
      {
        id: "botan8",
        href: "./Images/10008.png",
      },
      {
        id: "botan9",
        href: "./Images/10009.png",
      },
      {
        id: "botan10",
        href: "./Images/10010.png",
      },
];
let gender;
if (window.sessionStorage.getItem(["key1"]) == "man") {
  gender = 0;
} else {
  gender = 1;
}
if (gender === 0) {
  pmlist.forEach((l) => {
    const li = document.createElement("li");
    li.classList.add("slider-item");
    const div = document.createElement("div");
    div.id = l.id;
    const img = document.createElement("img");
    img.src = l.href;
    div.appendChild(img);
    li.appendChild(div);
    document.querySelector(".slider").appendChild(li);
  });
} else if(gender == 1) {
  pflist.forEach((l) => {
    const li = document.createElement("li");
    li.classList.add("slider-item");
    const div = document.createElement("div");
    div.id = l.id;
    const img = document.createElement("img");
    img.src = l.href;
    div.appendChild(img);
    li.appendChild(div);
    document.querySelector(".slider").appendChild(li);
  });
}
