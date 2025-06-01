document.addEventListener('DOMContentLoaded', () => {
    const boxes = Array.from({length: 8}, (_, i) => document.getElementById(`box${i+1}`));

    const animateSequentially = async (elements) => {
        for (const [index, element] of elements.entries()) {
            await new Promise(resolve => {
                element.style.animation = `fadeIn 0.3s ${index * 0.1}s forwards`;
                element.addEventListener('animationend', () => {
                    element.style.animation = 'pulse 0.5s ease 2';
                    resolve();
                }, { once: true });
            });
        }
    };

    animateSequentially(boxes);
});
