import { questions } from './questions.js';
import { cities } from './cities.js';

let currentQuestionIndex = 0;
let answers = new Array(50).fill(null);
let userTraits = { E:0, I:0, F:0, S:0, M:0, T:0, N:0, U:0, W:0, C:0 };

const dom = {
    welcome: document.getElementById('screen-welcome'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result'),
    btnStart: document.getElementById('btn-start'),
    btnPrev: document.getElementById('btn-prev'),
    btnRestart: document.getElementById('btn-restart'),
    currentQ: document.getElementById('current-q'),
    totalQ: document.getElementById('total-q'),
    progressBar: document.getElementById('progress-bar'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container')
};

function init() {
    lucide.createIcons();
    dom.btnStart.addEventListener('click', startQuiz);
    dom.btnPrev.addEventListener('click', prevQuestion);
    dom.btnRestart.addEventListener('click', restartQuiz);
    dom.totalQ.textContent = questions.length;
}

function switchScreen(hideEl, showEl) {
    hideEl.classList.remove('active');
    setTimeout(() => {
        hideEl.classList.add('hidden');
        showEl.classList.remove('hidden');

        void showEl.offsetWidth;
        showEl.classList.add('active');
    }, 500);
}

function startQuiz() {
    switchScreen(dom.welcome, dom.quiz);
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    dom.currentQ.textContent = currentQuestionIndex + 1;
    dom.progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    dom.questionText.textContent = q.text;
    
    dom.btnPrev.classList.toggle('invisible', currentQuestionIndex === 0);
    
    dom.optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${answers[currentQuestionIndex] === idx ? 'selected' : ''}`;
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(idx, opt.trait);
        dom.optionsContainer.appendChild(btn);
    });
}

function selectOption(idx, trait) {
    answers[currentQuestionIndex] = { idx, trait };
    const btns = dom.optionsContainer.children;
    for(let i=0; i<btns.length; i++) {
        btns[i].classList.remove('selected');
    }
    btns[idx].classList.add('selected');
    
    setTimeout(() => {
        if(currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            calculateResult();
        }
    }, 300);
}

function prevQuestion() {
    if(currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function calculateResult() {

    Object.keys(userTraits).forEach(k => userTraits[k] = 0);
    
    answers.forEach(ans => {
        if(ans && ans.trait) {
            userTraits[ans.trait]++;
        }
    });
    

    let bestCity = cities[0];
    let maxScore = -1;
    
    cities.forEach(city => {
        let score = 0;
        Object.keys(city.traits).forEach(t => {
            score += city.traits[t] * userTraits[t];
        });
        if(score > maxScore) {
            maxScore = score;
            bestCity = city;
        }
    });
    
    showResult(bestCity);
}

function showResult(city) {
    document.getElementById('result-city').textContent = city.name;
    document.getElementById('result-country').textContent = city.country;
    document.getElementById('analysis-personality').textContent = city.personality;
    document.getElementById('analysis-lifestyle').textContent = city.lifestyle;
    document.getElementById('analysis-why').textContent = city.why;
    
    switchScreen(dom.quiz, dom.result);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    answers.fill(null);
    switchScreen(dom.result, dom.welcome);
}

document.addEventListener('DOMContentLoaded', init);
