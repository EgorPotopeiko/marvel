import $api from "../http";

export default class Series {
    static async getAllSeries(name: any, offset: any) {
        return $api.get(`series`, {params: {nameStartsWith: name !== '' ? name : null, offset: offset * 20}})
    }
    static async getSeries(id: any) {
        return $api.get(`series/${id}`)
    }
}