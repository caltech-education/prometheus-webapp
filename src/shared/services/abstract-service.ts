import { IResponse, IPageableResponse } from 'shared/model/shared.interface';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AbstractModel } from 'shared/model/model.interface';

const instance: AxiosInstance = axios.create({
    baseURL: `${ process.env.REACT_APP_URL }/`,
});

export class AbstractService<T extends AbstractModel> {
    protected url: string | undefined = process.env.REACT_APP_URL;
    protected http: AxiosInstance;
    private type: string;

    constructor(typeModel: string) {
        this.url += typeModel;
        this.http = instance;
        this.type = typeModel;
    }

    private request<T>(requestConfig: AxiosRequestConfig): Promise<T> {
        return this.http.request<T, T>(requestConfig);
    }

    save(resource: T, url: string = ''): Promise<IResponse<T>> {
        return this
            .request<IResponse<T>>({ method: 'POST', ...{ url: `${ this.type + url }`, data: resource } });
    }

    update(resource: T, url: string = ''): Promise<IResponse<T>> {
        return this
            .request<IResponse<T>>({ method: 'PUT', ...{ url: `${ this.type + url }`, data: resource } });
    }

    findById(resourceId: string): Promise<IResponse<T>> {
        return this
            .request<IResponse<T>>({ method: 'GET', ...{ url: `${ this.type + '/' + resourceId }` } });
    }

    find(url: string = ''): Promise<IResponse<T>> {
        return this
            .request<IResponse<T>>({ method: 'GET', ...{ url: `${ this.type + url }` } });
    }

    findAll(url: string = ''): Promise<IPageableResponse<T>> {
        return this
            .request<IPageableResponse<T>>({ method: 'GET', ...{ url: `${ this.type + ''}` } });
    }

    delete(resource: T, url: string = ''): Promise<IPageableResponse<T>> {
        return this
            .request<IPageableResponse<T>>({ method: 'DELETE', ...{ url: `${this.type }` } });
    }

}
