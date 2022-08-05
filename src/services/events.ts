import $api from "../http";

export default class Events {
    static async getAllEvents(offset: any) {
        return $api.get(`events`, {params: {offset: offset * 20}})
    }
    static async getEvent(id: any) {
        return $api.get(`events/${id}`)
    }
}