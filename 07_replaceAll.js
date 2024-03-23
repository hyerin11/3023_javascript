/*
문자열과 두 개의 문자(from, to)를 입력받아,
문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.


<입출력 예시> >> 문자열과 문자 2개를 입력받아 첫번째 문자를 두번째 문자로 바꾸기 
let output = replaceAll('loop', 'o', 'e');
console.log(output); // --> 'leep'


<손코딩>
1. 문자열에서 첫 번째 문자를 찾는다 if
2. 없다면 없다고 출력 else
3. 있으면 그 문자열에 i 두번째 문자를 저장함
4. 출력


*/



function replaceAll(str, from, to) {

    let result=``; //결과 저장할 곳

    for(let i=0; i<str.length; i++){
        if(str[i] === from){
            result = result + to //?????????
        } else{
            result = result + str[i]; 
            //console.log(`문자가 존재하지 않습니다.`);
            //return 0;
        }
    }
    return result;
}

console.log(replaceAll('loop', 'o', 'e'));