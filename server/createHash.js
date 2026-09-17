const bcrypt = require("bcryptjs");

const password = "Admin123!";

bcrypt.hash(password, 12)
  .then((hash) => {
    console.log("Password hash:");
    console.log(hash);
  })
  .catch((error) => {
    console.error(error);
  });