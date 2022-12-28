import { HttpParams } from "@angular/common/http";

export interface HttpResponse<T> {
    method?: string,
    path?: string,
    parameters?: HttpParams,
    status?: 'success' | 'fail' | 'error',
    message?: string,
    data?: T,

}
