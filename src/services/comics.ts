import $api from "../http";

export default class Comics {
    static async getAllComics(title: any, offset: any) {
        return $api.get(`comics`, {params: {titleStartsWith: title !== '' ? title : null, offset: offset * 20}})
    }
    static async getComic(id: any) {
        return $api.get(`comics/${id}`)
    }
}