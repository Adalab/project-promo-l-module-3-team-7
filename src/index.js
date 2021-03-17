const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); //No mover esta linea!! Error 413!! Alert! Alert!

const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// set template engine middlewares
app.set("view engine", "ejs");

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

app.get("/card/:id/", (req, res) => {
  console.log("Me estan llamando" + req.params.id);
  const data = {
    // photo: defaultImage,
    palette: "1",
    name: "Marina",
    job: "domadora de unicornios",
    email: "email",
    phone: "phone",
    linkedin: "linked",
    github: "github",
    customColors: {
      color1: "#667788",
      color2: "#f47373",
      color3: "#FABDAA",
    },
  };
  res.render("pages/card", data);
});

app.post("/card", (req, res) => {
  console.log(req.body);
  const response = {};
  if (!req.body.name) {
    response.success = false;
    response.error = "Campo obligatorio: nombre";
  } else if (!req.body.job) {
    response.success = false;
    response.error = "Campo obligatorio: profesión";
  } else if (!req.body.email) {
    response.success = false;
    response.error = "Campo obligatorio: email";
  } else if (!req.body.phone) {
    response.success = false;
    response.error = "Campo obligatorio: teléfono";
  } else if (!req.body.linkedin) {
    response.success = false;
    response.error = "Campo obligatorio: linkedin";
  } else if (!req.body.github) {
    response.success = false;
    response.error = "Campo obligatorio: github";
  } else if (!req.body.palette || req.body.palette !== "1" || req.body.palette !== "2" || req.body.palette !== "3") {
    response.success = false;
    response.error = "Campo obligatorio: palette";
  } else if (!req.body.photo) {
    response.success = false;
    response.error = "Campo obligatorio: photo";
  } else {
    response.success = true;
    response.cardURL = "https://";
  }
  const query = db.prepare(
    "INSERT INTO cards(palette, name, job, email, phone, linkedin, github, photo, color1, color2, color3) VALUES(?,?,?,?,?,?,?,?,?,?,?)"
  );
  const result = query.run(
    req.body.palette,
    req.body.name,
    req.body.job,
    req.body.email,
    req.body.phone,
    req.body.linkedin,
    req.body.github,
    req.body.customColors.color1,
    req.body.customColors.color2,
    req.body.customColors.color3
  );
  res.json(result);
});

// error
app.get("*", (req, res) => {
  const pathRelativeRoute = "../public/404-page-not-found.html";
  const pathAbsoluteRoute = path.join(__dirname, pathRelativeRoute);
  res.status(404).sendFile(pathAbsoluteRoute);
});
