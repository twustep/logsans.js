
import fetch from 'node-fetch';
import { LogSnag } from 'logsnag';
import { PublishOptions } from '../types';
import { LOGSANS_ENDPOINT } from '../constants';
import { HTTPResponseError } from './error';

/**
 * LogSans Client
 */
export default class LogSans {
  private readonly token: string;
  private logsnag: LogSnag;

  /**
   * Construct a new LogSans instance
   * @param token: your API token. See docs.logsnag.com for details
   */
  constructor(token: string) {
    this.token = token;
    this.logsnag = new LogSnag(this.token)
  }


 
  public async publish(options: PublishOptions): Promise<boolean>{
  
    var trackSans = options.logsans;

    delete options.logsans;

    var publishResult = this.logsnag.publish(options);

    if(trackSans == true){

      const headers = {
        'Content-Type': 'application/json',
      };

      const method = 'PUT';

      var pingJson = {
        project: options.project,
        channel: options.channel,
        event: options.event,
        token: this.token
      }

      const body = JSON.stringify(pingJson);
  
      const response = await fetch(LOGSANS_ENDPOINT + "/log/create", { method, body, headers });
      if (!response.ok) {
        throw new HTTPResponseError(response);
      }
    }
    return publishResult;
  }
}
