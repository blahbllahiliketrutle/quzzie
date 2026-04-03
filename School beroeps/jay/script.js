const questions = [
    { q: "Welk land heeft het grootste militaire budget?", a: ["China", "Verenigde Staten", "Rusland", "India"], correct: 1 },
    { q: "Welk land heeft de meeste nucleaire wapens?", a: ["Verenigde Staten", "China", "Rusland", "Frankrijk"], correct: 2 },
    { q: "Wie was de dodelijkste sniper ooit?", a: ["Chris Kyle", "Simo Häyhä", "Vasily Zaytsev", "Lyudmila Pavlichenko"], correct: 1 },
    { q: "Wat is de langste sniper kill ooit?", a: ["2.100 m", "2.800 m", "3.540 m", "4.200 m"], correct: 2 },
    { q: "Welk land heeft het grootste actieve leger?", a: ["India", "Verenigde Staten", "China", "Noord-Korea"], correct: 2 },
    { q: "Welk land had het grootste leger ooit (totaal gemobiliseerd)?", a: ["Duitsland", "Sovjet-Unie", "China", "Verenigde Staten"], correct: 1 },
    { q: "Welk land begon de Tweede Wereldoorlog?", a: ["Japan", "Italië", "Duitsland", "Rusland"], correct: 2 },
    { q: "Welke oorlog staat bekend als de bloedigste in de geschiedenis?", a: ["Eerste Wereldoorlog", "Tweede Wereldoorlog", "Vietnamoorlog", "Napoleontische oorlogen"], correct: 1 },
    { q: "Welk land produceerde de meeste tanks in WOII?", a: ["Duitsland", "Verenigde Staten", "Sovjet-Unie", "Verenigd Koninkrijk"], correct: 2 },
    { q: "Welke eenheid staat bekend als elite special forces van de VS?", a: ["Navy SEALs", "Green Berets", "Delta Force", "Rangers"], correct: 0 },
    { q: "Welk land heeft verplicht militaire dienst voor de meeste mannen?", a: ["Duitsland", "Zuid-Korea", "Canada", "Spanje"], correct: 1 },
    { q: "Wat is de sterkste militaire alliantie ter wereld?", a: ["EU", "NAVO", "ASEAN", "BRICS"], correct: 1 }
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