import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import questions from "./data/cards.json";

export default function App() {
  const arithmetic = questions.arithmetic;
  const geometry = questions.geometry;
  const logic = questions.logic;
  const algebra = questions.algebra;

  const [card, setCard] = useState(null);
  const [isQuestion, setIsQuestion] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [shownQuestions, setShownQuestions] = useState([]);

  useEffect(() => {
    const allQuestions = [...arithmetic, ...geometry, ...logic, ...algebra];
    setRemainingQuestions(allQuestions);
    window.addEventListener('beforeunload', () => {
      speechSynthesis.cancel();
    });
  }, [arithmetic, geometry, logic, algebra]);

  

  const pickRandomCard = () => {
    speechSynthesis.cancel();

    if (remainingQuestions.length === 0) {
      setRemainingQuestions(shownQuestions);
      setShownQuestions([]);
    }

    if (remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      const randomCard = remainingQuestions[randomIndex];

      const newRemainingQuestions = [...remainingQuestions];
      newRemainingQuestions.splice(randomIndex, 1);

      setCard(randomCard);
      setRemainingQuestions(newRemainingQuestions);
      setShownQuestions([...shownQuestions, randomCard]); 
      setIsQuestion(true);
      setIsAnswer(false);

      const QUESTION_AUDIO = new SpeechSynthesisUtterance(`Pergunta de ${randomCard.type}: ${randomCard.question}`);
      speechSynthesis.speak(QUESTION_AUDIO);
    } else {
      console.warn("Nenhuma pergunta disponível no momento.");
    }
  };

  const revealAnswer = () => {
    setIsQuestion(false);
    setIsAnswer(true);

    speechSynthesis.cancel();

    const ANSWER_AUDIO = new SpeechSynthesisUtterance(`Resposta: ${card.answer}`);
    speechSynthesis.speak(ANSWER_AUDIO);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center mt-8">
        {card ? <Card card={card} /> : (
          <img
            className="w-28 animate-spin-slow"
            src="/src/images/radiation-symbol.png"
            alt="Símbolo de radiação"
            draggable="false"
          />
        )}

        {isAnswer && card && (
          <p className="font-jetbrainsmono font-bold mt-4">R: {card.answer}</p>
        )}

        {!isQuestion ? (
          <button
            onClick={pickRandomCard}
            aria-live="polite"
            className="bg-amber-900 p-2 text-zinc-200 rounded font-bold cursor-pointer mt-6 hover:bg-amber-800"
          >
            Clique aqui para gerar uma carta
          </button>
        ) : (
          <button
            onClick={revealAnswer}
            aria-live="polite"
            className="bg-amber-900 p-2 text-zinc-200 rounded font-bold cursor-pointer mt-6 hover:bg-amber-800"
          >
            Revelar resposta
          </button>
        )}
      </main>
    </>
  );
}
