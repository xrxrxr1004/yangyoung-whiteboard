// 샘플 수업 데이터 — 이 파일을 복사해서 새 수업을 만드세요
// lessons/ 폴더에 .js 파일을 넣으면 자동으로 수업 목록에 등록됩니다
;(function(){ window.LESSON_LIBRARY = window.LESSON_LIBRARY || [];
window.LESSON_LIBRARY.push({
  title: "Reading Lesson 3 — Urban Renewal",
  settings: {
    defaultBg: "white",
    defaultFontSize: 32,
    revealMode: "sequential"
  },
  slides: [
    // 1. 타이틀 슬라이드
    {
      type: "title",
      title: "Urban Renewal",
      subtitle: "Reading Comprehension — 빈칸추론"
    },

    // 2. 지문 슬라이드 (주제문장 reveal 포함)
    {
      type: "passage",
      title: "Reading Passage",
      content: "Urban renewal, when thoughtfully planned, is not merely about replacing the old but about restoring a city's capacity to serve people better. It concentrates investment where infrastructure already exists, upgrading transit, utilities, and public space so daily life becomes safer, faster, and more accessible. Strategic new construction can deliver energy-efficient buildings that cut emissions while preserving the character of established neighborhoods. Rather than displacing longtime residents, inclusive renewal programs offer affordable housing guarantees, job-training partnerships, and small-business support that let existing communities share in the benefits of modernization. When done right, renewal also revitalizes the local economy: pedestrian-friendly streetscapes attract foot traffic that sustains shops and restaurants, and improved safety draws new families and businesses alike.",
      reveals: [
        { start: 0, end: 128, label: "주제문" },
        { start: 129, end: 282, label: "부연 설명 1" },
        { start: 283, end: 433, label: "부연 설명 2" },
        { start: 434, end: 620, label: "구체적 예시" }
      ],
      vocabulary: [
        { word: "renewal", meaning: "갱신, 재개발" },
        { word: "infrastructure", meaning: "기반시설" },
        { word: "accessible", meaning: "접근 가능한" },
        { word: "emissions", meaning: "배출(량)" },
        { word: "displacing", meaning: "이주시키다" },
        { word: "revitalizes", meaning: "재활성화하다" }
      ]
    },

    // 3. 문제 슬라이드
    {
      type: "questions",
      title: "Comprehension Check",
      items: [
        {
          question: "What is the main idea of the passage?",
          options: [
            "Urban renewal always leads to gentrification and displacement.",
            "Thoughtful urban renewal can improve cities while benefiting existing communities.",
            "New construction is more important than preserving old neighborhoods.",
            "Economic growth should be the primary goal of urban planning.",
            "Pedestrian-friendly streets are the most important aspect of renewal."
          ],
          answer: 1,
          explanation: "지문의 주제문에서 'restoring a city's capacity to serve people better'와 이후 inclusive renewal의 설명이 핵심"
        },
        {
          question: "According to the passage, inclusive renewal programs include all of the following EXCEPT:",
          options: [
            "affordable housing guarantees",
            "job-training partnerships",
            "tax incentives for large corporations",
            "small-business support",
            "community benefit sharing"
          ],
          answer: 2,
          explanation: "지문에 언급된 것: affordable housing, job-training, small-business support. Tax incentives for large corporations는 언급되지 않음"
        }
      ]
    },

    // 4. 문법 슬라이드
    {
      type: "grammar",
      title: "핵심 문법 — 관계대명사 vs 관계부사",
      points: [
        {
          rule: "관계대명사 (which/that) + 불완전한 문장",
          example: "Strategic new construction can deliver energy-efficient buildings [that] cut emissions.",
          highlight: "that"
        },
        {
          rule: "관계대명사 (that) — 목적격 생략 가능",
          example: "The benefits (that) existing communities share in...",
          highlight: "that"
        },
        {
          rule: "관계부사 (where) + 완전한 문장",
          example: "It concentrates investment [where] infrastructure already exists.",
          highlight: "where"
        },
        {
          rule: "전치사 + 관계대명사 = 관계부사",
          example: "the area [in which] = [where] renewal took place",
          highlight: "in which"
        }
      ]
    },

    // 5. 핵심 문장 슬라이드
    {
      type: "keysentence",
      title: "Key Sentences",
      sentences: [
        {
          en: "Urban renewal is not merely about replacing the old but about restoring a city's capacity to serve people better.",
          ko: "도시 재개발은 단순히 낡은 것을 교체하는 것이 아니라, 도시가 사람들에게 더 나은 서비스를 제공할 수 있는 능력을 회복하는 것이다.",
          grammar_note: "not merely A but B = A뿐만 아니라 B"
        },
        {
          en: "Strategic new construction can deliver energy-efficient buildings that cut emissions while preserving the character of established neighborhoods.",
          ko: "전략적인 신규 건설은 기존 지역의 특성을 보존하면서 배출량을 줄이는 에너지 효율적인 건물을 제공할 수 있다.",
          grammar_note: "that절 (관계대명사, 주격) + while ~ing (분사구문)"
        },
        {
          en: "Rather than displacing longtime residents, inclusive renewal programs offer affordable housing guarantees.",
          ko: "오랜 거주민을 이주시키는 대신, 포용적 재개발 프로그램은 저렴한 주거 보장을 제공한다.",
          grammar_note: "Rather than ~ing = ~하는 대신에"
        }
      ]
    },

    // 6. 이미지 슬라이드 (플레이스홀더)
    {
      type: "freeform",
      title: "Discussion Questions",
      html: "<div style='font-size:1.1em;line-height:2.2'><ol><li>What changes have you seen in your neighborhood recently?<br><span style='color:#7c3aed;font-size:0.85em'>최근 동네에서 어떤 변화를 보았나요?</span></li><li>Do you think urban renewal always benefits everyone? Why or why not?<br><span style='color:#7c3aed;font-size:0.85em'>도시 재개발이 항상 모든 사람에게 이익이 된다고 생각하나요?</span></li><li>What would you improve in your city if you were a planner?<br><span style='color:#7c3aed;font-size:0.85em'>도시 계획가라면 무엇을 개선하시겠습니까?</span></li></ol></div>"
    },

    // 7. 어휘 정리 슬라이드
    {
      type: "freeform",
      title: "Vocabulary Review",
      html: "<table style='width:100%;border-collapse:collapse;font-size:1em'><thead><tr style='border-bottom:3px solid #7c3aed;text-align:left'><th style='padding:12px 16px'>Word</th><th style='padding:12px 16px'>Meaning</th><th style='padding:12px 16px'>Example</th></tr></thead><tbody><tr style='border-bottom:1px solid #e2e8f0'><td style='padding:12px 16px;font-weight:700'>renewal</td><td style='padding:12px 16px'>갱신, 재개발</td><td style='padding:12px 16px;color:#475569'>urban renewal project</td></tr><tr style='border-bottom:1px solid #e2e8f0;background:#f8fafc'><td style='padding:12px 16px;font-weight:700'>infrastructure</td><td style='padding:12px 16px'>기반시설</td><td style='padding:12px 16px;color:#475569'>existing infrastructure</td></tr><tr style='border-bottom:1px solid #e2e8f0'><td style='padding:12px 16px;font-weight:700'>accessible</td><td style='padding:12px 16px'>접근 가능한</td><td style='padding:12px 16px;color:#475569'>more accessible to all</td></tr><tr style='border-bottom:1px solid #e2e8f0;background:#f8fafc'><td style='padding:12px 16px;font-weight:700'>emissions</td><td style='padding:12px 16px'>배출(량)</td><td style='padding:12px 16px;color:#475569'>cut carbon emissions</td></tr><tr style='border-bottom:1px solid #e2e8f0'><td style='padding:12px 16px;font-weight:700'>displace</td><td style='padding:12px 16px'>이주시키다</td><td style='padding:12px 16px;color:#475569'>displacing residents</td></tr><tr style='border-bottom:1px solid #e2e8f0;background:#f8fafc'><td style='padding:12px 16px;font-weight:700'>revitalize</td><td style='padding:12px 16px'>재활성화하다</td><td style='padding:12px 16px;color:#475569'>revitalizes the economy</td></tr></tbody></table>"
    },

    // 8. 자유 필기용 빈 화면
    {
      type: "blank"
    }
  ],

  // 사이드 패널 보조자료
  resources: [
    {
      label: "핵심 단어",
      type: "vocabulary",
      items: [
        { word: "renewal", meaning: "갱신, 재개발" },
        { word: "infrastructure", meaning: "기반시설" },
        { word: "accessible", meaning: "접근 가능한" },
        { word: "emissions", meaning: "배출(량)" },
        { word: "displace", meaning: "이주시키다" },
        { word: "revitalize", meaning: "재활성화하다" },
        { word: "pedestrian", meaning: "보행자" },
        { word: "sustain", meaning: "유지하다" }
      ]
    },
    {
      label: "관계사 정리",
      type: "html",
      content: "<table style='width:100%;border-collapse:collapse;font-size:0.9em'><tr style='border-bottom:2px solid #7c3aed'><th style='padding:8px;text-align:left'>구분</th><th style='padding:8px;text-align:left'>뒤에 오는 문장</th><th style='padding:8px;text-align:left'>예시</th></tr><tr style='border-bottom:1px solid #e2e8f0'><td style='padding:8px'><b>which/that</b><br>관계대명사</td><td style='padding:8px'>불완전한 문장<br>(주어 or 목적어 빠짐)</td><td style='padding:8px'>buildings <u>that</u> cut emissions</td></tr><tr style='border-bottom:1px solid #e2e8f0;background:#f8fafc'><td style='padding:8px'><b>where</b><br>관계부사</td><td style='padding:8px'>완전한 문장</td><td style='padding:8px'><u>where</u> infrastructure exists</td></tr><tr><td style='padding:8px'><b>in which</b><br>=where</td><td style='padding:8px'>완전한 문장</td><td style='padding:8px'>the area <u>in which</u> they live</td></tr></table>"
    }
  ]
}); })();
