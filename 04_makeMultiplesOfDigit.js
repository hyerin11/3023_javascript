/*수를 입력받아 1부터 해당 수까지의 수 중에서
3의 배수로만 구성된 문자열을 리턴해야 합니다. */


function makeDigits(num) {

    let result = '';
    for(let i=1; i<=num; i++){
        result += i*3;
    }
    return result;
  }

  console.log(makeDigits(5));