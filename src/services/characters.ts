import $api from "../http";

export default class Characters {
    static async getAllCharacters(name: any, offset: any) {
        return $api.get(`characters`, {params: {nameStartsWith: name !== '' ? name : null, offset: offset * 20}})
    }
    static async getCharacter(id: any) {
        return $api.get(`characters/${id}`)
    }
}