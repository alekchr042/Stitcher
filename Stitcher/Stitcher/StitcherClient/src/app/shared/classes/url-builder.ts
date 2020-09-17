import { QueryStringParameters } from './query-string-parameters';
import { Constants } from 'src/app/app-constants';

export class UrlBuilder {

  public url: string;
  public queryString: QueryStringParameters;

  constructor(private controller: string, private action: string, queryString?: QueryStringParameters) {
    this.url = [Constants.API_DOMAIN, controller, action].join('/');
    this.queryString = queryString || new QueryStringParameters();
  }

  public toString(): string {
    const qs: string = this.queryString ? this.queryString.toString() : '';
    return qs ? `${this.url}?${qs}` : this.url;
  }
}