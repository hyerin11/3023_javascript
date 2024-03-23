/*
1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

<입출력 예시>
let output = isPrime(2);
console.log(output); // --> true

output = isPrime(6);
console.log(output); // --> false

output = isPrime(17);
console.log(output); // --> true

*/


/*
< 소수 제외사항 >
num % 2 === 1일 때 소수
- 1은 소수가 아님
- 2는 소수임
- 홀수 중 홀수로 나눠진는 경우 소수가 아님
*/

function isPrime(num) {

  if(num === 1){
    return false;
  }

  if(num === 2, num === 3){
    return true;
  }

  //입력받은 수의 제곱근까지 수로 나누기
for (let i=2; i <+ Math.sqrt(num); i++){
    if(num%i ===0){
        return false;
    }
    
}
return true;

}

console.log(isPrime(5));



/* [boolean 사용 안했을 때]

function isPrime(num) {

    if (num === 0){
        console.log('1 이상의 숫자를 입력하세요');
    }else if (num % 2 === 1){
        console.log(`True`);
    }else{
        console.log(`False`);
    }

}

console.log(isPrime(5));
*/