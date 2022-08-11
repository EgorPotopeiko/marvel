import $api from "../http";

export default class Comics {
    static async getAllComics(title: string | null, offset: number) {
        return $api.get(`comics`, {params: {titleStartsWith: title !== '' ? title : null, offset: offset * 20}})
    }
    static async getComic(id: number) {
        return $api.get(`comics/${id}`)
    }
}