/*수(num)를 입력받아 1부터
num까지의 정수로 구성된 문자열을 리턴해야 합니다. */

function makeDigits(num) {

    //"가" + "나" = "가나"
    let result = '';
    for(let i=1; i<=num; i++){
        result += i
    }
    return result;
  }

  console.log(makeDigits(5));






















/*
function makeDigits(num) {

if (num>0){
    for(let i=1; i<=num; i++){
        console.log(num);
    }
        return (`$`);
    }
}
  
*/














