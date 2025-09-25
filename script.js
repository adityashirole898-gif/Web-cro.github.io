document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    
    // Page 1 Elements
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const errorText = document.getElementById('errorText');
    const correctText = document.getElementById('correctText');

    // Page 2 Elements
    const envelopeContainer = document.querySelector('.envelope-container');
    const envelope = document.querySelector('.envelope');
    const nextPage2Btn = document.getElementById('nextPage2Btn');

    // Page 3 Elements
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Correct answer for the name validation
    const correctName = 'Aditya Shirole';

    // Page 1: Name Validation
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enteredName = nameInput.value.trim();
        if (enteredName === correctName) {
            errorText.textContent = '';
            correctText.textContent = 'I know your Aditya is me.';
            setTimeout(() => {
                page1.classList.remove('active');
                page2.classList.add('active');
            }, 2000);
        } else {
            correctText.textContent = '';
            errorText.textContent = 'What is this, Devashree?';
        }
    });

    // Page 2: Envelope Opening
    envelopeContainer.addEventListener('click', () => {
        envelope.classList.add('open');
        setTimeout(() => {
            nextPage2Btn.style.display = 'block';
        }, 1000);
    });

    nextPage2Btn.addEventListener('click', () => {
        page2.classList.remove('active');
        page3.classList.add('active');
    });

    // Page 3: Yes/No Button Logic
    yesBtn.addEventListener('click', () => {
        page3.classList.remove('active');
        page4.classList.add('active');
    });

    noBtn.addEventListener('mouseover', () => {
        // Get the current position of the button
        const buttonRect = noBtn.getBoundingClientRect();
        
        // Get the dimensions of the parent container
        const parentRect = page3.getBoundingClientRect();

        // Calculate a new random position within the container
        // Ensure padding from edges
        const padding = 20; // Minimum distance from the page edges
        const newX = Math.random() * (parentRect.width - buttonRect.width - (2 * padding)) + padding;
        const newY = Math.random() * (parentRect.height - buttonRect.height - (2 * padding)) + padding;

        // Apply the new position
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });
});