import { ref } from "vue";
import type { NotionObject } from "./types";
import { LocalStorageAPI } from "@/api/localstorage";

type State = {
  database?: NotionObject;
  lastUpdated?: Date;
};

const TIME_TO_UPDATE = 1000 * 60 * 5; // 5 minutes

const parseDate = (value: any) => (value ? new Date(value) : value);

export class NotionStore {
  private static readonly state = ref<State>({
    database: LocalStorageAPI.get("db-info"),
    lastUpdated: parseDate(LocalStorageAPI.get("db-last-update")),
  });

  public static setDatabase(database: NotionObject) {
    NotionStore.state.value.database = database;
    NotionStore.state.value.lastUpdated = new Date();
    LocalStorageAPI.set("db-info", database);
    LocalStorageAPI.set("db-last-update", NotionStore.state.value.lastUpdated);
  }

  public static get database() {
    return NotionStore.state.value.database;
  }

  public static needsUpdate() {
    if (!NotionStore.state.value.lastUpdated) return true;
    const now = new Date();
    const diff = now.getTime() - NotionStore.state.value.lastUpdated.getTime();
    return diff > TIME_TO_UPDATE;
  }
}
