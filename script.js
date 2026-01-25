let currentName = "";
let currentPhone = "";
let currentEmail = "";
let currentCountry = "";

const nameModal = document.getElementById('name-modal');
const phoneModal = document.getElementById('phone-modal');
const emailModal = document.getElementById('email-modal');

const nameDisplay = document.getElementById('name-display');
const phoneDisplay = document.getElementById('phone-display');
const emailDisplay = document.getElementById('email-display');

const hiddenName = document.getElementById('hidden-name');
const hiddenPhone = document.getElementById('hidden-phone');
const hiddenEmail = document.getElementById('hidden-email');
const hiddenCountry = document.getElementById('hidden-country');

const startNameBtn = document.getElementById('start-name');
const fallingZone = document.getElementById('falling-letters-zone');
const nameProgress = document.getElementById('name-progress');
let nameInterval;

startNameBtn.onclick = () => {
    nameModal.style.display = 'flex';
    currentName = "";
    nameProgress.innerText = "Name: ";
    startFallingLetters();
};

nameDisplay.onclick = () => {
    startNameBtn.click();
};

function startFallingLetters() {
    fallingZone.innerHTML = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

    nameInterval = setInterval(() => {
        const letter = document.createElement('div');
        letter.className = 'falling-letter';
        const char = chars[Math.floor(Math.random() * chars.length)];
        letter.innerText = char === " " ? "_" : char;
        letter.style.left = Math.random() * 90 + "%";
        letter.style.top = "-50px";
        fallingZone.appendChild(letter);

        let top = -50;
        const fallSpeed = 1 + Math.random() * 2;
        const fallAnim = setInterval(() => {
            top += fallSpeed;
            letter.style.top = top + "px";
            if (top > fallingZone.offsetHeight) {
                clearInterval(fallAnim);
                letter.remove();
            }
        }, 20);

        const select = (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentName += char;
            nameProgress.innerText = "Name: " + currentName;
            letter.remove();
        };
        letter.onmousedown = select;
        letter.ontouchend = select;
        letter.onclick = select;
    }, 400);
}

document.getElementById('close-name').onclick = () => {
    clearInterval(nameInterval);
    nameModal.style.display = 'none';
    nameDisplay.innerText = currentName || "Anonymous";
    hiddenName.value = currentName;
    nameDisplay.classList.remove('placeholder');
};

