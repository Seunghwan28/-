function calculate() {
    // 사용자로부터 입력값을 가져옴
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    // 연산을 수행
    if (isNaN(num1) || isNaN(num2)) {
        result = '숫자를 입력하세요';
    } else {
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '%') {
            result = num1 % num2;
        } else if (operator === '/') {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = '오류: 0으로 나눌 수 없습니다.';
            }
        } else {
            result = '오류: 유효하지 않은 연산자입니다.';
        }
    }

    // 결과를 표시
    document.getElementById('result').innerText = `결과: ${result}`;
}
