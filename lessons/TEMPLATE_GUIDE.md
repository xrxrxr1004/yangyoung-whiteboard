# 화이트보드 수업 데이터 생성 가이드

## 사용 방법

1. 이 가이드와 함께 영어 지문을 Claude에게 전달
2. 생성된 `.js` 파일을 `lessons/` 폴더에 저장
3. `whiteboard.html`의 `<script src="lessons/파일명.js">` 부분을 변경
4. 브라우저에서 열기

---

## Claude에게 보낼 프롬프트 (복사해서 사용)

```
아래 영어 지문을 분석해서, 양영학원 화이트보드 앱용 수업 데이터 .js 파일을 만들어줘.

형식은 아래 JSON 구조를 따라 .js 파일로 출력해줘.
파일 시작과 끝은 아래 래퍼 형식을 반드시 사용:
```
;(function(){ window.LESSON_LIBRARY = window.LESSON_LIBRARY || [];
window.LESSON_LIBRARY.push({
  // ... 수업 데이터 ...
}); })();
```

[필수 슬라이드 구성]
1. title — 수업 제목 + 유형(빈칸추론/주제/요지 등)
2. passage — 지문 전체 + reveals(주제문/부연/예시 구분) + vocabulary(핵심 단어 6~8개)
3. questions — 독해 문제 2~3개 (5지선다, 정답 인덱스 0부터, 해설 포함)
4. grammar — 지문에 나온 핵심 문법 3~4개 (규칙 + 예문 + 하이라이트)
5. keysentence — 핵심 영어 문장 2~3개 (영문 + 한국어 해석 + 문법 노트)
6. freeform — 토론 질문 or 추가 활동 (HTML)
7. freeform — 어휘 정리표 (HTML table)
8. blank — 자유 필기용

[reveals 규칙]
- 지문을 "주제문 → 부연 설명 → 구체적 예시" 순으로 나눈다
- start/end는 content 문자열의 인덱스 (0부터 시작, 공백 포함)
- label: "주제문", "부연 설명 1", "부연 설명 2", "구체적 예시" 등
- 주의: start/end 값이 정확해야 함. 직접 세서 확인할 것

[vocabulary 규칙]
- passage 슬라이드의 vocabulary 배열에 핵심 단어 6~8개
- { word: "영단어", meaning: "한국어 뜻" }

[questions 규칙]
- answer는 0부터 시작하는 인덱스 (첫 번째 선지 = 0)
- explanation은 한국어로 간결하게

[grammar 규칙]
- 지문에서 실제 사용된 문법 포인트 추출
- highlight는 예문 안에서 강조할 단어/구문 (정확히 일치해야 함)

[지문]
(여기에 영어 지문을 붙여넣기)

[문제 유형]
(빈칸추론 / 주제 / 요지 / 제목 / 순서 / 삽입 / 어법 등)
```

---

## 데이터 구조 상세

```javascript
;(function(){ window.LESSON_LIBRARY = window.LESSON_LIBRARY || [];
window.LESSON_LIBRARY.push({
  title: "수업 제목 (예: Reading L3 — Urban Renewal)",
  chapter: "3과",          // (선택) 챕터/단원 그룹핑용. 없으면 제목에서 자동 추출

  settings: {
    defaultBg: "white",      // white | grid | lined | dark | sepia
    defaultFontSize: 32,     // 기본 글꼴 크기 (px)
    revealMode: "sequential" // sequential(R키) | individual(터치)
  },

  slides: [
    // ── 타이틀 ──
    {
      type: "title",
      title: "메인 제목",
      subtitle: "부제목 (유형명 등)"
    },

    // ── 지문 ──
    {
      type: "passage",
      title: "Reading Passage",
      content: "지문 전체를 한 줄 문자열로. 줄바꿈 없이.",
      reveals: [
        { start: 0, end: 128, label: "주제문" },
        { start: 129, end: 280, label: "부연 설명 1" },
        { start: 281, end: 430, label: "구체적 예시" }
      ],
      vocabulary: [
        { word: "renewal", meaning: "갱신" },
        { word: "infrastructure", meaning: "기반시설" }
      ]
    },

    // ── 문제 ──
    {
      type: "questions",
      title: "Comprehension Check",
      items: [
        {
          question: "문제 텍스트",
          options: ["선지①", "선지②", "선지③", "선지④", "선지⑤"],
          answer: 1,          // 0부터 시작! (1 = 두번째 선지)
          explanation: "해설 (한국어)"
        }
      ]
    },

    // ── 문법 ──
    {
      type: "grammar",
      title: "핵심 문법 — 주제",
      points: [
        {
          rule: "문법 규칙 설명",
          example: "예문 (지문에서 발췌)",
          highlight: "강조할 단어"    // 예문 안에서 정확히 일치
        }
      ]
    },

    // ── 핵심 문장 ──
    {
      type: "keysentence",
      title: "Key Sentences",
      sentences: [
        {
          en: "영어 문장",
          ko: "한국어 해석",
          grammar_note: "문법 포인트 (예: not A but B)"
        }
      ]
    },

    // ── 자유형 (토론/어휘표 등) ──
    {
      type: "freeform",
      title: "제목",
      html: "<div>HTML 내용</div>"
    },

    // ── 빈 화면 (필기용) ──
    { type: "blank" }
  ],

  // 사이드 패널 보조자료 (선택)
  resources: [
    {
      label: "단어 정리",
      type: "vocabulary",
      items: [
        { word: "영단어", meaning: "뜻" }
      ]
    },
    {
      label: "문법 요약",
      type: "html",
      content: "<table>...</table>"
    }
  ]
}); })();
```

---

## reveals 인덱스 계산 팁

`content` 문자열에서 각 구간의 시작/끝 인덱스를 정확히 계산해야 합니다.

**방법 1**: 브라우저 콘솔에서 확인
```javascript
const text = "지문 전체...";
console.log(text.indexOf("찾고 싶은 문장의 시작 단어"));
console.log(text.indexOf("구간 끝 단어") + "구간 끝 단어".length);
```

**방법 2**: Claude에게 직접 계산 요청
프롬프트에 "reveals의 start/end 인덱스를 정확히 계산해줘"를 포함

---

## 파일 교체 방법

`whiteboard.html` 안에서 이 줄을 수정:

```html
<!-- 현재 -->
<script src="lessons/sample_lesson.js"></script>

<!-- 새 수업으로 변경 -->
<script src="lessons/reading_L4_technology.js"></script>
```

또는 같은 파일명(`sample_lesson.js`)을 덮어써도 됩니다.

---

## 슬라이드 타입 요약

| type | 용도 | 필수 필드 |
|------|------|-----------|
| `title` | 표지 | title, subtitle |
| `passage` | 영어 지문 | content, reveals[], vocabulary[] |
| `questions` | 문제 | items[{question, options[], answer, explanation}] |
| `grammar` | 문법 | points[{rule, example, highlight}] |
| `keysentence` | 핵심문장 | sentences[{en, ko, grammar_note}] |
| `freeform` | 자유 HTML | html |
| `image` | 이미지 | src, caption |
| `blank` | 빈 화면 | (없음) |
