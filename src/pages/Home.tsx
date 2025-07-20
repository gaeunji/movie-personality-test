interface HomeProps {
  onStartTest: () => void;
}

export function Home({ onStartTest }: HomeProps) {
  return (
    <div className="home-container">
      <div className="home-background">
        {/* 파티클 배경 */}
        <div className="particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className={`particle particle-${i % 4}`}></div>
          ))}
        </div>

        {/* 플로팅 셰이프 */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>

        {/* 3D 오브젝트 */}
        <div className="floating-objects">
          <div className="cube cube-1">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
          <div className="cube cube-2">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
          <div className="sphere sphere-1"></div>
          <div className="sphere sphere-2"></div>
        </div>
      </div>

      <div className="home-content">
        <div className="title-section">
          <div className="title-3d">
            <h1 className="title floating-text">🎬</h1>
            <h1 className="title floating-text">영화 성향 테스트</h1>
          </div>
          <div className="subtitle-3d">
            <p className="floating-text">당신의 영화 취향을 분석하여</p>
            <p className="floating-text">맞춤형 영화를 추천해드립니다</p>
          </div>
        </div>

        <div className="test-info-3d">
          <div className="info-card">
            <div className="info-icon">📝</div>
            <p>총 9개의 간단한 질문</p>
          </div>
          <div className="info-card">
            <div className="info-icon">⏱️</div>
            <p>약 1분 소요</p>
          </div>
        </div>

        <button
          className="start-button-3d floating-button"
          onClick={onStartTest}
        >
          <span className="button-text">테스트 시작하기</span>
          <span className="button-glow"></span>
          <div className="button-particles">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="button-particle"></div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}
