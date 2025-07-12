const questions = [
    // LEDs (7 distinct questions)
    { question: "What does LED stand for?", options: ["Light Emitting Device", "Low Energy Diode", "Light Emitting Diode"], correct: 2, topic: "LEDs" },
    { question: "Which part of an LED is usually longer?", options: ["The negative leg", "The positive leg", "Both are the same length"], correct: 1, topic: "LEDs" },
    { question: "Why do we need a resistor with an LED?", options: ["To make it blink", "To protect it from too much current", "To change its color"], correct: 1, topic: "LEDs" },
    { question: "What happens if an LED is connected backwards?", options: ["It lights up brighter", "It will not light up", "It changes color"], correct: 1, topic: "LEDs" },
    { question: "LEDs produce what when electricity flows through them?", options: ["Heat", "Sound", "Light"], correct: 2, topic: "LEDs" },
    { question: "Which color LED uses the least amount of power?", options: ["Red", "Blue", "Green"], correct: 0, topic: "LEDs" },
    { question: "Is an LED a type of light bulb?", options: ["Yes, exactly", "No, it's a different electronic component", "Only sometimes"], correct: 1, topic: "LEDs" },

    // Resistors (7 distinct questions)
    { question: "What is the main job of a resistor in a circuit?", options: ["To make electricity flow faster", "To limit how much electricity flows", "To store electricity"], correct: 1, topic: "Resistors" },
    { question: "How do you usually know the value of a resistor?", options: ["By its size", "By its colored bands", "By its shape"], correct: 1, topic: "Resistors" },
    { question: "What unit is used to measure resistance?", options: ["Volts", "Ohms", "Amps"], correct: 1, topic: "Resistors" },
    { question: "If a resistor has a high resistance, does it let more or less electricity through?", options: ["More", "Less", "The same amount"], correct: 1, topic: "Resistors" },
    { question: "Can a resistor be connected backwards in a simple circuit?", options: ["Yes, it still works the same", "No, it will break the circuit", "Only if it's a special resistor"], correct: 0, topic: "Resistors" },
    { question: "What happens to the total resistance if you put two resistors next to each other in a line?", options: ["It gets lower", "It gets higher", "It stays the same"], correct: 1, topic: "Resistors" },
    { question: "Resistors help prevent other parts of a circuit from getting too much:", options: ["Light", "Current", "Sound"], correct: 1, topic: "Resistors" },

    // Capacitors (6 distinct questions)
    { question: "What is the main thing a capacitor does?", options: ["It makes sounds", "It stores electrical charge", "It measures light"], correct: 1, topic: "Capacitors" },
    { question: "What happens to a capacitor after it's charged and then disconnected from power?", options: ["It stays charged for a while", "It immediately loses all charge", "It starts producing power"], correct: 0, topic: "Capacitors" },
    { question: "The unit for measuring capacitance is called what?", options: ["Watts", "Farads", "Hertz"], correct: 1, topic: "Capacitors" },
    { question: "Some capacitors have a positive and negative side. What are they called?", options: ["Unpolarized", "Polarized", "Neutral"], correct: 1, topic: "Capacitors" },
    { question: "If you connect a polarized capacitor the wrong way, what might happen?", options: ["It will work normally", "It might get damaged or explode", "It will just glow"], correct: 1, topic: "Capacitors" },
    { question: "Capacitors are like small, temporary:", options: ["Batteries", "Switches", "Wires"], correct: 0, topic: "Capacitors" },

    // Breadboards (6 distinct questions)
    { question: "What is a breadboard mainly used for in electronics?", options: ["To cut wires", "To build circuits without soldering", "To store tiny electronic parts"], correct: 1, topic: "Breadboards" },
    { question: "When you put a component into a breadboard, do you need to heat it up?", options: ["Yes, with a soldering iron", "No, you just push it in", "Only for big components"], correct: 1, topic: "Breadboards" },
    { question: "How are the holes usually connected in the middle section of a breadboard?", options: ["In long vertical columns", "In short horizontal rows", "They are all separate"], correct: 1, topic: "Breadboards" },
    { question: "What are the long strips on the sides of a breadboard typically used for?", options: ["Holding tools", "Connecting power and ground", "Making blinking lights"], correct: 1, topic: "Breadboards" },
    { question: "Is it easy to change a circuit built on a breadboard?", options: ["No, it's very difficult", "Yes, you can easily move components", "Only if you have special tools"], correct: 1, topic: "Breadboards" },
    { question: "Breadboards are good for _________ circuits.", options: ["Permanent", "Temporary", "Very large"], correct: 1, topic: "Breadboards" },

    // Jumper Wires (6 distinct questions)
    { question: "What is the purpose of jumper wires in electronics?", options: ["To make circuits look colorful", "To connect different parts of a circuit together", "To block electricity"], correct: 1, topic: "Jumper Wires" },
    { question: "Why do jumper wires come in many different colors?", options: ["To make them pretty", "To help you organize and identify connections", "So you can choose your favorite color"], correct: 1, topic: "Jumper Wires" },
    { question: "What are the three common types of jumper wires based on their ends?", options: ["Long, medium, short", "Male-to-male, female-to-female, male-to-female", "Thick, thin, regular"], correct: 1, topic: "Jumper Wires" },
    { question: "Which color jumper wire is often used for positive power connections?", options: ["Blue", "Red", "Green"], correct: 1, topic: "Jumper Wires" },
    { question: "Which color jumper wire is often used for ground (negative) connections?", options: ["Yellow", "White", "Black"], correct: 2, topic: "Jumper Wires" },
    { question: "Can you stretch a jumper wire to make it longer?", options: ["Yes, but it might break", "No, it will damage it", "It depends on the color"], correct: 1, topic: "Jumper Wires" },

    // Potentiometers (6 distinct questions)
    { question: "A potentiometer is a type of what?", options: ["Battery", "Variable resistor", "Light sensor"], correct: 1, topic: "Potentiometers" },
    { question: "What happens when you turn the knob on a potentiometer?", options: ["It changes its color", "It changes its resistance", "It makes a sound"], correct: 1, topic: "Potentiometers" },
    { question: "How many legs (pins) does a common potentiometer usually have?", options: ["Two", "Three", "Four"], correct: 1, topic: "Potentiometers" },
    { question: "What can a potentiometer be used to control in a simple circuit?", options: ["The temperature", "The brightness of an LED", "The sound of a buzzer"], correct: 1, topic: "Potentiometers" },
    { question: "What's another common name for a potentiometer?", options: ["A fixed resistor", "A pot", "A switch"], correct: 1, topic: "Potentiometers" },
    { question: "Where might you find a potentiometer in a household item?", options: ["In a light bulb", "In a volume control knob", "In a simple wire"], correct: 1, topic: "Potentiometers" },

    // Switches (6 distinct questions)
    { question: "What is the main job of a switch in a circuit?", options: ["To make light", "To start or stop the flow of electricity", "To make electricity stronger"], correct: 1, topic: "Switches" },
    { question: "When a switch is 'open', can electricity flow through it?", options: ["Yes", "No", "Only a little"], correct: 1, topic: "Switches" },
    { question: "When a switch is 'closed', can electricity flow through it?", options: ["Yes", "No", "It gets hot"], correct: 0, topic: "Switches" },
    { question: "What kind of switch stays in its new position after you press or flip it?", options: ["A momentary switch", "A toggle switch", "A push button switch"], correct: 1, topic: "Switches" },
    { question: "What kind of switch only connects the circuit while you are holding it down?", options: ["A toggle switch", "A slide switch", "A momentary switch"], correct: 2, topic: "Switches" },
    { question: "Why do we use switches in things like flashlights?", options: ["To make them heavier", "To control when the light turns on and off", "To make them waterproof"], correct: 1, topic: "Switches" },

    // Batteries (6 distinct questions)
    { question: "What does a battery provide to an electronic circuit?", options: ["Resistance", "Electrical power", "Light"], correct: 1, topic: "Batteries" },
    { question: "What are the two different ends of a battery called?", options: ["Top and bottom", "Positive and negative", "Left and right"], correct: 1, topic: "Batteries" },
    { question: "What might happen if you put a battery into a device the wrong way?", options: ["It will work even better", "The device might not work or could be damaged", "It will just make a beep sound"], correct: 1, topic: "Batteries" },
    { question: "What unit do we use to measure how much power a battery has?", options: ["Ohms", "Amps", "Volts"], correct: 2, topic: "Batteries" },
    { question: "If you connect multiple batteries in a line (series), what happens to the total voltage?", options: ["It stays the same", "It increases", "It decreases"], correct: 1, topic: "Batteries" },
    { question: "Is a rechargeable battery a type of battery you can use only once?", options: ["Yes", "No", "Only if it's very small"], correct: 1, topic: "Batteries" },

    // LDR (Light Dependent Resistor) (6 distinct questions)
    { question: "What does LDR stand for?", options: ["Low-power Data Reader", "Light-Dependent Resistor", "Long Distance Receiver"], correct: 1, topic: "LDR" },
    { question: "What happens to an LDR's resistance when it gets brighter light?", options: ["Its resistance goes up", "Its resistance goes down", "Its resistance stays the same"], correct: 1, topic: "LDR" },
    { question: "What happens to an LDR's resistance when it's in the dark?", options: ["Its resistance goes down", "Its resistance goes up", "It turns off completely"], correct: 1, topic: "LDR" },
    { question: "What can an LDR be used to make?", options: ["A device that measures temperature", "An automatic light that turns on when it gets dark", "A speaker"], correct: 1, topic: "LDR" },
    { question: "Another name for an LDR is:", options: ["Thermistor", "Photoresistor", "Diode"], correct: 1, topic: "LDR" },
    { question: "How many wires or legs does a typical LDR have?", options: ["One", "Two", "Three"], correct: 1, topic: "LDR" }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0; 
let selectedAnswer = null;
let studentName = '';
let backgroundMusic = null;
let successAudio = null;

const TOTAL_QUESTIONS = questions.length;

function startQuiz() {
    studentName = document.getElementById('studentNameInput').value.trim();
    if (studentName === '') {
        alert('Please enter your name to start the quiz!');
        return;
    }

    shuffleArray(questions);

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    
    if (backgroundMusic) {
        backgroundMusic.play().catch(e => console.error("Error playing background music:", e));
    }
    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${TOTAL_QUESTIONS}`;
    document.getElementById('question').textContent = q.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    const shuffledOptions = [...q.options]; 
    const originalCorrectIndex = q.correct; 

    const indexedOptions = shuffledOptions.map((text, idx) => ({ text, originalIdx: idx }));
    shuffleArray(indexedOptions); 

    q.shuffledCorrect = indexedOptions.findIndex(item => item.originalIdx === originalCorrectIndex);


    indexedOptions.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = item.text;
        div.onclick = () => selectOption(index);
        optionsDiv.appendChild(div);
    });
    
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('skipBtn').style.display = 'inline-block';
    selectedAnswer = null;
    
    updateProgress();
    updateCurrentScoreDisplay(); 
}

function selectOption(index) {
    selectedAnswer = index;
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === index) {
            option.classList.add('selected');
        }
    });
    document.getElementById('submitBtn').disabled = false;
}

function submitAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer or skip the question.');
        return;
    }

    const q = questions[currentQuestionIndex];
    if (selectedAnswer === q.shuffledCorrect) {
        correctAnswersCount++; 
    }
    
    goToNextQuestion();
}

function skipQuestion() {
    goToNextQuestion();
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < TOTAL_QUESTIONS) {
        loadQuestion();
    } else {
        showResults();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex) / TOTAL_QUESTIONS) * 100; 
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateCurrentScoreDisplay() {
    const currentPercentage = TOTAL_QUESTIONS > 0 ? (correctAnswersCount / TOTAL_QUESTIONS) * 100 : 0;
    document.getElementById('currentScore').textContent = `Score: ${currentPercentage.toFixed(0)}%`;
}

function showResults() {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; 
    }

    const finalPercentage = TOTAL_QUESTIONS > 0 ? (correctAnswersCount / TOTAL_QUESTIONS) * 100 : 0;
    const finalScoreElement = document.getElementById('finalScore');
    const performanceElement = document.getElementById('performance');
    const studentNameDisplay = document.getElementById('studentNameDisplay');
    const badgeContainer = document.getElementById('badgeContainer');

    studentNameDisplay.textContent = `Student: ${studentName}`;
    finalScoreElement.textContent = `${finalPercentage.toFixed(0)}%`; 
    badgeContainer.innerHTML = '';

    let badgeClass = '';
    let performanceMessage = '';

    if (finalPercentage >= 80) {
        finalScoreElement.className = 'final-score excellent';
        performanceMessage = '<h3>Excellent work! 🌟</h3><p>You have a great understanding of electronics!</p>';
        badgeClass = 'gold';
        playSuccessMusic();
    } else if (finalPercentage >= 60) {
        finalScoreElement.className = 'final-score good';
        performanceMessage = '<h3>Good job! 👍</h3><p>You\'re doing well. Keep practicing!</p>';
        badgeClass = 'silver';
    } else {
        finalScoreElement.className = 'final-score needs-improvement';
        performanceMessage = '<h3>Keep learning! 📚</h3><p>Review the topics and try again. You can do it!</p>';
        badgeClass = 'bronze';
    }

    performanceElement.innerHTML = performanceMessage;
    
    const badgeElement = document.createElement('div');
    badgeElement.className = `badge ${badgeClass}`;
    badgeElement.textContent = `${badgeClass.charAt(0).toUpperCase() + badgeClass.slice(1)} Badge`;
    badgeContainer.appendChild(badgeElement);
}

function playSuccessMusic() {
    if (successAudio) {
        successAudio.play().catch(e => console.error("Error playing success audio:", e));
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswersCount = 0; 
    selectedAnswer = null;
    studentName = '';
    document.getElementById('studentNameInput').value = '';
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('progressBar').style.width = '0%';
    
    if (successAudio) {
        successAudio.pause();
        successAudio.currentTime = 0;
    }
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }

    shuffleArray(questions);
    updateCurrentScoreDisplay(); 
}

document.addEventListener('DOMContentLoaded', function() {
    updateCurrentScoreDisplay(); 
    shuffleArray(questions);

    backgroundMusic = document.getElementById('backgroundMusic');
    successAudio = document.getElementById('successAudio');
    const volumeControl = document.getElementById('volumeControl');

    backgroundMusic.volume = volumeControl.value;
    successAudio.volume = volumeControl.value;

    volumeControl.addEventListener('input', function() {
        if (backgroundMusic) {
            backgroundMusic.volume = this.value;
        }
        if (successAudio) {
            successAudio.volume = this.value;
        }
    });

    // Set initial volume to 0 to prevent auto-play issues on some browsers/devices
    // and require user interaction to enable sound.
    successAudio.volume = 0; 
    backgroundMusic.volume = 0; 
});