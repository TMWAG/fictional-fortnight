class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(msg) {
    return new ApiError(404, msg);
  }

  static forbidden(msg) {
    return new ApiError(403, msg);
  }

  static internal(msg) {
    return new ApiError(500, msg);
  }
}

module.exports = ApiError;