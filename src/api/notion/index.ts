import { NotionStore } from "@/stores/notion";
import { MusicashClient } from "../musicash";

export class NotionAPI {
  private readonly client: MusicashClient;

  constructor() {
    this.client = MusicashClient();
    this.client.defaults.params = {
      key: import.meta.env.VITE_MUSIC_API_KEY,
    };
  }

  public async getDatabase() {
    if (!NotionStore.needsUpdate()) return NotionStore.database;
    const response = await this.client.get(`/notiondb`);
    NotionStore.setDatabase(response.data);
    return response.data;
  }

  public async getMusics(options?: any) {
    const response = await this.client.get(`/musics`, {
      params: {
        size: 10,
      },
    });
    return response.data;
  }
}
