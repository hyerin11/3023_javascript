/*
2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.


## **출력**

- `string` 타입을 리턴해야 합니다.
- `2-3-5-7`의 형식으로 리턴해야 합니다.


## **주의 사항**

- 이중 반복문(`double for loop`)을 사용해야 합니다.

*/

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


function listPrimes(num) {
    if(num<2){
        console.log(`2 이상의 자연수를 입력하시오`);
    }
    else{

        console.log(2+`result`)

    }

}

console.log(listPrimes(7));