export function requireUser(req, res, next) {
  if (!req.user) {
    return res.status(401).send({ message: "You must be logged in!" });
  }
  next();
}

export function validate(schema) {
  return async function (req, res, next) {
    const { body, query, params } = req;
    try {
      await schema.validate({
        body,
        query,
        params,
      });
      return next();
    } catch (error) {
      return res.status(500).json({ type: error.name, message: error.message });
    }
  };
}
