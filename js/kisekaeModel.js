import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
// import { ArcballControls } from 'https://unpkg.com/three@0.145/examples/jsm/controls/ArcballControls.js';
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";

let camera;
let scene;
let renderer;
let model;
let gender;
let skin;
if (window.sessionStorage.getItem(["key1"]) == "man") {
  gender = 0;
} else {
  gender = 1;
}
switch (window.sessionStorage.getItem(["key2"])) {
  case "1":
    skin = 0;
    break;
  case "2":
    skin = 1;
    break;
  default:
    skin = 2;
    break;
}
const modelContainer = document.getElementById("model");
const modelW = modelContainer.clientWidth;
const modelH = modelContainer.clientHeight;
("inputSlideBar");
const defaultUpper = `./Images/mannequin/${window.sessionStorage.getItem([
  "key1",
])}${window.sessionStorage.getItem(["key2"])}_upperBody.glb`;
const defaultLower = `./Images/mannequin/${window.sessionStorage.getItem([
  "key1",
])}${window.sessionStorage.getItem(["key2"])}_lowerBody.glb`;
const lightArray = [
  [-20, 30, 100],
  [20, -30, -100],
  [0, 1000, -100],
  [0, -1000, -100],
  [10000, -1000, -100],
  [-10000, -1000, -100],
];

var list = [
  ["botan", "0001"],
  ["botan2", "0002"],
  ["botan3", "0003"],
  ["botan4", "0004"],
  ["botan5", "0005"],
  ["botan6", "0006"],
  ["botan7", "0007"],
  ["botan8", "0008"],
  ["botan9", "0009"],
  ["botan10", "0010"],
];
let upper = defaultUpper;
let lower = defaultLower;

init();
animate();

function rend(link) {
  const loader = new GLTFLoader();
  loader.load(
    link,
    function (gltf) {
      model = gltf.scene;
      model.position.set(0, -8, 0);
      model.traverse((object) => {
        //モデルの構成要素
        if (object.isMesh) {
          //その構成要素がメッシュだったら
          object.material.trasparent = true; //透明許可
          object.material.opacity = 1; //透過
          object.material.depthTest = true; //陰影で消える部分
        }
      });
      scene.add(model);
    },
    undefined,

    function (e) {
      console.error(e);
    }
  );
  modelContainer.appendChild(renderer.domElement);
}

function init() {
  //シーンの作成
  scene = new THREE.Scene();

  //カメラの作成
  camera = new THREE.PerspectiveCamera(25, modelW / modelH, 0.1, 1000);
  //カメラセット
  camera.position.set(0, 0, 50);
  camera.lookAt(new THREE.Vector3(0, 1, 0));

  // const ArcballControl = new ArcballControls(camera, modelContainer);

  // 滑らかにカメラコントローラーを制御する
  const controls = new OrbitControls(camera, modelContainer);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  //光源
  for (let i = 0; i < lightArray.length; i++) {
    let light = new THREE.DirectionalLight(0xffffff, 1.1);
    light.position.set(lightArray[i][0], lightArray[i][1], lightArray[i][2]);
    scene.add(light);
  }

  //レンダラー
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setClearColor(new THREE.Color(0xffffff));
  renderer.setSize(modelW, modelH, true);

  rend(upper);
  rend(lower);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function clothesSet(number) {
  if (Number(list[number][1]) <= 5) {
    document
      .getElementById(list[number][0])
      .addEventListener("click", function () {
        document.querySelector("canvas").remove();
        upper = `./Images/mannequin/${gender}${skin}${list[number][1]}.glb`;
        init();
      });
  } else if (Number(list[number][1]) >= 6) {
    document
      .getElementById(list[number][0])
      .addEventListener("click", function () {
        document.querySelector("canvas").remove();
        lower = `./Images/mannequin/${gender}${skin}${list[number][1]}.glb`;
        init();
      });
  }
}
for (let i = 0; i < list.length; i++) {
  clothesSet(i);
}
