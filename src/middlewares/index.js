import { respond } from "../helpers";

class RulesMiddlewares {
  static validateInput(req, res, next) {
    if (!req.body) return respond.error(res, "Invalid JSON payload passed.");
    const { data, rule } = req.body;
    let value = data; // Initiate final value of field to validate
    const requiredFields = [
      "data",
      "rule",
      "rule.field",
      "rule.condition",
      "rule.condition_value",
    ];
    // Validate all required fields
    for (let i = 0; i < requiredFields.length; i++) {
      let test = req.body;
      const subs = requiredFields[i].split(".");
      for (let j = 0; j < subs.length; j++) {
        test = test[subs[j]];

        // Handle missing required field
        if (typeof test === "undefined")
          return respond.error(res, `${requiredFields[i]} is required.`);
      }
    }

    const fields = rule.field.split(".");
    for (let i = 0; i < fields.length; i++) {
      value = value[fields[i]]; // Update final value of field to validate (for future use)

      // Handle missing field to validate from data object
      if (typeof value === "undefined")
        return respond.error(res, `field ${rule.field} is missing from data.`);
    }

    // Handle mismatching types in rule and value in data
    if (typeof value !== typeof rule.condition_value) {
      const prefix =
        typeof value === "object" || typeof value === "array" ? "an" : "a";
      return respond.error(
        res,
        `${rule.field} should be ${prefix} ${typeof value}.`
      );
    }

    // Pass values to controller after validation
    req.value = value;
    req.condition = rule.condition;
    req.condition_value = rule.condition_value;

    next();
  }
}

export default RulesMiddlewares;
