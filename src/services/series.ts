import $api from "../http";

export default class Series {
    static async getAllSeries(title: string | null, offset: number) {
        return $api.get(`series`, {params: {titleStartsWith: title !== '' ? title : null, offset: offset * 20}})
    }
    static async getSeries(id: number) {
        return $api.get(`series/${id}`)
    }
}