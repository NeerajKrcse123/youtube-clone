class ApiResponse {
    constructor(data, message, success, statusCode) {
        this.data = data;
        this.message = message;
        this.success = success;
        this.statusCode = statusCode < 400;
    }
}