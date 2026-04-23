import { validationResult } from "express-validator";
export default function handleValidation(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  } catch (err) {
    next(err);
  }
}
