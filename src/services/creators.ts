import $api from "../http";

export default class Creators {
    static async getAllCreators(offset: any) {
        return $api.get(`creators`, {params: {offset: offset * 20}})
    }
}