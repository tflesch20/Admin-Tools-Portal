import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const QA_LINK = new InjectionToken<string>('QA_LINK');
export const RULES_LINK = new InjectionToken<string>('RULES_LINK');
export const DB_LINK = new InjectionToken<string>('DB_LINK');
export const NG_LINK = new InjectionToken<string>('NG_LINK');
export const DPAP_LINK = new InjectionToken<string>('DPAP_LINK');

export function ConfigFactory(configService: ConfigService, file: string, property: string) {
  return configService.loadJSON(file)[property];
}

@Injectable()
export class ConfigService {

    public config: any;
    constructor(private http: HttpClient) {
    }

    loadJSON(filePath) {
        const json = this.loadTextFileAjaxSync(filePath, 'application/json');
        return JSON.parse(json);
    }

    loadTextFileAjaxSync(filePath, mimeType) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', filePath, false);
        if (mimeType != null) {
            if (xmlhttp.overrideMimeType) {
                xmlhttp.overrideMimeType(mimeType);
            }
        }
        xmlhttp.send();
        if (xmlhttp.status == 200) {
            return xmlhttp.responseText;
        } else {
            return null;
        }
    }
}
