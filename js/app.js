// セッションで配列(JSON)を持ってくる
var arr = sessionStorage.getItem("arr");
// JSONからarrayに戻す
const cart = JSON.parse(arr);
console.log(cart);
const total = [];
// cartの中身分だけループする
for (let i = 0; i < cart.length; i++) {
  const items = document.createElement("div");
  items.className = "items";
  // itemクラスのdivを作成
  const item = document.createElement("div");
  //   itemクラスを振る
  item.className = "item";
  const f_flex = document.createElement("div");
  f_flex.className = "f_flex";
  const s_flex = document.createElement("div");
  s_flex.className = "s_flex";
  //   imgを入れる
  f_flex.innerHTML = `<img src="./Images/${cart[i][1]}.png">`;
  //   itemtextのdivを作成
  const itemText = document.createElement("div");
  //   itemtextのクラスを振る
  itemText.className = "item-text";
  //   pタグを入れる
  itemText.innerHTML = `<p class="item-name">${cart[i][1]}</p>`;
  //   sizetextのdivを作成
  const sizeText = document.createElement("div");
  //   sizetextのクラスを振る
  sizeText.className = "size-text";
  //   pタグを入れる
  sizeText.innerHTML = `<p class="size-name">サイズ : ${cart[i][2]}</p>`;
  //   countのdivを作成
  const count = document.createElement("div");
  //   countのクラスを振る
  count.className = "count";
  //   inputタグを入れる
  count.innerHTML = `<p class="count">個数 : ${cart[i][4]}</p>`;
  //   itempriceのdivを作成
  const itemPrice = document.createElement("div");
  //   itempriceのクラスを振る
  itemPrice.className = "item-price";
  //   数と値段を掛け算していれる
  itemPrice.innerText = "￥" + cart[i][3] * cart[i][4];
  //    total配列に合計金額を入れる
  total.push(Number(cart[i][3] * cart[i][4]));
  //   con1にitemdiv子要素としてを入れる
  document.querySelector(".con1").appendChild(item);
  //   itemに子要素としてitemtextを入れる
  item.appendChild(f_flex);
  item.appendChild(s_flex);
  s_flex.appendChild(itemText);
  s_flex.appendChild(sizeText);
  //   itemに子要素としてcountを入れる
  s_flex.appendChild(count);
  //   itemに子要素としてitempriceを入れる
  s_flex.appendChild(itemPrice);
}

console.log(total);
// total配列内の
let allTotal = total.reduce(function (sum, element) {
  return sum + element;
}, 0);
document.getElementById("total").innerText = "￥" + allTotal.toLocaleString();
