class ApiResponse {
    data?: any;
    status?: number;
    error?: string;

    static factoryApiResponse(dict: any) {
        const apiResponse = new ApiResponse();

        apiResponse.data = dict["data"];
        apiResponse.status = dict["satus"];
        apiResponse.error = dict["data"]["error"];

        return apiResponse;
    }
}

export default ApiResponse;