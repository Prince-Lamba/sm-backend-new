const zod = require("zod");

const userSchema = zod.object({
  fullName: zod.string(),
  username: zod.strict(),
  password: zod.password().min(8),
});

module.exports = { userSchema };
