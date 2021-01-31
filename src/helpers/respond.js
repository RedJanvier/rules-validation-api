class Respond {
  success(
    res,
    message = "API response message",
    data = { isValidForRule: true },
    status = 200
  ) {
    return res.status(status).json({
      message,
      status: "success",
      data,
    });
  }

  error(res, message = "Internal server error", data = null, status = 400) {
    return res.status(status).json({
      message,
      status: "error",
      data,
    });
  }
}

const respond = new Respond();

export default respond;
