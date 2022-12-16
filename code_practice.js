var exp = 1;
switch(exp){
  case 1:
    console.log(100);;
   break;
  case 2:
    console.log(200);
}; // swich 값이 1이므로 break를 만나 swich문을 빠져나감
   // 출력 = 100

var exp = 7;
switch(exp){
  case 1:
    value = 100;
  default:
    value = 700;
  case 2:
    value = 200;
};
console.log(value);
// case에 7이 없어서 default 값을 출력 
// break를 안 걸어줘서 case 2까지 출력 결국 출력 = 200

var exp = 3;
switch(exp){
  case 2:
  case 3:
    console.log(100);
}
// or 형태  2 또는 3이면 case 수행
//출력 = 100

var value;
try {
  value = ball;
} catch(error){
  console.log("catch 실행");
};
//ball에 변수가 없으므로 에러 발생
//에러 가능성 있으면 try-catch문 사용

try {
  throw {
    msg: "예외 발생",
    bigo: "임의의 이름 사용"
  };
} catch(error){
  console.log(error.msg);
  console.log(error.bigo);
};
//

function book(){
  var title = "js 책";
};

var point = function(one, two){
  var total = one + two;
  var bonus = total + 100;

}

function setValue(one, two){
  var total = one + two;
};

setValue(10, 20);
console.log(total);

function getPoint(){
  return 10 * 30;
}
var result = getPoint();
console.log(result);

/////////////////////////////////
function getPoint() {
  return
  10 * 30;
};
var result = getPoint();
console.log(result);
//return문에서 return하므로 10 * 30을 수행x
//출력 = undifind

var book = {};
book.title = "js책";
console.log(book);
//프로퍼티 추가
//출력 = {title: js책}
var book = {};
book["title"] = "js책";
console.log(book);
//출력 = 위와 같음

var obj = {book: "책"};
console.log(obj.book);
console.log(obj["sports"]);

console.log(Number("123") + 500);
//출력 623
console.log(Number("ABC"));
//출력 NaN

var oneObj = new Number ("123");
console.log(oneObj.valueOf());
//////////////////////////
var obj = new Number("123");
console.log(obj.valueOf());
// obj의 프리미티브 값을 반환, 출력 = 123


var value = 20;
console.log(20 === value.toString());    // 출력 = false,  string type 변환으로..
console.log(value.toString(16));         // 출력 = 14,    20을 16진수로 변환때문

var concat = 123 + 'acd' + "가나다라";
console.log(concat);

var value = String(123);
console.log(value);          //출력 123
console.log(typeof value);   //     string

console.log(typeof ("" + 123)); //  string

var value = "ABC";
console.log(value.length);

var value = "ABC";
for (var k = 0; k < value.length; k++){
  console.log(value[k]);
}

var value = "  abcd  ";
console.log(value.length);     //출력 = 8

console.log(value.trim().length); //앞뒤 공백 제거, 출력 = 4

var value = "sports";
console.log(value.charAt(1));    //출력 p
console.log(value[1]);          //출력 p

var value = "sports";
console.log(value.charAt(12));   // 출력 = 없음(빈문자열)

var value = "123123";
console.log(value.indexOf(2));

var value = "123123";
console.log(value.lastIndexOf(1,-2));

var result = "sports".concat("축구", 11);
console.log(result);

var obj = new String(123);
console.log(obj.concat("ABC"));

console.log(Object.create);      
console.log(Object.prototype.create);


