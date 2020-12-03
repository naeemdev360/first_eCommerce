import bcrypt from "bcryptjs";
const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("test1234", 10),
    isAdmin: true,
  },
  {
    name: "jhon doe",
    email: "jhon@example.com",
    password: bcrypt.hashSync("test1234", 10),
  },
  {
    name: "jane",
    email: "jane@example.com",
    password: bcrypt.hashSync("test1234", 10),
  },
];

export default users;
