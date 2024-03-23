/*수(num)를 입력받아 1부터
num까지의 정수로구성된 문자열을 리턴해야 합니다. */



/*
function makeDigits(num) {

    let result = '';
    for(let i=1; i<=num; i++){
        result += i
    }
    return result;
  }

  console.log(makeDigits(5));
---
*/

//방법1) num받았을 때의 방법

function makeDigits(num){

    let result=``;

    let i = 1;
    while (i<=num){
        if(i===num){
            result = result + i;
        }
        else{
            result = result + i + `-`;
        }
        i++;
    }
    return result;
}
console.log(makeDigits(5));


/*  방법2 애초에 2부터 시작하기

function makeDigits(num){

    let result=`1`;

    let i = 2;
    while (i<=num){
        //result = result + '-' +i ;
        result += `-${i}`;
        i++;
    }
    return result;
}
console.log(makeDigits(5));
 */