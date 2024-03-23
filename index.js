/*
let num='1';
console.log(num*1);
console.log(num*2);
console.log(num*3);
console.log(num*4);
console.log(num*5);

for (let i=0; i<10; i++){
    console.log(num*i);
}

-------------------
//자기 자신을 곱해서 더하는 1부터 10까지


let result = 1;

for (let num = 1; num <= 10; num++) {
    result = result * num;
}

console.log (result);



-------------------
//0부터 10까지 출력
let result = 0;
for (let num = 0; num <=10; num++){
    console.log(num);
}




----------------------
let num = 3;

if ( num>=2 && num <=9 ){
    for(let i=1; i<=10; i++){
        console.log(num * i)
    }
} else {
    console.log("2와 9사이 수 입력해라");
}


-------------------------
// 홀수만 출력하기
for (let i=1; i<=10; i++){
    if( i%2 === 1){
        console.log(i);
    }
}

--------------------------
//주어진 문자열의 문자들 중, 인덱스가 짝수인 문자만 출력

for (let i=0; i<str.length; i++){
    if(i%2===0){
        console.log(str[i]);
    }
}

----------------------------



//.toUpperCase();대문자로 출력


1. 주어진 문자열의 문자열의 길이가 10 이상이라면, >> if
2. 해당 문자열의 모든 문자를 대문자로 변경하여    >> .toUpperCase();대문자로 출력
3. 하나씩 문자를 출력하도록 코드를 구현하세요.



let str = 'javascriptjavascript';

if (str.length >=10){
    for(let i=0; i<str.length; i++){
        console.log(str[i].toUpperCase());
    }
}
else{
    console.log("10글자 이상 다시 입력하시오.")
}


------------

//주사위 2개 굴려서 나올 수 있는 모든 경우의 수
for (let i=1; i<=6; i++){
    for(let j=1; j<=6; j++){
        console.log(`첫 번째 주사위는 ${i}, 두 번째 주사위는 ${j}입니다.`);
    }
}
-------------------


//3줄 반복문
for (let first = 0; first <= 3; first++) {
    for (let second = 0; second <= 3; second++) {
      for (let third = 0; third <= 3; third++) {
        console.log(
          `first는 ${first}, second는 ${second}, third는 ${third}입니다.`);
      }
    }
  }




// 구구단 출력하기. 2단부터 9단까지
for(let first=2; first <=9; first++){
    console.log(`${first}단`);
    for (let second=1; second <= 9; second++){
        console .log(`${first} x ${second} = ${first*second}`);
    }
    console.log(`${first}단이 끝났습니다`);
    console.log(``);
}




// 함수선언문으로 정의한 함수
function greeting () {
	console.log('hello world')  // 메시지 출력
};

greeting();

console.log("함수 실행 이후 입니다.")



//선언하기
function decleard(){
    console.log('함수선언문');
}

decleard();

----
let greeting = function(){
    console.log('함수표현식')
};

declared();
--------


let declared = function(){
    console.log("함수표현");
}
declared()



let name = "hyerin";

function greeting(name){
    console.log("hello "+name);
}
//greeting();
greeting("rin");


//구구단 출력

function multi(n){

    if( n>=2 && n<10) {
        for(let i=1; i<=9; i++){
            console.log(`${n} x ${i} = ${n*i}`);
        }
    } else {
        console.lof("2부터 9까지 숫자를 입력하시오.")
    }    
}

multi(2);

-------------


//2개의 수를 입력받았을 때 2, 5 입력받으면
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10


function multi(n, count){

    if( n>=2 && n<10) {
        for(let num=1; num<=count; num++){
            console.log(`${n} x ${num} = ${n*num}`);
        }
    } else {
        console.log("2부터 9까지 숫자를 입력하시오.");
    }    
}

multi(2, 5);



let result = 0;

function  add(x,y){
    return x+y;
}
result = add(2,3);
// 위와 같음 result = 5;

console.log(result);
--------------------------


function  add(x,y){
    if(x>3){
        return x+y;
    }else{
        console.log("너무 작은 수 입니다.");
    }
}

console.log(add(2,3));


//-------------------------


function add(x,y){
    return x * y;
}
console.log(add(3,5));
console.log(add(6,8));
*/
//-------------------------
function add(x,y){
    return x * y; //반환문
}

//console.log(add(2,3));
function multi(num1, num2){
    return num1 * num2;
}

console.log(multi(1,2));