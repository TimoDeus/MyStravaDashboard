// @ts-ignore
import * as Strava from 'strava';

type Request = (params: object, callback: (error: any, body: any) => void) => void;
type RequestWithId = (id: string | number, params: object, callback: (error: any, body: any) => void) => void;
type SubRequest = { get: Request };
type SubRequestWithId = { get: RequestWithId };

export type StravaClient = {
  authenticate: Request;
  athlete: {
    get: Request;
    update: Request;
    followers: SubRequest;
    friends: SubRequest;
    activities: SubRequest;
    clubs: SubRequest;
  };
  athletes: {
    get: RequestWithId;
    update: RequestWithId;
    koms: SubRequestWithId;
    friends: SubRequestWithId;
    followers: SubRequestWithId;
    bothfollowing: SubRequestWithId;
  };
  activities: {
    get: RequestWithId;
    create: Request;
    delete: RequestWithId;
    comments: SubRequestWithId;
    kudos: SubRequestWithId;
    following: SubRequestWithId;
    photos: SubRequestWithId;
    zones: SubRequestWithId;
    laps: SubRequestWithId;
    streams: SubRequestWithId;
  };
  clubs: {
    get: RequestWithId;
    members: SubRequestWithId;
    activities: SubRequestWithId;
  };
  gear: {
    get: RequestWithId;
  };
  segments: {
    get: RequestWithId;
    streams: SubRequestWithId;
    leaderboard: SubRequestWithId;
    starred: SubRequest;
    explore: SubRequest;
  };
  segmentefforts: {
    get: RequestWithId;
    streams: SubRequestWithId;
  };
  upload: {
    upload: Request;
  };

}

const client: StravaClient = new Strava({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

export default client;
