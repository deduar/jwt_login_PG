const userSchema = {
    type: "object",
    properties: {
        email: { type: "string" },
        password: { type: "string" },
    },
    required: ["email", "password"],
};

const userModel = {
    email: "test@test.com",
    password: "test",
};

module.exports = { userSchema, userModel };
