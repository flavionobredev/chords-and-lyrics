const PREFIX = "app_";
export class LocalStorageAPI {
  static set(key: string, value: any) {
    return localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
  }

  static get(key: string) {
    const value = localStorage.getItem(`${PREFIX}${key}`);
    return value ? JSON.parse(value) : null;
  }
}
