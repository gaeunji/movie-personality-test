import { useState } from "react";
import "./App.css";
import { questions } from "./data/questions";
import { calculateResultCode } from "./utils/resultCalculator";
import type { AnswerMap } from "./utils/resultCalculator";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { Result } from "./pages/Result";

type Page = "home" | "test" | "result";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [resultCode, setResultCode] = useState<string>("");

  const handleStartTest = () => {
    setCurrentPage("test");
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (answer: "A" | "B") => {
    const question = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 모든 질문 완료
      const finalResultCode = calculateResultCode(newAnswers);
      setResultCode(finalResultCode);
      setCurrentPage("result");
    }
  };

  const handleRestart = () => {
    setCurrentPage("home");
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResultCode("");
  };

  return (
    <div className="app">
      {currentPage === "home" && <Home onStartTest={handleStartTest} />}
      {currentPage === "test" && (
        <Test
          currentQuestionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      )}
      {currentPage === "result" && (
        <Result resultCode={resultCode} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
