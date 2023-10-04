const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);

    return res.company;
  }

  /** Get list of all companies.
   *
   * Has ability to filter out companies from query.
   *
   * Params:
   * - string that
   */

  static async getCompanies(searchTerm) {
    let data = searchTerm ? { nameLike: searchTerm } : {};
    let res = await this.request("companies", data);

    return res.companies;
  }

  /** Get list of all jobs.
   *
   * Send query string if filtering term is passed in.
   */

  static async getJobs(searchTerm) {
    let data = searchTerm ? { title: searchTerm } : {};
    let res = await this.request("jobs", data);

    return res.jobs;
  }

  /** login: takes in a username and password and returns a JWT */
  static async login(username, password) {
    let res = await this.request("auth/token", { username, password }, "POST");
    return res.token;
  }


  /** register: takes in a user object and returns a JWT */
  static async register(user) {
    let res = await this.request("auth/register", user, "POST");
    return res.token;
  }
}

export default JoblyApi;
