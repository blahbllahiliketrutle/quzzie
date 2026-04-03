  const questions = [
        { q: "Wat is het meest dichtbevolkte land groter dan 1000 km²?", a: ["Singapore", "Bangladesh", "Nederland", "Malta"], correct: 0 },
        { q: "Wat is de grootste stad in oppervlakte?", a: ["New York", "Tokyo-Yokohama", "Londen", "Parijs"], correct: 1 },
        { q: "Wat is de meest gepopuleerde stad in 2026?", a: ["Delhi", "Shanghai", "Jakarta", "Tokyo"], correct: 2 },
        { q: "Welk land heeft de langst teruggaande (continue) geschiedenis?", a: ["Egypte", "Griekenland", "China", "India"], correct: 2 },
        { q: "Welk land is het meest recent ontstaan?", a: ["Kosovo", "Zuid-Soedan", "Oost-Timor", "Montenegro"], correct: 1 },
        { q: "Wat is het gelukkigste land ter wereld (2026)?", a: ["Denemarken", "IJsland", "Finland", "Nederland"], correct: 2 },
        { q: "Welk land consumeert het meeste alcohol per inwoner?", a: ["Roemenië", "Frankrijk", "Duitsland", "Rusland"], correct: 0 },
        { q: "Welk land heeft de hoogste bevolkingsgroei (2026)?", a: ["Nigeria", "Syrië", "Central African Republic", "India"], correct: 2 },
        { q: "Wat is het minst religieuze land in de wereld?", a: ["Nederland", "Zweden", "Vietnam", "China"], correct: 2 },
        { q: "Welk land heeft het hoogste aantal etnische groepen?", a: ["Brazilië", "Verenigde Staten", "Oeganda", "Indonesië"], correct: 2 }
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