const flagSelector = document.getElementById('flag-selector');
const flags = [
  // Africa
  "🇩🇿", "🇦🇴", "🇧🇯", "🇧🇼", "🇧🇫", "🇧🇮", "🇨🇲", "🇨🇻", "🇨🇫", "🇹🇩", 
  "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇮", "🇩🇯", "🇪🇬", "🇬🇶", "🇪🇷", "🇸🇿", "🇪🇹", 
  "🇬🇦", "🇬🇲", "🇬🇭", "🇬🇳", "🇬🇼", "🇰🇪", "🇱🇸", "🇱🇷", "🇱🇾", "🇲🇬", 
  "🇲🇼", "🇲🇱", "🇲🇷", "🇲🇺", "🇲🇦", "🇲🇿", "🇳🇦", "🇳🇪", "🇳🇬", "🇷🇼", 
  "🇸🇹", "🇸🇳", "🇸🇨", "🇸🇱", "🇸🇴", "🇿🇦", "🇸🇸", "🇸🇩", "🇹🇿", "🇹🇬", 
  "🇹🇳", "🇺🇬", "🇿🇲", "🇿🇼",
  
  // Americas
  "🇦🇬", "🇦🇷", "🇧🇸", "🇧🇧", "🇧🇿", "🇧🇴", "🇧🇷", "🇨🇦", "🇨🇱", "🇨🇴", 
  "🇨🇷", "🇨🇺", "🇩🇲", "🇩🇴", "🇪🇨", "🇸🇻", "🇬🇩", "🇬🇹", "🇬🇾", "🇭🇹", 
  "🇭🇳", "🇯🇲", "🇲🇽", "🇳🇮", "🇵🇦", "🇵🇾", "🇵🇪", "🇰🇳", "🇱🇨", "🇻🇨", 
  "🇸🇷", "🇹🇹", "🇺🇸", "🇺🇾", "🇻🇪",
  
  // Asia
  "🇦🇫", "🇦🇲", "🇦🇿", "🇧🇭", "🇧🇩", "🇧🇹", "🇧🇳", "🇰🇭", "🇨🇳", "🇬🇪", 
  "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇱", "🇯🇵", "🇯🇴", "🇰🇿", "🇰🇼", "🇰🇬", 
  "🇱🇦", "🇱🇧", "🇲🇾", "🇲🇻", "🇲🇳", "🇲🇲", "🇳🇵", "🇰🇵", "🇰🇷", "🇴🇲", 
  "🇵🇰", "🇵🇸", "🇵🇭", "🇶🇦", "🇸🇦", "🇸🇬", "🇱🇰", "🇸🇾", "🇹🇯", "🇹🇭", 
  "🇹🇱", "🇹🇷", "🇹🇲", "🇦🇪", "🇺🇿", "🇻🇳", "🇾🇪",
  
  // Europe
  "🇦🇱", "🇦🇩", "🇦🇹", "🇧🇾", "🇧🇪", "🇧🇦", "🇧🇬", "🇭🇷", "🇨🇾", "🇨🇿", 
  "🇩🇰", "🇪🇪", "🇫🇮", "🇫🇷", "🇩🇪", "🇬🇷", "🇭🇺", "🇮🇸", "🇮🇪", "🇮🇹", 
  "🇽🇰", "🇱🇻", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇹", "🇲🇩", "🇲🇨", "🇲🇪", "🇳🇱", 
  "🇲🇰", "🇳🇴", "🇵🇱", "🇵🇹", "🇷🇴", "🇷🇺", "🇸🇲", "🇷🇸", "🇸🇰", "🇸🇮", 
  "🇪🇸", "🇸🇪", "🇨🇭", "🇺🇦", "🇬🇧", "🇻🇦",
  
  // Oceania
  "🇦🇺", "🇫🇯", "🇰🇮", "🇲🇭", "🇫🇲", "🇳🇷", "🇳🇿", "🇵🇼", "🇵🇬", "🇼🇸", 
  "🇸🇧", "🇹🇴", "🇹🇻", "🇻🇺"
];
function setupFlags() {
    flagSelector.innerHTML = "";
    flags.sort(() => Math.random() - 0.5).forEach(flag => {
        const span = document.createElement('span');
        span.className = 'flag-item';
        span.innerText = flag;
        const selectFlag = () => {
            document.querySelectorAll('.flag-item').forEach(f => f.classList.remove('selected'));
            span.classList.add('selected');
            currentCountry = flag;
            hiddenCountry.value = flag;
            document.getElementById('flag-display').innerText = flag;
        };
        span.onclick = selectFlag;
        span.ontouchend = selectFlag;
        flagSelector.appendChild(span);
    });
}

const startPhoneBtn = document.getElementById('start-phone');
const targetZone = document.getElementById('target-zone');
const phoneProgress = document.getElementById('phone-progress');
const bowWrapper = document.getElementById('bow-wrapper');
const backspacePhoneBtn = document.getElementById('backspace-phone');
let archeryActive = false;
let bowRotation = 0;

startPhoneBtn.onclick = () => {
    phoneModal.style.display = 'flex';
    currentPhone = "";
    phoneProgress.innerText = "Phone: ";
    setupArcheryTargets();
    setupFlags();
    archeryActive = true;
};

function setupArcheryTargets() {
    targetZone.innerHTML = "";
    const numbers = "0123456789";
    for (let i = 0; i < 10; i++) {
        const num = document.createElement('div');
        num.className = 'target-number';
        num.innerText = numbers[i];
        num.style.top = (i * 10) + "%";
        num.dataset.digit = numbers[i];
        targetZone.appendChild(num);
    }
}

const handleArcheryMove = (e) => {
    if (!archeryActive) return;
    const archeryRect = document.querySelector('.archery-game').getBoundingClientRect();
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const bowRect = bowWrapper.getBoundingClientRect();
    const dx = clientX - bowRect.left;
    const dy = clientY - (bowRect.top + bowRect.height / 2);
    bowRotation = Math.atan2(dy, dx) * (180 / Math.PI);
    bowRotation = Math.max(-60, Math.min(60, bowRotation));
    bowWrapper.style.transform = `rotate(${bowRotation}deg)`;
};

phoneModal.onmousemove = handleArcheryMove;
phoneModal.ontouchmove = (e) => { e.preventDefault(); handleArcheryMove(e); };

