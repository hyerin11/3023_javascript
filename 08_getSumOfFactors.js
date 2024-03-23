/*
수를 입력받아 약수의 합을 리턴한다.

<입출력 예시>
let output = getSumOfFactors(8);
console.log(output); // --> 15 (1 + 2 + 4 + 8)

output = getSumOfFactors(12);
console.log(output); // --> 28 (1 + 2 + 3 + 4 + 6 + 12)


<방법>
- 약수 구하는 방법 : i로 나눠서 나머지가 0일 때의 값

*/


function getSumOfFactors(num) {

    let result = 0;

    for(let i=0; i<=num; i++){
        if(num % i === 0){
            result = result + i;
        }
    }
return result;

}

console.log(getSumOfFactors(8));