import axios, { AxiosError } from "axios";

const BASEURL = 'http://localhost';
const PORT = '3000';

const userToken = sessionStorage.getItem('userToken');
const headers = { "authorization": userToken };

class ApiRequestService {

    private createUrl(endPoint?: string, params?: string) {
        let url = ''

        if (BASEURL) url += BASEURL;
        if (PORT) url += `:${PORT}`
        if (endPoint) url += `/${endPoint}`;
        if (params) url += `?${params}`;

        return url;
    }

    async getRequest({ endPoint, params }: { endPoint: string, params?: string }) {
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

    async postRequest({ endPoint, params, body }: { endPoint: string, params?: string, body?: any }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = await axios.post(url, body, { headers: headers });
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

    async putRequest({ endPoint, params, body }: { endPoint: string, params?: string, body?: any }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = await axios.put(url, body, { headers: headers });
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

    async deleteRequest({ endPoint, params }: { endPoint: string, params?: string }) {
        try {
            const url = this.createUrl(endPoint, params);
            const response = await axios.delete(url, { headers: headers });
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