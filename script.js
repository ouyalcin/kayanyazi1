// script.js

document.addEventListener('DOMContentLoaded', () => {
    const previewText = document.querySelector('.preview-text');
    const inputText = document.getElementById('inputText');
    const textColorPicker = document.getElementById('textColor');
    const bgColorPicker = document.getElementById('bgColor');
    const fontSelect = document.getElementById('fontSelect');
    const speedInput = document.getElementById('speed');
    const directionSelect = document.getElementById('direction');
    const playButton = document.getElementById('playButton');

    // Önizleme ekranında değişiklikleri göster
    inputText.addEventListener('input', () => {
        previewText.textContent = inputText.value;
    });

    textColorPicker.addEventListener('input', () => {
        previewText.style.color = textColorPicker.value;
    });

    bgColorPicker.addEventListener('input', () => {
        document.body.style.backgroundColor = bgColorPicker.value;
    });

    fontSelect.addEventListener('change', () => {
        previewText.style.fontFamily = fontSelect.value;
    });

    speedInput.addEventListener('input', () => {
        const speed = speedInput.value;
        previewText.style.animationDuration = `${speed}s`;
    });

    directionSelect.addEventListener('change', () => {
        updateAnimation();
    });

    // Yön değiştirici
    function updateAnimation() {
        previewText.style.animationName = `marquee-${directionSelect.value}`;
        previewText.style.animationDuration = `${speedInput.value}s`;
        previewText.style.animationTimingFunction = 'linear';
        previewText.style.animationIterationCount = 'infinite';
    }

    // Play butonuna basıldığında tam ekran moduna geç
    playButton.addEventListener('click', () => {
        const fullScreenContainer = document.createElement('div');
        fullScreenContainer.classList.add('fullscreen');
        const fullScreenText = previewText.cloneNode(true);
        updateAnimation();
        
        fullScreenContainer.appendChild(fullScreenText);
        document.body.appendChild(fullScreenContainer);

        // Tam ekrandan çıkmak için herhangi bir tuşa basıldığında kaldır
        document.addEventListener('keydown', () => {
            document.body.removeChild(fullScreenContainer);
        }, { once: true });
    });

    updateAnimation(); // İlk başta önizlemeyi çalıştır
});
