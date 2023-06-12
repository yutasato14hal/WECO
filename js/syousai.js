// ボタンID名,商品画像,商品名,サイズ,値段,数量
let list = [
  ["botan", "00001", "S", "999", 0],
  ["botan2", "00002", "M", "1599", 0],
  ["botan3", "00003", "L", "1999", 0],
  ["botan4", "00004", "LL", "2199", 0],
  ["botan5", "00005", "S", "2299", 0],
  ["botan6", "00006", "M", "1799", 0],
  ["botan7", "00007", "M", "1399", 0],
  ["botan8", "00008", "L", "1599", 0],
  ["botan9", "00009", "LL", "1799", 0],
  ["botan10", "00010", "S", "1199", 0],
];
if (window.sessionStorage.getItem(["key1"]) == "woman") {
  list = [
    ["botan", "10001", "S", "1299", 0],
    ["botan2", "10002", "S", "899", 0],
    ["botan3", "10003", "M", "1499", 0],
    ["botan4", "10004", "M", "1699", 0],
    ["botan5", "10005", "L", "1999", 0],
    ["botan6", "10006", "S", "1399", 0],
    ["botan7", "10007", "M", "1499", 0],
    ["botan8", "10008", "L", "999", 0],
    ["botan9", "10009", "S", "1199", 0],
    ["botan10", "10010", "M", "1899", 0],
  ];
}

const cart = [];
// 関数作成
function huku(num) {
  // 商品が押されたら
  document.getElementById(list[num][0]).addEventListener("click", () => {
    // 一回も押されてなかったら
    if (list[num][4] == 0) {
      // テンプレートタグの中を複製
      const template = document.getElementById("template");
      const div = template.content.cloneNode(true);
      // 個別に認識できるようにIDをふる
      div.querySelector(".basket-product").id = list[num][1];
      //   商品画像を入れる
      div.querySelector(
        ".product-image"
      ).innerHTML = `<img src=Images/${list[num][1]}.png class="product-frame">`;
      //   商品名を入れる
      div.querySelector(
        ".product-details"
      ).innerHTML = `<h1><strong>${list[num][1]}</strong></h1>
      <p><strong>Size ${list[num][2]}</strong></p>`;
      //   商品価格を入れる
      div.querySelector(".price").innerText = list[num][3];
      //   合計金額を入れる
      div.querySelector(".subtotal").innerText = list[num][3];
      //   basket-productに子要素として入れる
      document.querySelector(".basket-product").appendChild(div);
      //リスト配列の数量を1にする
      list[num][4] = 1;
      // カートへボタンが押されたら
      document
        .getElementById(list[num][1])
        .querySelector(".addcart")
        .addEventListener("click", () => {
          // カート配列に入ってなかったら
          alert("カートに追加されました！");
        
          if (!cart.includes(list[num])) {
            var n = Number(
              document.getElementById(list[num][1]).querySelector("input").value
            );
            list[num][4] = n;
            // カート配列にリスト配列の中身入れる
            cart.push(list[num]);
          }
          //   セッションでカートページに送る
          window.sessionStorage.setItem("arr", JSON.stringify(cart));
        });
      // すでに押されてたら
    } else if (list[num][4] != 0) {
      // 数量の値をとってくる
      var n = Number(
        document.getElementById(list[num][1]).querySelector("input").value
      );
      //   数量をひとつ増やす
      n += 1;
      //数量を入れる
      document.getElementById(list[num][1]).querySelector("input").value =
        String(n);
      document
        .getElementById(list[num][1])
        .querySelector(".subtotal").innerText = n * Number(list[num][3]);
      // リスト配列に数量の値を入れる
      list[num][4] = n;
    }
    // ×ボタンが押されたら
    document
      .getElementById(list[num][1])
      .querySelector(".delete")
      .addEventListener("click", () => {
        // 押された商品の詳細を消す
        document.getElementById(list[num][1]).remove();
        // リストの数量を0にする
        list[num][4] = 0;
      });
  });
}
for (let i = 0; i < list.length; i++) {
  huku(i);
}


document.getElementById('cart').addEventListener('click',()=>{
    if (!(cart.length === 0)) {
        document.getElementById('cart').href = 'cart.php'
    }
})
