import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
// import { ArcballControls } from 'https://unpkg.com/three@0.145/examples/jsm/controls/ArcballControls.js';
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";

let camera;
let scene;
let renderer;
let model;
let gender = "man";
let skin = "2";
window.sessionStorage.setItem(["key1"], [gender]);
window.sessionStorage.setItem(["key2"], [skin]);
const modelContainer = document.getElementById("model");
const modelW = modelContainer.clientWidth;
const modelH = modelContainer.clientHeight;
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const range = document.getElementById("inputSlideBar");

const lightArray = [
  [-20, 30, 100],
  [20, -30, -100],
  [0, 1000, -100],
  [0, -1000, -100],
  [10000, -1000, -100],
  [-10000, -1000, -100],
];

init();
animate();

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
    let light = new THREE.DirectionalLight(0xffffff, 0.7);
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
  const loader = new GLTFLoader();

  loader.load(
    "./Images/mannequin/" + gender + skin + ".glb",
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

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

radio1.addEventListener("click", function () {
  document.querySelector(`canvas`).remove()
  gender = radio1.value;
  window.sessionStorage.setItem(["key1"], [gender]);
  return init();
});

radio2.addEventListener("click", function () {
  document.querySelector(`canvas`).remove()
  gender = radio2.value;
  window.sessionStorage.setItem(["key1"], [gender]);
  return init();
});

range.addEventListener("input", function () {
  document.querySelector(`canvas`).remove()
  switch (range.value) {
    case "0":
      skin = 1;
      break;
    case "1":
      skin = 2;
      break;
    case "2":
      skin = 3;
      break;
  }
  window.sessionStorage.setItem(["key2"], [skin]);
  return init();
});
