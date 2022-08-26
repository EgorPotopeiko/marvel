import $api from "../http";

export default class Creators {
  static async getAllCreators(name: string | null, offset: number) {
    return $api.get(`creators`, {
      params: {
        nameStartsWith: name !== "" ? name : null,
        offset: offset * 20,
      },
    });
  }
  static async getCreator(id: number) {
    return $api.get(`creators/${id}`);
  }
}
