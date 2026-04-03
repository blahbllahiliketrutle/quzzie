const questions = [
    { q: "Wat is het rijkste rijk/land ooit?", a: ["Romeinse Rijk", "Mongoolse Rijk", "Britse Rijk", "Verenigde Staten"], correct: 2 },
    { q: "Welk land heeft de meeste groeiende GDP (recent)?", a: ["India", "China", "Vietnam", "Bangladesh"], correct: 0 },
    { q: "Welk land heeft de grootste economie in de wereld op dit moment?", a: ["China", "Verenigde Staten", "Japan", "Duitsland"], correct: 1 },
    { q: "Welk land exporteert de meeste olie in de wereld?", a: ["Rusland", "Saoedi-Arabië", "Verenigde Staten", "Canada"], correct: 1 },
    { q: "Welk land importeert het meeste olie in de wereld?", a: ["China", "India", "Verenigde Staten", "Japan"], correct: 0 },
    { q: "Welk land heeft de sterkst groeiende economie in de wereld?", a: ["India", "Ethiopië", "Vietnam", "Filipijnen"], correct: 0 },
    { q: "Welk land heeft het minste inflatie (recent)?", a: ["Zwitserland", "Japan", "Denemarken", "Noorwegen"], correct: 0 },
    { q: "Wat is de meest waardevolle valuta?", a: ["Euro", "Amerikaanse dollar", "Koeweitse dinar", "Britse pond"], correct: 2 },
    { q: "Wat is de universeel meest geaccepteerde valuta?", a: ["Euro", "Amerikaanse dollar", "Chinese yuan", "Bitcoin"], correct: 1 },
    { q: "Welk land heeft het meeste waarde aan grondstoffen?", a: ["Rusland", "Verenigde Staten", "Saoedi-Arabië", "Canada"], correct: 0 }
];
    let currentQuestion = 0;
    let score = 0;
    let playerName = "";

    function startQuiz() {
        playerName = document.getElementById('username').value || "Bezoeker";
        document.getElementById('setup-screen').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        const q = questions[currentQuestion];
        document.getElementById('question-text').innerText = q.q;
        const optionsDiv = document.getElementById('options-container');
        optionsDiv.innerHTML = '';
        
        q.a.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.innerText = option;
            btn.onclick = () => checkAnswer(index);
            optionsDiv.appendChild(btn);
        });

        const progress = ((currentQuestion) / questions.length) * 100;
        document.getElementById('progress').style.width = progress + "%";
    }

    function checkAnswer(index) {
        if (index === questions[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('quiz-screen').style.display = 'none';
        document.getElementById('result-screen').style.display = 'block';
        document.getElementById('congrats-text').innerText = `Goed gedaan, ${playerName}!`;
        document.getElementById('final-score').innerText = `${score}/${questions.length}`;
    }