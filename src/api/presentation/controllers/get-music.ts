import type { Controller } from "../protocols/controller";

export class GetMusicController implements Controller {
    async handle(request: any) {
        const { url } = request;
        const music = await this.getMusic.get(url);
        return {
            statusCode: 200,
            body: music,
        };
    }
}