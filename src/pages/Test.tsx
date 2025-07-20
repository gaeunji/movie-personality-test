import { questions } from "../data/questions";

interface TestProps {
  currentQuestionIndex: number;
  onAnswer: (answer: "A" | "B") => void;
}

export function Test({ currentQuestionIndex, onAnswer }: TestProps) {
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="test-container-3d">
      <div className="test-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="test-content">
        <div className="progress-section-3d">
          <div className="progress-container-3d">
            <div className="progress-bar-3d">
              <div
                className="progress-fill-3d"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="question-number-3d">
              {currentQuestionIndex + 1} / {questions.length}
            </div>
          </div>
        </div>

        <div className="question-container-3d">
          <div className="question-card">
            <h2 className="question-text-3d">{question.text}</h2>
            <div className="options-container-3d">
              <button
                className="option-button-3d"
                onClick={() => onAnswer("A")}
              >
                <span className="option-text">{question.options.A.text}</span>
                <span className="option-glow"></span>
              </button>
              <button
                className="option-button-3d"
                onClick={() => onAnswer("B")}
              >
                <span className="option-text">{question.options.B.text}</span>
                <span className="option-glow"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
