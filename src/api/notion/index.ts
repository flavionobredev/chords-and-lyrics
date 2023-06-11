import { NotionStore } from "@/stores/notion";
import { createClient, type Client } from "../helpers/create-client";

export class NotionAPI {
  private readonly client: Client;

  constructor() {
    this.client = createClient();
    this.client.defaults.params = {
      key: import.meta.env.VITE_MUSIC_API_KEY,
    };
  }

  public async getDatabase(id: string) {
    if (!NotionStore.needsUpdate()) return NotionStore.database;
    const response = await this.client.get(`/notiondb`);
    NotionStore.setDatabase(response.data);
    return response.data;
  }

  public async getMusics(dbId: string, options?: any) {
    const response = await this.client.get(`/musics`, {
      params: {
        size: 10,
      },
    });
    return response.data;
  }
}