const fireArrow = (e) => {
    if (!archeryActive) return;
    if (e.target.closest('.close-btn') || e.target.closest('.flag-section') || e.target.closest('h2') || e.target.closest('#backspace-phone')) return;

    const modalContent = phoneModal.querySelector('.modal-content');
    const modalRect = modalContent.getBoundingClientRect();
    const bowRect = bowWrapper.getBoundingClientRect();

    const arrow = document.createElement('div');
    arrow.className = 'css-arrow';

    let arrowX = bowRect.left - modalRect.left + 30;
    let arrowY = bowRect.top - modalRect.top + bowRect.height / 2;

    arrow.style.left = arrowX + 'px';
    arrow.style.top = arrowY + 'px';
    arrow.style.transform = `rotate(${bowRotation}deg)`;
    modalContent.appendChild(arrow);

    const angleRad = bowRotation * (Math.PI / 180);
    const speed = 20;
    let vx = Math.cos(angleRad) * speed;
    let vy = Math.sin(angleRad) * speed;
    const gravity = 0.3;

    const arrowAnim = setInterval(() => {
        vy += gravity; arrowX += vx; arrowY += vy;
        const currentRotation = Math.atan2(vy, vx) * (180 / Math.PI);
        arrow.style.left = arrowX + 'px';
        arrow.style.top = arrowY + 'px';
        arrow.style.transform = `rotate(${currentRotation}deg)`;

        const targets = document.querySelectorAll('.target-number');
        targets.forEach(target => {
            const tRect = target.getBoundingClientRect();
            const aRect = arrow.getBoundingClientRect();
            if (aRect.right > tRect.left && aRect.left < tRect.right && aRect.bottom > tRect.top && aRect.top < tRect.bottom) {
                currentPhone += target.dataset.digit;
                phoneProgress.innerText = "Phone: " + currentPhone;
                clearInterval(arrowAnim);
            }
        });

        if (arrowX > window.innerWidth || arrowY > window.innerHeight || arrowY < -100) {
            clearInterval(arrowAnim);
            arrow.remove();
        }
    }, 20);
};

phoneModal.onmousedown = fireArrow;
phoneModal.ontouchstart = (e) => { if (e.target === phoneModal || e.target.closest('.archery-game')) fireArrow(e); };

backspacePhoneBtn.onclick = () => {
    currentPhone = currentPhone.slice(0, -1);
    phoneProgress.innerText = "Phone: " + currentPhone;
};

document.getElementById('close-phone').onclick = () => {
    phoneModal.style.display = 'none';
    archeryActive = false;
    phoneDisplay.innerText = currentPhone || "No Number";
    hiddenPhone.value = currentPhone;
    phoneDisplay.classList.remove('placeholder');
};

const startEmailBtn = document.getElementById('start-email');
const stopSlotBtn = document.getElementById('stop-slot');
const backspaceEmailBtn = document.getElementById('backspace-email');
const emailProgress = document.getElementById('email-progress');
const reel = document.getElementById('slot-strip-1');

let slotChars = "abcdefghijklmnopqrstuvwxyz0123456789@. ";
let reelPosition = 0;
let reelSpeed = 5;
let isSpinning = false;

startEmailBtn.onclick = () => {
    emailModal.style.display = 'flex';
    currentEmail = "";
    emailProgress.innerText = "Email: ";
    setupReel();
    isSpinning = true;
    animateReel();
};

function setupReel() {
    reel.innerHTML = "";
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < slotChars.length; i++) {
            const char = document.createElement('div');
            char.className = 'slot-char';
            char.innerText = slotChars[i];
            reel.appendChild(char);
        }
    }
}

function animateReel() {
    if (emailModal.style.display === 'flex' && isSpinning) {
        reelPosition -= reelSpeed;
        const totalHeight = (slotChars.length * 5) * 120;
        if (Math.abs(reelPosition) >= totalHeight / 2) {
            reelPosition = 0;
        }
        reel.style.top = reelPosition + "px";
        requestAnimationFrame(animateReel);
    }
}

stopSlotBtn.onclick = () => {
    if (!isSpinning) {
        isSpinning = true;
        stopSlotBtn.innerText = "SELECT LETTER";
        animateReel();
        return;
    }

    isSpinning = false;

    const charHeight = 120;
    const index = Math.round((-reelPosition + 120) / charHeight);
    const snappedPosition = -(index * charHeight) + 120;

    reel.style.top = snappedPosition + "px";
    reelPosition = snappedPosition;

    const char = reel.children[index].innerText;
    if (char !== " ") {
        currentEmail += char;
        emailProgress.innerText = "Email: " + currentEmail;
    }

    stopSlotBtn.innerText = "SPIN AGAIN";
};

backspaceEmailBtn.onclick = () => {
    currentEmail = currentEmail.slice(0, -1);
    emailProgress.innerText = "Email: " + currentEmail;
};

document.querySelectorAll('.domain-btn').forEach(btn => {
    btn.onclick = () => {
        currentEmail += btn.innerText;
        emailProgress.innerText = "Email: " + currentEmail;
    };
});

