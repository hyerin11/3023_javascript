
/*
문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴해야 합니다.

## **주의 사항**

- 이중 반복문(`double for loop`)을 사용해야 합니다.
- 빈 문자열을 입력받은 경우에는 `false`을 리턴해야 합니다.

입출력 예시
let output = hasRepeatedCharacter('abcdefg');
console.log(output); // --> false

output = hasRepeatedCharacter('codestates');
console.log(output); // --> true

output = hasRepeatedCharacter('');
console.log(output); // --> false
 */


// 흠.. 일단 a랑 b가 같은게 있는가

function hasRepeatedCharacter(str) {

        for(let i=0; i<=str.length; i++){
            for(let j= i+1; j<str.length; j++){
                if(str[i]===str[j]){
                    return true;
                }
            }
        }
    return false;
}

console.log(hasRepeatedCharacter(`abcdefg`));