let goods = [
  { no: "1", title: "스프링", price: 40000, desc: "스프링은 프레임 워크" },
  { no: "2", title: "자바", price: 25000, desc: "자바는 ..." },
  { no: "3", title: "SQL", price: 32000, desc: "SQL도 언어" },
];
let cartlist = [];
makeTag();
//조회
function makeTag() {
  for (i = 0; i < goods.length; i++) {
    let tag = `<div class="card" data-no="${goods[i].no}">
      <h1>${goods[i].title}</h1>
      <p class="price">${goods[i].price}</p>
      <p>${goods[i].desc}</p>
      <p><button class="cart">Add to Cart</button>
      <button class="del">delete</button></p>
    </div>`;
    document.querySelector("#list").innerHTML += tag;
  }
}

//장바구니
document.querySelector("#list").addEventListener("click", function (ev) {
  let btn = ev.target;
  if (btn.classList.contains("cart")) {
    let price = btn.closest(".card").querySelector(".price").innerHTML;
    console.log(price);
  } else if (btn.classList.contains("del")) {
    let no = btn.closest(".card").getAttribute("data-no");
    for (i = 0; i < goods.length; i++) {
      if (goods[i].no == no) {
        goods.splice(i, 1);
        break;
      }
    }
    console.table(goods);
    btn.closest(".card").remove();
  }
});
//등록

//삭제

//가격계산
