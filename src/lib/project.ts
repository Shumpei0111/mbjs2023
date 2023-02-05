type Website = {
  title: string;
  genre: string;
  description: string;
  imagePath: string;
  coverImagePath: string;
  url: string;
  stack: {
    fontEnd: string;
    infra: string;
    period: string;
    responsible: string[];
  };
  githubURL?: string;
};

type ProductType = {
  productType: string;
  productCount: number;
  productStack?: string | string[];
};

type Doujin = {
  eventName: string;
  title: string;
  genre: string;
  description: string;
  imagePath: string;
  coverImagePath: string;
  stack: ProductType | ProductType[];
  url: string;
  release: string;
};

export const websiteArtworks: Website[] = [
  {
    title: "百合に酔う。",
    genre: "「上伊那ぼたん、酔へる姿は百合の花」ファンサイト",
    description:
      "秋田書店マンガクロスで現在連載中の「上伊那ぼたん、酔へる姿は百合の花」を応援するために作成したファンサイト。",
    imagePath: "/images/project/kamiinabotan.png",
    coverImagePath: "/images/project/cover-kamiinabotan.png",
    url: "",
    stack: {
      fontEnd: "React (Next.js)",
      infra: "Vercel",
      period: "1.5months",
      responsible: "企画、デザイン、ライティング、実装".split("、"),
    },
    githubURL: "https://github.com/Shumpei0111/kamiinabotan-fansite",
  },
  {
    title: "廃校探索",
    genre: "Webサイト",
    description:
      "Twitter上の企画：星駆web制作企画に参加。「お化け屋敷」と簡単な設定をもとに、約1ヶ月で調査、コンセプト作成、デザイン、実装、ライティングまで独自で行う。",
    imagePath: "/images/project/haiko.png",
    coverImagePath: "/images/project/cover-haiko.png",
    url: "",
    stack: {
      fontEnd: "React",
      infra: "Firebase Hosting",
      period: "1month",
      responsible: "企画、調査、デザイン、ライティング、実装".split("、"),
    },
    githubURL: "https://github.com/Shumpei0111/obake-lp",
  },
  {
    title: "PRESENT RESORT POINT",
    genre: "Webサイト",
    description:
      "１週間でWebサービスを作るイベント#web1week に参加。「世界のリゾート地にあるライブカメラでリゾート気分を味わう」をコンセプトに制作。",
    imagePath: "/images/project/resort.png",
    coverImagePath: "/images/project/cover-resort.png",
    url: "",
    stack: {
      fontEnd: "React",
      infra: "Netlify",
      period: "1week",
      responsible: "企画、調査、デザイン、実装".split("、"),
    },
    githubURL: "https://github.com/Shumpei0111/resort_anthem",
  },
  {
    title: "VILLANS HOMME",
    genre: "LPサイト",
    description:
      "Twitter上の企画：架空の10代〜20代向けメンズコスメブランド「VILLAINS HOMME（ヴィランズ オム）」のLP。",
    imagePath: "/images/project/villains.png",
    coverImagePath: "/images/project/cover-villains.png",
    url: "",
    stack: {
      fontEnd: "pug / scss",
      infra: "Firebase Hosting",
      period: "1month",
      responsible: "調査、デザイン(LP、パッケージ、ロゴ)、実装".split("、"),
    },
    githubURL: "https://github.com/Shumpei0111/villains_homme",
  },
];

export const doujinArtworks: Doujin[] = [
  {
    eventName: "パンツァーガールズ8",
    title: "わけなんてないっ",
    genre: "ガールズ&パンツァー",
    description:
      "西 × ダジ本。相手を好きな気持ちに理由なんてない。そんな感情をぶつける2人の乙女の話。他、ポストカード数種と色紙",
    imagePath: "/images/project/wakenai.png",
    coverImagePath: "/images/project/cover-wakenai.png",
    stack: [
      {
        productType: "同人誌",
        productCount: 1,
        productStack:
          "CLIP STUDIO PAINT|Illustrator|Photoshop|オンデマンド印刷".split("|"),
      },
      {
        productType: "ポストカード",
        productCount: 5,
      },
      {
        productType: "色紙",
        productCount: 1,
        productStack: "色紙にアクリルガッシュ",
      },
    ],
    url: "https://www.pixiv.net/artworks/59232048",
    release: "2016.10.02",
  },
  {
    eventName: "ぱんっあ！ふぉー！7",
    title: "西ダジがデートする話",
    genre: "ガールズ&パンツァー",
    description:
      "西 × ダジ本。『ガールズ＆パンツァー 劇場版』後、親密になった彼女らのデートの様子を描きました。",
    imagePath: "/images/project/date.png",
    coverImagePath: "/images/project/cover-date.png",
    stack: {
      productType: "同人誌",
      productCount: 1,
      productStack:
        "CLIP STUDIO PAINT|Illustrator|Photoshop|オンデマンド印刷".split("|"),
    },
    url: "https://www.pixiv.net/artworks/57371698",
    release: "2016.06.12",
  },
  {
    eventName: "海ゆかば4",
    title: "鎮守府をPRセヨ!",
    genre: "艦隊これくしょん−艦これ−",
    description:
      "大本営から「鎮守府をPRセヨ」という命令が与えられた鎮守府。秘書艦の鳥海に押し付けたら、他の艦娘の協力もあって無事PR動画！...と思われたが。",
    imagePath: "/images/project/kancolle.png",
    coverImagePath: "/images/project/cover-kancolle.png",
    stack: {
      productType: "同人誌",
      productCount: 1,
      productStack:
        "CLIP STUDIO PAINT|Illustrator|Photoshop|オフセット印刷".split("|"),
    },
    url: "https://www.pixiv.net/artworks/55104947",
    release: "2016.02.05",
  },
];
