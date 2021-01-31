import respond from "./respond";

const operatorsHash = {
  gt: (a, b) => a > b,
  gte: (a, b) => a >= b,
  eq: (a, b) => a === b,
  neq: (a, b) => a !== b,
  contains: (a, b) => a.includes(b),
  // additional
  lt: (a, b) => a < b,
  lte: (a, b) => a <= b,
};

export { respond, operatorsHash };
