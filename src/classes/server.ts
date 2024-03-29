import express from 'express';
import { PORT } from '../config/server.config';

export default class Server {
  public app: express.Application;
  public port = PORT;

  constructor() {
    this.app = express();
    this.app.set('port', PORT);
  }

  listen(callback: Function) {
    this.app.listen(this.app.get('port'), callback);
  }
}