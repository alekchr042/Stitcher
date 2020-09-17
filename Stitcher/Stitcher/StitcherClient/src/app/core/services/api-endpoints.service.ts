import { Injectable } from '@angular/core';
import { UrlBuilder } from '../../shared/classes/url-builder';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService {

  public createUrl(controller: string, action: string): string {
    return new UrlBuilder(controller, action).toString();
  }

  public createUrlWithQueryParameters(
    controller: string,
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {

    const urlBuilder: UrlBuilder = new UrlBuilder(controller, action);

    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }

    return urlBuilder.toString();
  }

  public createUrlWithPathVariables(
    controller: string,
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';

    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }

    return new UrlBuilder(controller, `${action}${encodedPathVariablesUrl}`).toString();
  }
}