import $api from "../http";

export default class Characters {
  static async getAllCharacters(name: string | null, offset: number) {
    return $api.get(`characters`, {
      params: {
        nameStartsWith: name !== "" ? name : null,
        offset: offset * 20,
      },
    });
  }
  static async getCharacter(id: number) {
    return $api.get(`characters/${id}`);
  }
}
