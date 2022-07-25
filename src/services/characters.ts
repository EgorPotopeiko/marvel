import $api from "../http";

export default class Characters {
    static async getAllCharacters(offset: any) {
        return $api.get(`characters`, {params: {offset: offset * 20}})
    }
}