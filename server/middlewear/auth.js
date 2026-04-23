import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ msg: "unathorized." });
    }

    const token = authHeader.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWTSECRET);
    req.user = decode;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "invalid or expired token." });
  }
};
