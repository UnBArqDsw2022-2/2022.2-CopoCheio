const BASEURL = 'http://localhost';
const PORT = '3000';

class ApiRequestService {

    createUrl(endPoint?: string, params?: string) {
        let url = ''

        if (BASEURL) url += BASEURL;
        if (PORT) url += `:${PORT}`
        if (endPoint) url += `/${endPoint}`;
        if (params) url += `?${params}`;

        return url;
    }
}

export default ApiRequestService;