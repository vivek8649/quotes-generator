import { HttpParams } from '@angular/common/http';

export class CommonUtilService {

  public static createHttpParams(params: any): HttpParams {
    let httpParams: HttpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    Object.keys(params).forEach(param => {
      if (params[param] !== undefined) {
        if (Array.isArray(params[param])) {
          params[param].forEach((value: any) => {
            httpParams = httpParams.append(param, value);
          });
        } else {
          httpParams = httpParams.set(param, params[param]);
        }
      }
    });
    return httpParams;
  }
}
