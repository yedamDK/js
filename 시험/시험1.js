let books = [
  { no : 'inbn002', title : '스프링', writer:'김기자', price:40000},
  { no : 'inbn003', title : '자바', writer:'이순식', price:25000},
  { no : 'inbn004', title : 'SQL', writer:'을지문덕', price:32000},
]
//배열의 데이터로 태그 그리기 호출
book();
// 가격 총금액 호출
priceTotalCalc();
//books 배열대로 테이블 추가
function book(){    //함수 만들기
  list.innerHTML =""  //원래 내용 삭제
  for(let i=0 ; i<books.length ; i++){
    list.innerHTML += `<tr>
                        <td><input type="checkbox"></td>
                        <td>${books[i].no}</td>
                        <td>${books[i].title}</td>
                        <td>${books[i].writer}</td>
                        <td clas="price">${books[i].price}</td>
                        <td><button>삭제</button></td>
                        </tr>`
   }
  }
  //삭제버튼 클릭시
  list.addEventListener("click",function(ev){
    if(ev.target.nodeName == "BUTTON"){ 
      // ev.target.parentNode.parentNode.remove();

      //배열에서 삭제
      let no = ev.target.closest("tr").children[1].innerText;
      for(let i=0; i<books.length; i++){
        if(book[i].no ==no){
          books.splice(1,1)
        }
      }

      book();

      priceTotalCalc();

  } 
  })
//추가버튼 클릭
  btnAdd.addEventListener("click",function(ev){
    let addObj = {no : no.value, 
                     title : title.value,
                     writer: writer.value,
                     price: price.value}
      if( ! inputCheck() ){
        return;
      }               
      // if(no.value =="" ){
      //   alert("도서번호 등록")
      // no.focus();
      // return;
      // }
      // if(title.value==""){
      //   alert("도서명 등록")
      //   no.focus();
      //   return;
      // }

      books.push(addObj);
      priceTotalCalc();
      book();
    inputClear();
    // no.value="";                //가린 부분으로 할 거면 위에 inputClear()와 밑에 function함수 지우기
    // title.value="";
    // writer.value="";
    // price.value="";
  })
  function inputCheck(){
    if(no.value =="" ){
      alert("도서번호 등록")
    no.focus();
    return false;
    }
    if(title.value==""){
      alert("도서명 등록")
      no.focus();
      return false;
    }
    return true;
  }

  function inputClear(){
    no.value="";
    title.value="";
    writer.value="";
    price.value="";
  }

//총금액 계산
function priceTotalCalc(){
  let total=0;
  for(let i=0 ; i<books.length; i++){
  total += books[i].price*1;
}
totalPrice.innerText = total;
}
  

    
