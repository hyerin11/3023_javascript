/*
문자열과 문자를 입력받아 문자열에서
문자(letter)가 등장하는 횟수를 리턴해야 합니다.


[입출력 예시]
let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

[주의사항]
- 반복문for문 사용할 것
- 빈 문자열 입력받았을 때, 0으로 return할 것.

//풀이 방법
1. if == .length가 0이라면, return0을 하고
        else {  나머지를 여기다 쓰고   }

2. 일단 count로 숫자를 세야 함. >> 선언 후 문장 한바퀴 돌아야 함
3. for 반복문으로 i<str.length까지 반복 돌려서 
4. if (str[i] === letter )  >> 그리고 letter가 i번째랑 일치할 때
5. count++ 카운트를 세고
6. 최종적으로 return값으로 count를 출력함

*/ 

function countCharacter(str, letter) {
    
    if(letter === ``){
        console.log(`문자를 입력해주세요`);
        return 0;
    }else{
        let count = 0;
        for(let i=0; i<str.length; i++){
            if(str[i] === letter){
                count++;
            }
        }
        return count;
    }
}

console.log(countCharacter(`My name is hyerinn`, `n`));