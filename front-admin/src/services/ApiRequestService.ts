let BASEURL = process.env.REACT_APP_URL_API;
let PORT = process.env.REACT_APP_PORT;

class ApiRequestService {
    endPoint?: string;
    params?: string;

    constructor(endPoint?: string, params?: string) {
        this.endPoint = endPoint;
        this.params = params;
    }

    createUrl() {
        let url = ''

        if (BASEURL) url += BASEURL;
        if (PORT) url += `:${PORT}`
        if (this.endPoint) url += `/${this.endPoint}`;
        if (this.params) url += `?${this.params}`;

        return url;
    }
}

export default ApiRequestService;