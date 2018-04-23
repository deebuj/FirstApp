import axios from "axios";
var api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export default class UserAPI {
  static async getUsers(ref) {
    let users = await this.makeCall(`/users`);
    console.log(users);
    ref.setUsers(users);
  }
  static async getPosts(ref, userid) {
    ref.posts = await this.makeCall(`/posts?userId=` + userid);
  }
  static async makeCall(url) {
    try {
      const tempPromise = api.get(url);
      const [responseData] = await Promise.all([tempPromise]);
      return responseData.data;
    } catch (e) {
      console.log(e);
    }
  }
}
