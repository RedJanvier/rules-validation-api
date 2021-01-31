import { respond, operatorsHash } from "../helpers";

class RuleControllers {
  static getInfo(req, res) {
    const data = {
      name: "Janvier Ntwali Habiyaremye",
      github: "@RedJanvier",
      email: "janvierntwali@gmail.com",
      mobile: "+250789775922",
      twitter: "@red_janvier",
    };
    return respond.success(res, "My Rule-Validation API", data);
  }

  static validateRule(req, res) {
    const { condition, condition_value, value } = req;

    // Validate rule by condition
    const valid = operatorsHash[condition](value, condition_value);
    const result = {
      validation: {
        ...rule,
        error: false,
        field_value: value,
      },
    };

    // Handle invalid rule (failing) response
    if (!valid) {
      return respond.error(res, `field ${rule.field} failed validation.`, {
        validation: {
          ...result.validation,
          error: true,
        },
      });
    }

    return respond.success(
      res,
      `field ${rule.field} successfully validated.`,
      result
    );
  }
}

export default RuleControllers;
