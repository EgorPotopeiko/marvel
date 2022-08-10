import $api from "../http";

export default class Stories {
    static async getAllStories(name: any, offset: any) {
        return $api.get(`stories`, {params: {nameStartsWith: name !== '' ? name : null, offset: offset * 20}})
    }
    static async getStory(id: any) {
        return $api.get(`stories/${id}`)
    }
}