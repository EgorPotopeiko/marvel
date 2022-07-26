import $api from "../http";

export default class Stories {
    static async getAllStories(offset: any) {
        return $api.get(`stories`, {params: {offset: offset * 20}})
    }
}