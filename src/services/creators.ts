import $api from "../http";

export default class Creators {
    static async getAllCreators(name: any, offset: any) {
        return $api.get(`creators`, {params: {nameStartsWith: name !== '' ? name : null, offset: offset * 20}})
    }
    static async getCreator(id: any) {
        return $api.get(`creators/${id}`)
    }
}