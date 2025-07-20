import { results } from "../data/results";

interface ResultProps {
  resultCode: string;
  onRestart: () => void;
}

export function Result({ resultCode, onRestart }: ResultProps) {
  const result = results[resultCode];

  if (!result) {
    return (
      <div className="result-container-3d">
        <h2 className="error-title">결과를 찾을 수 없습니다</h2>
        <button className="restart-button-3d" onClick={onRestart}>
          <span className="button-text">다시 테스트하기</span>
          <span className="button-glow"></span>
        </button>
      </div>
    );
  }

  return (
    <div className="result-container-3d">
      <div className="result-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <h1 className="result-title-3d">{result.title}</h1>
      <p className="result-description-3d">{result.description}</p>

      <div className="recommended-movies-3d">
        <h3 className="movies-title">추천 영화</h3>
        <div className="movies-list-3d">
          {result.movies.map((movie, index) => (
            <div key={index} className="movie-item-3d">
              <span className="movie-icon">🎬</span>
              <span className="movie-name">{movie}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="result-actions-3d">
        <button className="restart-button-3d" onClick={onRestart}>
          <span className="button-text">다시 테스트하기</span>
          <span className="button-glow"></span>
        </button>
      </div>
    </div>
  );
}
