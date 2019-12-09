class HttpError extends Error {
  constructor(data = {}, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }

    this.code = data.code || undefined;
    this.message = data.message || undefined;
    this.status = data.status || undefined;
    this.data = data.data || undefined;
    this.errors = data.errors || undefined;
  }
}

module.exports = HttpError;
