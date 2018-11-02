// @ts-ignore
import * as Strava from 'strava';

const client = new Strava({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

export default client;
