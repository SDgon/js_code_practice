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

