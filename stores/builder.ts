type State = {
  lyrics: string;
  title: string;
  artist: string;
  lyricsUrl: string;
  chords: string[];
  chordPlainText: string;
  chordsUrl: string;
  previewUrl: string;
};

export class Builder {
  private static readonly state = ref<State>({
    lyrics: "",
    title: "",
    artist: "",
    lyricsUrl: "",
    chordPlainText: "",
    chords: [],
    chordsUrl: "",
    previewUrl: "",
  });

  public static setlyrics(lyrics: string) {
    Builder.state.value.lyrics = lyrics;
  }

  public static load(data: State) {
    Builder.state.value.lyrics = data.lyrics;
    Builder.state.value.title = data.title;
    Builder.state.value.artist = data.artist;
    Builder.state.value.lyricsUrl = data.lyricsUrl;
    Builder.state.value.chords = data.chords;
    Builder.state.value.chordPlainText = data.chordPlainText;
    Builder.state.value.chordsUrl = data.chordsUrl;
    Builder.state.value.previewUrl = data.previewUrl;
  }

  public static get data() {
    return Builder.state.value;
  }
}
