const app = require("./app");

app.listen(process.env.PORTNO, () => {
  console.log("Server listening on ",process.env.PORTNO);
});
