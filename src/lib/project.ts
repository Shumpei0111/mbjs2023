type Website = {
  title: string;
  genre: string;
  description: string;
  stack: {
    fontEnd: string;
    infra: string;
    period: string;
    responsible: string[];
  };
  githubURL?: string;
};

export const websiteArtworks: Website[] = [
  {
    title: "百合に酔う。",
    genre: "「上伊那ぼたん、酔へる姿は百合の花」ファンサイト",
    description:
      "秋田書店マンガクロスで現在連載中の「上伊那ぼたん、酔へる姿は百合の花」を応援するために作成したファンサイト。",
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
    genre: "イベントサイト（架空）",
    description:
      "Twitter上の企画：星駆web制作企画に参加。「お化け屋敷」と簡単な設定をもとに、約1ヶ月で調査、コンセプト作成、デザイン、実装、ライティングまで独自で行う。",
    stack: {
      fontEnd: "React",
      infra: "Firebase Hosting",
      period: "1month",
      responsible: "企画、調査、デザイン、ライティング、実装".split("、"),
    },
    githubURL: "https://github.com/Shumpei0111/obake-lp",
  },
];
