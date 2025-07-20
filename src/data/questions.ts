export type Question = {
  id: string;
  text: string;
  options: {
    A: { text: string; tag: "E" | "A" | "F" | "R" | "C" };
    B: { text: string; tag: "E" | "A" | "F" | "R" | "C" };
  };
};

export const questions: Question[] = [
  {
    id: "A1",
    text: "영화를 볼 때 가장 중요한 건",
    options: {
      A: { text: "감정에 깊이 몰입할 수 있는 것", tag: "E" },
      B: { text: "생각할 거리를 던져주는 것", tag: "A" },
    },
  },
  {
    id: "A2",
    text: "친구가 영화 보다가 울었다고 하면?",
    options: {
      A: { text: "'진짜 감동적이었구나' 하며 같이 공감한다", tag: "E" },
      B: { text: "'어떤 장면에서 울었지?' 하며 궁금해한다", tag: "A" },
    },
  },
  {
    id: "A3",
    text: "영화관에 갈 때 나는",
    options: {
      A: { text: "혼자 조용히 집중하며 보는 걸 선호하는 편이다", tag: "E" },
      B: { text: "다른 사람과 함께 보며 감상을 나누는 게 좋다", tag: "A" },
    },
  },
  {
    id: "A4",
    text: "평소 즐겨보는 영화 장르는",
    options: {
      A: { text: "멜로, 휴먼 드라마 같은 따뜻한 이야기", tag: "E" },
      B: { text: "범죄, 미스터리, SF처럼 긴장감 있는 이야기", tag: "A" },
    },
  },
  {
    id: "B1",
    text: "나는 《해리포터 시리즈》를 전부 다 봤다",
    options: {
      A: { text: "그렇다", tag: "F" }, // Fantasy
      B: { text: "아니다", tag: "R" }, // Reality
    },
  },
  {
    id: "B2",
    text: "시간, 기억, 자아와 같은 철학적 주제가 중심이 되는 영화는",
    options: {
      A: { text: "흥미롭고 여운이 남아서 좋다", tag: "F" },
      B: { text: "너무 추상적이라 집중이 잘 안 된다", tag: "R" },
    },
  },

  {
    id: "A5",
    text: "나는 영화를 다 보고 나서",
    options: {
      A: { text: "인물의 감정선과 잔상이 계속 떠오른다", tag: "E" },
      B: { text: "테마, 메시지, 복선 회수를 분석한다", tag: "A" },
    },
  },
  {
    id: "A6",
    text: "친구가 스포일러를 하면 나는",
    options: {
      A: { text: "몰입감이 깨져서 싫어한다", tag: "E" },
      B: { text: "스토리를 더 알고 싶어한다", tag: "A" },
    },
  },
  {
    id: "C1",
    text: "지금 나에게 필요한 영화는",
    options: {
      A: { text: "마음이 편안해지고 따뜻해지는 영화", tag: "C" },
      B: { text: "강한 인상을 남기는 임팩트 있는 영화", tag: "A" },
    },
  },
];
