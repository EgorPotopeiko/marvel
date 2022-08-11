import $api from "../http";

export default class Series {
    static async getAllSeries(title: any, offset: any) {
        return $api.get(`series`, {params: {titleStartsWith: title !== '' ? title : null, offset: offset * 20}})
    }
    static async getSeries(id: any) {
        return $api.get(`series/${id}`)
    }
}