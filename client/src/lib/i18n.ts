export type Language = 'zh-CN' | 'zh-TW' | 'en' | 'ko' | 'ja';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    apps: string;
    about: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    exploreApps: string;
    learnMore: string;
    stats: {
      apps: string;
      launching: string;
      languages: string;
    };
  };
  
  // Apps Section
  apps: {
    title: string;
    description: string;
    status: {
      launching: string;
      development: string;
      planned: string;
    };
    progress: string;
    platforms: {
      ios: string;
      android: string;
      comingSoon: string;
      planned: string;
      future: string;
    };
    list: {
      subscription: {
        name: string;
        description: string;
      };
      showTracker: {
        name: string;
        description: string;
      };
      fitness: {
        name: string;
        description: string;
      };
      sideBusiness: {
        name: string;
        description: string;
      };
      timeGoal: {
        name: string;
        description: string;
      };
      asset: {
        name: string;
        description: string;
      };
    };
  };
  
  // About Section
  about: {
    title: string;
    description: string;
    features: {
      innovation: {
        title: string;
        description: string;
      };
      userFirst: {
        title: string;
        description: string;
      };
      fastIteration: {
        title: string;
        description: string;
      };
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    description: string;
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      subjects: {
        business: string;
        support: string;
        suggestion: string;
        other: string;
      };
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
    };
    info: {
      email: {
        title: string;
        subtitle: string;
      };
      hours: {
        title: string;
        time: string;
        timezone: string;
      };
      social: {
        title: string;
        subtitle: string;
      };
    };
  };
  
  // Footer
  footer: {
    description: string;
    products: string;
    company: string;
    support: string;
    links: {
      about: string;
      team: string;
      careers: string;
      news: string;
      investors: string;
      help: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translation> = {
  'zh-CN': {
    nav: {
      home: '首页',
      apps: 'Apps',
      about: '关于我们',
      contact: '联系我们',
    },
    hero: {
      badge: '独立开发者 • 让生活更有趣',
      title: '创造有趣的',
      subtitle: '独立应用',
      description: '我们相信，优秀的应用不仅功能强大，更应该充满乐趣。ZiraiX 专注于开发让生活更美好、更有趣的独立应用，让每一次使用都成为愉悦的体验。',
      exploreApps: '探索我们的应用',
      learnMore: '了解更多',
      stats: {
        apps: '应用项目',
        launching: '即将上线',
        languages: '规划开发中',
      },
    },
    apps: {
      title: 'Apps作品集',
      description: '从创意到实现，每个应用都承载着我们对用户体验的极致追求。查看我们正在开发的精彩项目！',
      status: {
        launching: '即将上线',
        development: '开发中',
        planned: '规划中',
      },
      progress: '开发进度',
      platforms: {
        ios: 'iOS',
        android: 'Android',
        comingSoon: '即将支持',
        planned: '计划中',
        future: '未来版本',
      },
      list: {
        subscription: {
          name: '订阅管理助手',
          description: '智能管理您的所有订阅服务，避免不必要的支出，让每一分钱都花得明明白白。',
        },
        showTracker: {
          name: '追剧进度管家',
          description: '再也不用担心忘记看到第几集！智能记录您的观影进度，发现更多精彩内容。',
        },
        fitness: {
          name: '运动管理专家',
          description: '个性化运动计划，智能健康监测，让运动成为生活中最期待的事情。',
        },
        sideBusiness: {
          name: '副业&独立开发管理',
          description: '专为独立开发者打造的项目管理工具，从创意到上线，全程陪伴您的创业之路。',
        },
        timeGoal: {
          name: '时间目标管理师',
          description: '科学的时间管理方法，清晰的目标追踪，让每一天都充满成就感和方向感。',
        },
        asset: {
          name: '资产管理专家',
          description: '智能资产配置建议，直观的财务报表，让您的财富管理变得简单而高效。',
        },
      },
    },
    about: {
      title: '关于 ZiraiX',
      description: '我们是一群充满激情的独立开发者，相信技术可以让生活变得更美好、更有趣。每一个应用的背后，都承载着我们对用户体验的极致追求。',
      features: {
        innovation: {
          title: '创新设计理念',
          description: '每个应用都经过精心设计，将复杂的功能包装成简单直观的用户体验。',
        },
        userFirst: {
          title: '用户至上',
          description: '我们倾听用户的声音，持续改进产品，确保每个功能都有实际价值。',
        },
        fastIteration: {
          title: '快速迭代',
          description: '敏捷开发，快速响应用户需求，让好想法尽快变成现实。',
        },
      },
    },
    contact: {
      title: '联系我们',
      description: '有好的想法或建议？想要合作？或者只是想打个招呼？我们很乐意听到您的声音！',
      form: {
        title: '发送消息',
        name: '姓名',
        email: '邮箱',
        subject: '主题',
        message: '消息',
        submit: '发送消息',
        subjects: {
          business: '商务合作',
          support: '技术支持',
          suggestion: '产品建议',
          other: '其他',
        },
        placeholders: {
          name: '您的姓名',
          email: '您的邮箱',
          message: '请详细描述您的需求或建议...',
        },
      },
      info: {
        email: {
          title: '邮箱联系',
          subtitle: '我们通常在24小时内回复邮件',
        },
        hours: {
          title: '工作时间',
          time: '周一至周五 9:00-18:00',
          timezone: '北京时间 (UTC+8)',
        },
        social: {
          title: '社交媒体',
          subtitle: '关注我们的最新动态',
        },
      },
    },
    footer: {
      description: '创造有趣的独立应用，让生活变得更美好、更有趣。',
      products: '我们的产品',
      company: '公司',
      support: '条款',
      links: {
        about: '关于我们',
        team: '团队介绍',
        careers: '加入我们',
        news: '新闻动态',
        investors: '投资者关系',
        help: '帮助中心',
        privacy: '隐私政策',
        terms: '服务条款',
        cookies: 'Cookie 政策',
      },
      copyright: '© 2025 ZiraiX. 保留所有权利。',
    },
  },
  'zh-TW': {
    nav: {
      home: '首頁',
      apps: '應用作品',
      about: '關於我們',
      contact: '聯絡我們',
    },
    hero: {
      badge: '獨立開發者 • 讓生活更有趣',
      title: '創造有趣的',
      subtitle: '獨立應用',
      description: '我們相信，優秀的應用不僅功能強大，更應該充滿樂趣。ZiraiX 專注於開發讓生活更美好、更有趣的獨立應用，讓每一次使用都成為愉悅的體驗。',
      exploreApps: '探索我們的應用',
      learnMore: '了解更多',
      stats: {
        apps: '應用項目',
        launching: '即將上線',
        languages: '開發語言',
      },
    },
    apps: {
      title: '我們的應用作品集',
      description: '從創意到實現，每個應用都承載著我們對用戶體驗的極致追求。查看我們正在開發的精彩項目！',
      status: {
        launching: '即將上線',
        development: '開發中',
        planned: '規劃中',
      },
      progress: '開發進度',
      platforms: {
        ios: 'iOS',
        android: 'Android',
        comingSoon: '即將支援',
        planned: '計劃中',
        future: '未來版本',
      },
      list: {
        subscription: {
          name: '訂閱管理助手',
          description: '智能管理您的所有訂閱服務，避免不必要的支出，讓每一分錢都花得明明白白。',
        },
        showTracker: {
          name: '追劇進度管家',
          description: '再也不用擔心忘記看到第幾集！智能記錄您的觀影進度，發現更多精彩內容。',
        },
        fitness: {
          name: '運動管理專家',
          description: '個性化運動計劃，智能健康監測，讓運動成為生活中最期待的事情。',
        },
        sideBusiness: {
          name: '副業獨立開發管理',
          description: '專為獨立開發者打造的項目管理工具，從創意到上線，全程陪伴您的創業之路。',
        },
        timeGoal: {
          name: '時間目標管理師',
          description: '科學的時間管理方法，清晰的目標追蹤，讓每一天都充滿成就感和方向感。',
        },
        asset: {
          name: '資產管理專家',
          description: '智能資產配置建議，直觀的財務報表，讓您的財富管理變得簡單而高效。',
        },
      },
    },
    about: {
      title: '關於 ZiraiX',
      description: '我們是一群充滿激情的獨立開發者，相信技術可以讓生活變得更美好、更有趣。每一個應用的背後，都承載著我們對用戶體驗的極致追求。',
      features: {
        innovation: {
          title: '創新設計理念',
          description: '每個應用都經過精心設計，將複雜的功能包裝成簡單直觀的用戶體驗。',
        },
        userFirst: {
          title: '用戶至上',
          description: '我們傾聽用戶的聲音，持續改進產品，確保每個功能都有實際價值。',
        },
        fastIteration: {
          title: '快速迭代',
          description: '敏捷開發，快速響應用戶需求，讓好想法盡快變成現實。',
        },
      },
    },
    contact: {
      title: '聯絡我們',
      description: '有好的想法或建議？想要合作？或者只是想打個招呼？我們很樂意聽到您的聲音！',
      form: {
        title: '發送消息',
        name: '姓名',
        email: '信箱',
        subject: '主題',
        message: '消息',
        submit: '發送消息',
        subjects: {
          business: '商務合作',
          support: '技術支援',
          suggestion: '產品建議',
          other: '其他',
        },
        placeholders: {
          name: '您的姓名',
          email: '您的信箱',
          message: '請詳細描述您的需求或建議...',
        },
      },
      info: {
        email: {
          title: '信箱聯絡',
          subtitle: '我們通常在24小時內回覆郵件',
        },
        hours: {
          title: '工作時間',
          time: '週一至週五 9:00-18:00',
          timezone: '台北時間 (UTC+8)',
        },
        social: {
          title: '社交媒體',
          subtitle: '關注我們的最新動態',
        },
      },
    },
    footer: {
      description: '創造有趣的獨立應用，讓生活變得更美好、更有趣。',
      products: '我們的產品',
      company: '公司',
      support: '支援',
      links: {
        about: '關於我們',
        team: '團隊介紹',
        careers: '加入我們',
        news: '新聞動態',
        investors: '投資者關係',
        help: '幫助中心',
        privacy: '隱私政策',
        terms: '服務條款',
        cookies: 'Cookie 政策',
      },
      copyright: '© 2025 ZiraiX. 保留所有權利。',
    },
  },
  en: {
    nav: {
      home: 'Home',
      apps: 'Apps',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'Indie Developers • Making Life Fun',
      title: 'Creating Fun',
      subtitle: 'Independent Apps',
      description: 'We believe great apps should be both powerful and delightful. ZiraiX focuses on developing independent apps that make life better and more enjoyable, turning every interaction into a pleasant experience.',
      exploreApps: 'Explore Our Apps',
      learnMore: 'Learn More',
      stats: {
        apps: 'App Projects',
        launching: 'Launching Soon',
        languages: 'Languages',
      },
    },
    apps: {
      title: 'Our App Portfolio',
      description: 'From concept to reality, each app embodies our pursuit of exceptional user experience. Discover the exciting projects we\'re working on!',
      status: {
        launching: 'Launching Soon',
        development: 'In Development',
        planned: 'Planned',
      },
      progress: 'Development Progress',
      platforms: {
        ios: 'iOS',
        android: 'Android',
        comingSoon: 'Coming Soon',
        planned: 'Planned',
        future: 'Future Release',
      },
      list: {
        subscription: {
          name: 'Subscription Manager',
          description: 'Intelligently manage all your subscription services, avoid unnecessary expenses, and know exactly where every penny goes.',
        },
        showTracker: {
          name: 'Show Progress Tracker',
          description: 'Never forget which episode you\'re on! Smart tracking of your viewing progress and discover more amazing content.',
        },
        fitness: {
          name: 'Fitness Manager',
          description: 'Personalized workout plans and smart health monitoring, making exercise the most anticipated part of your day.',
        },
        sideBusiness: {
          name: 'Side Business & Indie Dev Manager',
          description: 'Project management tool designed for indie developers, accompanying your entrepreneurial journey from idea to launch.',
        },
        timeGoal: {
          name: 'Time & Goal Manager',
          description: 'Scientific time management methods and clear goal tracking, making every day filled with achievement and direction.',
        },
        asset: {
          name: 'Asset Manager',
          description: 'Smart asset allocation suggestions and intuitive financial reports, making wealth management simple and efficient.',
        },
      },
    },
    about: {
      title: 'About ZiraiX',
      description: 'We are a group of passionate indie developers who believe technology can make life better and more fun. Behind every app is our relentless pursuit of exceptional user experience.',
      features: {
        innovation: {
          title: 'Innovative Design Philosophy',
          description: 'Every app is carefully designed to wrap complex functionality into simple, intuitive user experiences.',
        },
        userFirst: {
          title: 'User-First Approach',
          description: 'We listen to our users, continuously improve our products, and ensure every feature has real value.',
        },
        fastIteration: {
          title: 'Rapid Iteration',
          description: 'Agile development and quick response to user needs, turning great ideas into reality as fast as possible.',
        },
      },
    },
    contact: {
      title: 'Contact Us',
      description: 'Have a great idea or suggestion? Want to collaborate? Or just want to say hello? We\'d love to hear from you!',
      form: {
        title: 'Send Message',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        subjects: {
          business: 'Business Cooperation',
          support: 'Technical Support',
          suggestion: 'Product Suggestion',
          other: 'Other',
        },
        placeholders: {
          name: 'Your Name',
          email: 'Your Email',
          message: 'Please describe your needs or suggestions in detail...',
        },
      },
      info: {
        email: {
          title: 'Email Contact',
          subtitle: 'We usually reply within 24 hours',
        },
        hours: {
          title: 'Business Hours',
          time: 'Monday to Friday 9:00-18:00',
          timezone: 'Beijing Time (UTC+8)',
        },
        social: {
          title: 'Social Media',
          subtitle: 'Follow our latest updates',
        },
      },
    },
    footer: {
      description: 'Creating fun independent apps to make life better and more enjoyable.',
      products: 'Our Products',
      company: 'Company',
      support: 'Support',
      links: {
        about: 'About Us',
        team: 'Our Team',
        careers: 'Careers',
        news: 'News',
        investors: 'Investors',
        help: 'Help Center',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
      },
      copyright: '© 2025 ZiraiX. All rights reserved.',
    },
  },
  ko: {
    nav: {
      home: '홈',
      apps: '앱 포트폴리오',
      about: '회사 소개',
      contact: '문의하기',
    },
    hero: {
      badge: '인디 개발자 • 삶을 더 재미있게',
      title: '재미있는',
      subtitle: '독립 앱 만들기',
      description: '우리는 훌륭한 앱이 강력할 뿐만 아니라 즐거움을 주어야 한다고 믿습니다. ZiraiX는 삶을 더 나은 것으로 만들고 더 즐겁게 하는 독립 앱 개발에 집중하여 모든 상호 작용을 즐거운 경험으로 만듭니다.',
      exploreApps: '앱 살펴보기',
      learnMore: '더 알아보기',
      stats: {
        apps: '앱 프로젝트',
        launching: '출시 예정',
        languages: '개발 언어',
      },
    },
    apps: {
      title: '우리의 앱 포트폴리오',
      description: '개념에서 현실까지, 각 앱은 뛰어난 사용자 경험에 대한 우리의 추구를 구현합니다. 우리가 작업하고 있는 흥미진진한 프로젝트를 발견해보세요!',
      status: {
        launching: '출시 예정',
        development: '개발 중',
        planned: '계획됨',
      },
      progress: '개발 진행률',
      platforms: {
        ios: 'iOS',
        android: 'Android',
        comingSoon: '곧 출시',
        planned: '계획됨',
        future: '향후 릴리스',
      },
      list: {
        subscription: {
          name: '구독 관리자',
          description: '모든 구독 서비스를 지능적으로 관리하고, 불필요한 지출을 피하며, 모든 돈의 흐름을 정확히 파악하세요.',
        },
        showTracker: {
          name: '시청 진행률 추적기',
          description: '몇 번째 에피소드인지 잊지 마세요! 시청 진행률을 스마트하게 추적하고 더 많은 놀라운 콘텐츠를 발견하세요.',
        },
        fitness: {
          name: '피트니스 매니저',
          description: '개인화된 운동 계획과 스마트 건강 모니터링으로 운동을 하루 중 가장 기대되는 시간으로 만드세요.',
        },
        sideBusiness: {
          name: '사이드 비즈니스 & 인디 개발 매니저',
          description: '인디 개발자를 위해 설계된 프로젝트 관리 도구로, 아이디어에서 출시까지 창업 여정을 함께합니다.',
        },
        timeGoal: {
          name: '시간 및 목표 관리자',
          description: '과학적인 시간 관리 방법과 명확한 목표 추적으로 매일을 성취감과 방향성으로 가득 채우세요.',
        },
        asset: {
          name: '자산 관리자',
          description: '스마트 자산 배분 제안과 직관적인 재무 보고서로 자산 관리를 간단하고 효율적으로 만드세요.',
        },
      },
    },
    about: {
      title: 'ZiraiX 소개',
      description: '우리는 기술이 삶을 더 나은 것으로 만들고 더 재미있게 할 수 있다고 믿는 열정적인 인디 개발자 그룹입니다. 모든 앱 뒤에는 뛰어난 사용자 경험에 대한 우리의 끊임없는 추구가 있습니다.',
      features: {
        innovation: {
          title: '혁신적인 디자인 철학',
          description: '모든 앱은 복잡한 기능을 간단하고 직관적인 사용자 경험으로 포장하도록 신중하게 설계됩니다.',
        },
        userFirst: {
          title: '사용자 우선 접근법',
          description: '우리는 사용자의 말에 귀 기울이고, 제품을 지속적으로 개선하며, 모든 기능이 실제 가치를 갖도록 합니다.',
        },
        fastIteration: {
          title: '빠른 반복',
          description: '애자일 개발과 사용자 요구에 대한 빠른 대응으로 훌륭한 아이디어를 가능한 한 빨리 현실로 만듭니다.',
        },
      },
    },
    contact: {
      title: '문의하기',
      description: '좋은 아이디어나 제안이 있으신가요? 협업을 원하시나요? 아니면 단순히 인사하고 싶으신가요? 여러분의 의견을 듣고 싶습니다!',
      form: {
        title: '메시지 보내기',
        name: '이름',
        email: '이메일',
        subject: '주제',
        message: '메시지',
        submit: '메시지 보내기',
        subjects: {
          business: '비즈니스 협력',
          support: '기술 지원',
          suggestion: '제품 제안',
          other: '기타',
        },
        placeholders: {
          name: '성함',
          email: '이메일 주소',
          message: '요구사항이나 제안을 자세히 설명해 주세요...',
        },
      },
      info: {
        email: {
          title: '이메일 연락',
          subtitle: '보통 24시간 이내에 답변드립니다',
        },
        hours: {
          title: '업무 시간',
          time: '월요일~금요일 9:00-18:00',
          timezone: '베이징 시간 (UTC+8)',
        },
        social: {
          title: '소셜 미디어',
          subtitle: '최신 업데이트를 팔로우하세요',
        },
      },
    },
    footer: {
      description: '삶을 더 나은 것으로 만들고 더 즐겁게 하는 재미있는 독립 앱을 만듭니다.',
      products: '우리의 제품',
      company: '회사',
      support: '지원',
      links: {
        about: '회사 소개',
        team: '우리 팀',
        careers: '채용',
        news: '뉴스',
        investors: '투자자',
        help: '도움말 센터',
        privacy: '개인정보 처리방침',
        terms: '서비스 약관',
        cookies: '쿠키 정책',
      },
      copyright: '© 2025 ZiraiX. 모든 권리 보유.',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      apps: 'アプリ',
      about: '会社概要',
      contact: 'お問い合わせ',
    },
    hero: {
      badge: 'インディー開発者 • 人生をもっと楽しく',
      title: '楽しい',
      subtitle: '独立アプリを作る',
      description: '優れたアプリは強力であると同時に楽しいものであるべきだと私たちは信じています。ZiraiXは、人生をより良く、より楽しくする独立アプリの開発に焦点を当て、すべてのインタラクションを楽しい体験にします。',
      exploreApps: 'アプリを見る',
      learnMore: '詳しく見る',
      stats: {
        apps: 'アプリプロジェクト',
        launching: 'リリース予定',
        languages: '開発言語',
      },
    },
    apps: {
      title: '私たちのアプリポートフォリオ',
      description: 'コンセプトから現実まで、各アプリは優れたユーザーエクスペリエンスへの私たちの追求を体現しています。私たちが取り組んでいるエキサイティングなプロジェクトを発見してください！',
      status: {
        launching: 'リリース予定',
        development: '開発中',
        planned: '計画中',
      },
      progress: '開発進捗',
      platforms: {
        ios: 'iOS',
        android: 'Android',
        comingSoon: '近日公開',
        planned: '計画中',
        future: '将来のリリース',
      },
      list: {
        subscription: {
          name: 'サブスクリプション管理',
          description: 'すべてのサブスクリプションサービスを賢く管理し、不要な支出を避け、すべてのお金の流れを正確に把握します。',
        },
        showTracker: {
          name: '視聴進行管理',
          description: '何話まで見たか忘れることはもうありません！視聴進行をスマートに追跡し、より多くの素晴らしいコンテンツを発見します。',
        },
        fitness: {
          name: 'フィットネス管理',
          description: 'パーソナライズされたワークアウトプランとスマートなヘルスモニタリングで、運動を一日で最も楽しみな時間にします。',
        },
        sideBusiness: {
          name: 'サイドビジネス＆インディー開発管理',
          description: 'インディー開発者向けに設計されたプロジェクト管理ツールで、アイデアからローンチまで、起業の旅路に寄り添います。',
        },
        timeGoal: {
          name: '時間・目標管理',
          description: '科学的な時間管理方法と明確な目標追跡で、毎日を達成感と方向性で満たします。',
        },
        asset: {
          name: '資産管理',
          description: 'スマートな資産配分提案と直感的な財務レポートで、資産管理をシンプルで効率的にします。',
        },
      },
    },
    about: {
      title: 'ZiraiXについて',
      description: '私たちは、テクノロジーが人生をより良く、より楽しくできると信じる情熱的なインディー開発者のグループです。すべてのアプリの背後には、優れたユーザーエクスペリエンスに対する私たちの絶え間ない追求があります。',
      features: {
        innovation: {
          title: '革新的なデザイン哲学',
          description: 'すべてのアプリは、複雑な機能をシンプルで直感的なユーザーエクスペリエンスにラップするよう慎重に設計されています。',
        },
        userFirst: {
          title: 'ユーザーファーストアプローチ',
          description: '私たちはユーザーの声に耳を傾け、製品を継続的に改善し、すべての機能が実際の価値を持つことを確保します。',
        },
        fastIteration: {
          title: '迅速な反復',
          description: 'アジャイル開発とユーザーニーズへの迅速な対応により、素晴らしいアイデアを可能な限り早く現実にします。',
        },
      },
    },
    contact: {
      title: 'お問い合わせ',
      description: '素晴らしいアイデアや提案がありますか？コラボレーションをお考えですか？それとも単にご挨拶したいですか？ぜひお聞かせください！',
      form: {
        title: 'メッセージを送る',
        name: '名前',
        email: 'メール',
        subject: '件名',
        message: 'メッセージ',
        submit: 'メッセージを送る',
        subjects: {
          business: 'ビジネス協力',
          support: 'テクニカルサポート',
          suggestion: '製品提案',
          other: 'その他',
        },
        placeholders: {
          name: 'お名前',
          email: 'メールアドレス',
          message: 'ご要望や提案を詳しくお聞かせください...',
        },
      },
      info: {
        email: {
          title: 'メール連絡',
          subtitle: '通常24時間以内に返信いたします',
        },
        hours: {
          title: '営業時間',
          time: '月曜日〜金曜日 9:00-18:00',
          timezone: '北京時間 (UTC+8)',
        },
        social: {
          title: 'ソーシャルメディア',
          subtitle: '最新情報をフォローしてください',
        },
      },
    },
    footer: {
      description: '人生をより良く、より楽しくする楽しい独立アプリを作っています。',
      products: '私たちの製品',
      company: '会社',
      support: 'サポート',
      links: {
        about: '会社概要',
        team: 'チーム',
        careers: '採用情報',
        news: 'ニュース',
        investors: '投資家向け情報',
        help: 'ヘルプセンター',
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
        cookies: 'Cookieポリシー',
      },
      copyright: '© 2025 ZiraiX. 無断転載を禁じます。',
    },
  },
};

export const languageNames: Record<Language, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  en: 'English',
  ko: '한국어',
  ja: '日本語',
};

export const languageFlags: Record<Language, string> = {
  'zh-CN': '🇨🇳',
  'zh-TW': '🇭🇰',
  en: '🇺🇸',
  ko: '🇰🇷',
  ja: '🇯🇵',
};
