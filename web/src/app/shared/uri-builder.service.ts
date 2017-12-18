import {Inject, Injectable} from '@angular/core';

import {APP_CONFIG} from './app-config';

@Injectable()
export class UriBuilderService {

    private baseUrlConfig;

    private static checkUrl(url: string): string {
      if (url.lastIndexOf('/') === url.length - 1) {
        return url.substring(0, url.length - 1);
      }
      return  url;
    }

    constructor(@Inject(APP_CONFIG) private config: any) {
      this.baseUrlConfig = `${this.config.scheme}://${this.config.serverName}:${this.config.port}/${this.config.baseUrl}/${this.config.apiUrl}/`;
    }

    public buildUrl(url: string) {
      return this.baseUrlConfig + UriBuilderService.checkUrl(url);
    }
}
