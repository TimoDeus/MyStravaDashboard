// @ts-ignore
import axios, {AxiosInstance, AxiosPromise} from 'axios';

export type StravaClientType = {
  authenticate: (access_token: string, code: string) => AxiosPromise<any>;
  getAthlete: (access_token: string) => AxiosPromise<any>;
}

class StravaClient implements StravaClientType {

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://www.strava.com/api/v3',
      data: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
      }
    })
  }

  get = (uri: string, params: any) => this.axiosInstance.get(uri, {params});
  post = (uri: string, params: any) => this.axiosInstance.post(uri, params);

  public authenticate = (code: string) => this.post("/oauth/token", {code});
  public getAthlete = (token: string) => this.get("/athlete", {access_token: token});

}

const client = new StravaClient();

export default client;
