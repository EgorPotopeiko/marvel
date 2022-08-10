import $api from "../http";

export default class Comics {
    static async getAllComics(name: any, offset: any) {
        return $api.get(`comics`, {params: {nameStartsWith: name !== '' ? name : null, offset: offset * 20}})
    }
    static async getComic(id: any) {
        return $api.get(`comics/${id}`)
    }
}