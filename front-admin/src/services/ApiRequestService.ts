import axios, { AxiosError, AxiosResponse } from "axios";

const BASEURL = 'http://localhost';
const PORT = '3000';

class ApiRequestService {

    private createUrl(endPoint?: string, params?: string) {
        let url = ''

        if (BASEURL) url += BASEURL;
        if (PORT) url += `:${PORT}`
        if (endPoint) url += `/${endPoint}`;
        if (params) url += `?${params}`;

        return url;
    }

    async getRequest({ endPoint, params, headers }: { endPoint: string, params?: string, headers?: any }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = await axios.get(url, { headers: headers });
            return response;
        } catch (error) {
            const err = error as AxiosError;
            const response = err.response as any;

            if (response) {
                throw response;
            } else {
                throw new AxiosError("Não foi possível conectar-se ao servidor!");
            }
        }
    }

    async postRequest({ endPoint, params, headers, body }: { endPoint: string, params?: string, headers?: any, body?: any }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = axios.post(url, body, { headers: headers });
            return response;
        } catch (error) {
            const err = error as AxiosError;
            const response = err.response as any;

            if (response) {
                throw response;
            } else {
                throw new AxiosError("Não foi possível conectar-se ao servidor!");
            }
        }
    }

    async putRequest({ endPoint, params, headers, body }: { endPoint: string, params?: string, headers?: any, body?: any }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = axios.put(url, body, { headers: headers });
            return response;
        } catch (error) {
            const err = error as AxiosError;
            const response = err.response as any;

            if (response) {
                throw response;
            } else {
                throw new AxiosError("Não foi possível conectar-se ao servidor!");
            }
        }
    }

    async deleteRequest({ endPoint, params, headers }: { endPoint: string, params?: string, headers?: any }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = axios.delete(url, { headers: headers });
            return response;
        } catch (error) {
            const err = error as AxiosError;
            const response = err.response as any;

            if (response) {
                throw response;
            } else {
                throw new AxiosError("Não foi possível conectar-se ao servidor!");
            }
        }
    }

}

export default ApiRequestService;