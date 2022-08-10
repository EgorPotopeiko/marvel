import $api from "../http";

export default class Events {
    static async getAllEvents(name: any, offset: any) {
        return $api.get(`events`, {params: {nameStartsWith: name !== '' ? name : null, offset: offset * 20}})
    }
    static async getEvent(id: any) {
        return $api.get(`events/${id}`)
    }
}