/*
숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중
가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

< 주의사항 >
- 반복문(`for`)문을 사용해야 합니다.
- `str.split` 사용은 금지됩니다.
- 빈 문자열을 입력받은 경우, “0”을 리턴해야 합니다.


< 입출력 예시 >
let output = getMaxNumberFromString('53862');
console.log(output); // --> '8'

output = getMaxNumberFromString('4321');
console.log(output); // --> '4'


-손코딩
1. if (str===``)일 경우 0리턴
2. else안에 쓰기 시작
3. 

*/


function getMaxNumberFromString(str) {
    let maxNumber = str[0];
    
    if(str === ``){
        console.log(`숫자를 입력해주세요`);
        return 0;
    }else{
        for(i=0; i<str.length; i++){
            if(str[i] > maxNumber){
                maxNumber = str[i];
        }
        
        }
        return maxNumber;
    }

}

  console.log(getMaxNumberFromString(`123456`));





