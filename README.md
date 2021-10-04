# Strapi example Admin expire date

This is just a sample Strapi application that shows how to modify the expiration date of the admin panel's JWT as it has it's own setting as compared to the users-permissions one.

See the [server.js](./config/server.js) file to see the `admin.auth.options.expiresIn` key. This accepts the same values you would use with the users-permissions plugin documented here: https://strapi.io/documentation/developer-docs/latest/development/plugins/users-permissions.html#jwt-configuration
