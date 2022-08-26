import $api from "../http";

export default class Events {
  static async getAllEvents(name: string | null, offset: number) {
    return $api.get(`events`, {
      params: {
        nameStartsWith: name !== "" ? name : null,
        offset: offset * 20,
      },
    });
  }
  static async getEvent(id: number) {
    return $api.get(`events/${id}`);
  }
}
