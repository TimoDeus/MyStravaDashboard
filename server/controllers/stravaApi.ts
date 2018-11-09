// @ts-ignore
import axios, {AxiosPromise} from 'axios';

export type StravaClientType = {
  authenticate: (access_token: string, code: string) => AxiosPromise<any>;
  getAthlete: (access_token: string) => AxiosPromise<any>;
}

class StravaClient implements StravaClientType {

  api_base: string;
  client_id: string | undefined;
  client_secret: string | undefined;

  constructor() {
    this.api_base = 'https://www.strava.com/api/v3';
    this.client_id = process.env.CLIENT_ID;
    this.client_secret = process.env.CLIENT_SECRET;
  }

  addClientData(data: any) {
    return {...data, ...{client_id: this.client_id, client_secret: this.client_secret}};
  }

  get(call: string, data: any) {
    const url = this.api_base + call;
    const params = this.addClientData(data);
    return axios.get(url, params);
  }

  post(call: string, data: any) {
    const url = this.api_base + call;
    const params = this.addClientData(data);
    return axios.post(url, params);
  }


  public authenticate(code: string) {
    return this.post("/oauth/token", {code});
  }

  public getAthlete(token: string) {
    return this.get("/athlete", {access_token: token});
  }

}

const client = new StravaClient();

export default client;
