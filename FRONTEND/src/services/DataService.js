import http from "../http-common";

class TutorialDataService {

  get(id) {
    return http.get(`/TEM/${id}`);
  }

  create(data) {
    return http.post("/TEM", { email: data }, { headers: { 'Content-Type': 'application/json' }});
  }

  checkPassword(data) {    
    console.log("checkPassword function", data);
    return http.post("/TEM/checkPassword", { password: data} , { headers: { 'Content-Type': 'application/json' }});
  }

  sendNewsletterMail() {
    return http.get("/newsletter");
  }

  sendNewsletterMailToMarius(data) {
    return http.post("/newsletter/", data, { headers: { 'Content-Type': 'application/json' }});
  }

  sendGiftCard(data) {
    return http.post("/TEM/giftcard", data, { headers: { 'Content-Type': 'application/json' }});
  }

  update(id, data) {
    return http.put(`/TEM/${id}`, data);
  }

  delete(id) {
    return http.delete(`/TEM/${id}`);
  }

  deleteAll() {
    return http.delete(`/TEM`);
  }

  findByTitle(title) {
    return http.get(`/TEM?title=${title}`);
  }
}

export default new TutorialDataService();
