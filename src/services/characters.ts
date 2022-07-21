import $api from "../http";

export default class Characters {
    static async getAllCharacters() {
        return $api.get(`characters`)
    }
}