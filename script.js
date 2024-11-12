document.addEventListener('keydown', function(event) {
    const output = document.getElementById('output');
    output.textContent = `키가 눌렸습니다: ${event.key}`;
}); 