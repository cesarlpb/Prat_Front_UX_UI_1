import { useState } from 'react';
import origquestions from './data/questions';
import { Test, GlobalStyle, AnswersContainer, AnswerCard } from './Trivial.styles';
import Popup from './Popup';
import { shuffleArray } from './Aleatorio';

const questions = shuffleArray(origquestions);

const Trivial = () => {
  const [quiestionIndex, setQuiestionIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [lives, setLives] = useState(5);
  const [gameLost, setGameLost] = useState(false);

  const quest = questions[quiestionIndex];

  const handleAnswer = (answer) => {
    if (answer.isRight) {
      if (quiestionIndex === questions.length - 1) {
        setPopupVisible(true); // Ganaste
      } else {
        setQuiestionIndex(quiestionIndex + 1);
      }
    } else {
      const newLives = lives - 1;
      setLives(newLives);

      if (newLives === 0) {
        setGameLost(true); // Perdiste
      } else {
        alert('Respuesta incorrecta! Tienes una vida menos! Vuelve a intentarlo');
        setQuiestionIndex(quiestionIndex === 0 ? 0 : quiestionIndex - 1);
      }
    }
  };

  return (
    <div>
      <GlobalStyle />
      <audio src="./music/friends-cancion.mp3" autoPlay loop />
      <Test>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg' alt="Friends Logo" />

        <p>Vidas restantes: {lives}</p>

        <p>{quest.question}</p>

        <AnswersContainer>
          {quest.answers.map(answer => (
            <AnswerCard key={answer.txt}>
              <input type="radio" name="answer" onClick={() => handleAnswer(answer)} />
              {answer.txt}
            </AnswerCard>
          ))}
        </AnswersContainer>
      </Test>

      <Popup visible={popupVisible} lost={gameLost} />
    </div>
  );
};

export default Trivial;
