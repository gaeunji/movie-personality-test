import { questions } from "../data/questions";

export type AnswerMap = {
  [questionId: string]: "A" | "B";
};

export function calculateResultCode(answers: AnswerMap): string {
  const score = {
    E: 0,
    A: 0, // 이성형 + 자극형
    F: 0,
    R: 0,
    C: 0,
  };

  for (const question of questions) {
    const userAnswer = answers[question.id];
    if (!userAnswer) continue;

    const tag = question.options[userAnswer].tag;
    score[tag]++;
  }

  // 1️⃣ 감성(E) vs 이성(A): 6문항
  const topType = score.E >= 4 ? "E" : "A";

  // 2️⃣ 환상(F) vs 현실(R): 2문항
  const midType = score.F >= 1 ? "F" : "R";

  // 3️⃣ 감정 흐름(C) vs 자극/이성형(A): 1~2문항 중 비교 (C vs 나머지 A 중 자극용)
  // - 감정 흐름(C)이 하나라도 있으면 C 우선
  // - 없다면 A 처리
  const lowType = score.C >= 1 ? "C" : "A";

  return `${topType}-${midType}-${lowType}`;
}