document.getElementById('close-email').onclick = () => {
    emailModal.style.display = 'none';
    isSpinning = false;
    emailDisplay.innerText = currentEmail || "No Email";
    hiddenEmail.value = currentEmail;
    emailDisplay.classList.remove('placeholder');
};

const messageInput = document.getElementById('message-input');
const physicsContainer = document.getElementById('physics-canvas-container');

messageInput.oninput = (e) => {
    const char = e.data;
    if (!char) return;
    const letter = document.createElement('div');
    letter.className = 'physics-letter';
    letter.innerText = char;
    letter.style.left = (Math.random() * 80 + 10) + "%";
    letter.style.top = "20px";
    physicsContainer.appendChild(letter);
    applyPhysics(letter);
};

function applyPhysics(letter) {
    let y = 20, x = parseFloat(letter.style.left), vy = 0, vx = (Math.random() - 0.5) * 2;
    const gravity = 0.5, bounce = 0.6;
    const physAnim = setInterval(() => {
        if (letter.dataset.dragging === "true") return;
        vy += gravity; y += vy; x += vx;
        if (y > physicsContainer.offsetHeight - 25) { y = physicsContainer.offsetHeight - 25; vy = -vy * bounce; vx *= 0.9; }
        if (x < 0 || x > 95) vx = -vx;
        letter.style.top = y + "px";
        letter.style.left = x + "%";
        letter.style.transform = `rotate(${y * 2}deg)`;
    }, 20);

    const startDrag = (e) => {
        letter.dataset.dragging = "true";
        const move = (me) => {
            const r = physicsContainer.getBoundingClientRect();
            const clientX = me.touches ? me.touches[0].clientX : me.clientX;
            const clientY = me.touches ? me.touches[0].clientY : me.clientY;
            x = ((clientX - r.left) / r.width) * 100;
            y = clientY - r.top;
            letter.style.left = x + "%"; letter.style.top = y + "px";
        };
        const up = () => { letter.dataset.dragging = "false"; window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); window.removeEventListener('touchmove', move); window.removeEventListener('touchend', up); };
        window.addEventListener('mousemove', move); window.addEventListener('mouseup', up);
        window.addEventListener('touchmove', move, { passive: false }); window.addEventListener('touchend', up);
    };
    letter.onmousedown = startDrag;
    letter.ontouchstart = startDrag;
}

const submitBtn = document.getElementById('submit-btn');
const fakeBtn1 = document.getElementById('fake-submit-1');
const fakeBtn2 = document.getElementById('fake-submit-2');
const submitContainer = document.querySelector('.submit-container');

function moveBtn(btn) {
    const rect = submitContainer.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const newX = Math.random() * (rect.width - btnRect.width);
    const newY = Math.random() * (rect.height - btnRect.height);
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

[submitBtn, fakeBtn1, fakeBtn2].forEach(moveBtn);

const handleRunaway = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    [submitBtn, fakeBtn1, fakeBtn2].forEach(btn => {
        const btnRect = btn.getBoundingClientRect();
        const dx = clientX - (btnRect.left + btnRect.width / 2);
        const dy = clientY - (btnRect.top + btnRect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
            moveBtn(btn);
            if (Math.random() > 0.5) {
                const other = [submitBtn, fakeBtn1, fakeBtn2].filter(b => b !== btn)[Math.floor(Math.random() * 2)];
                const tempL = btn.style.left, tempT = btn.style.top;
                btn.style.left = other.style.left; btn.style.top = other.style.top;
                other.style.left = tempL; other.style.top = tempT;
            }
        }
    });
};

submitContainer.onmousemove = handleRunaway;
submitContainer.ontouchmove = handleRunaway;
submitContainer.ontouchstart = handleRunaway;

document.getElementById('borked-form').onsubmit = (e) => {
    e.preventDefault();
    if (!currentName || !currentPhone || !currentEmail) {
        alert("GAMES NOT FINISHED! YOU ARE NOT WORTHY!");
    } else {
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '50%';
        notification.style.left = '50%';
        notification.style.transform = 'translate(-50%, -50%)';
        notification.style.background = 'var(--primary)';
        notification.style.color = 'white';
        notification.style.padding = '2rem';
        notification.style.borderRadius = '12px';
        notification.style.zIndex = '1000';
        notification.style.textAlign = 'center';
        notification.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
        notification.innerHTML = '<h2>SUBMISSION ACCEPTED?</h2><p>Your data has been sent to the void.</p><button onclick="this.parentElement.remove()" style="margin-top:1rem;padding:0.5rem 1rem;background:black;color:white;border:none;border-radius:4px;cursor:pointer;">OK</button>';
        document.body.appendChild(notification);
    }
};
