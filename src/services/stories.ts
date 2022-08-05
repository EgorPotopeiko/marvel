import $api from "../http";

export default class Stories {
    static async getAllStories(offset: any) {
        return $api.get(`stories`, {params: {offset: offset * 20}})
    }
    static async getStory(id: any) {
        return $api.get(`stories/${id}`)
    }
}