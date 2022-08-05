import $api from "../http";

export default class Comics {
    static async getAllComics(offset: any) {
        return $api.get(`comics`, {params: {offset: offset * 20}})
    }
    static async getComic(id: any) {
        return $api.get(`comics/${id}`)
    }
}