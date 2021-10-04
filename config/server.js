module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f884ad98e4c68d9b5044d902caa1088b"),
      options: {
        expiresIn: "7d",
      },
    },
  },
});
