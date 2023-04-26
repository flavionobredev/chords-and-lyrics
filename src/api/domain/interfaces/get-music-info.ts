export interface GetMusicUseCase {
  get(url: string, data: unknown): Promise<GetMusicUseCase.GetOutput>;
}

export namespace GetMusicUseCase {
  export type GetOutput = {
    title: string;
    artist: string;
    lyrics: string;
    fullChords: string;
    chords: string[];
    preview: {
      type: "youtube" | "spotify" | "upload";
      url: string;
      id: string;
    };
  };
}
