interface IReqBible {
  doctype: string;
  chapter: number;
  verse: number;
}

interface IResBible {
  chapter: string;
  verse: string;
  message: string;
}

export type { IReqBible, IResBible };
