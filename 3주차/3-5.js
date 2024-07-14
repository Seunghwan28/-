function displayBattery() {
    // 사용자로부터 입력값을 가져옴
    const batteryLevel = parseInt(document.getElementById('battery-level').value);
    const batteryInner = document.getElementById('battery-inner');

    // 유효한 입력값인지 확인
    if (isNaN(batteryLevel) || batteryLevel < 0 || batteryLevel > 100) {
        alert('0에서 100 사이의 숫자를 입력하세요');
        return;
    }

    // 배터리 상태를 시각적으로 표시
    batteryInner.style.width = batteryLevel + '%';
}
