import $api from "../http";

export default class Series {
    static async getAllSeries(offset: any) {
        return $api.get(`series`, {params: {offset: offset * 20}})
    }
    static async getSeries(id: any) {
        return $api.get(`series/${id}`)
    }
}