const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const OrphanModel = require("./orphanModel");
const DoctorModel = require("./doctorModel");
const bcrypt = require("bcrypt");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const mongoDb =
  "mongodb+srv://nilesh123:nilesh123@cluster0.iyrwwws.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoDb)
  .then(() => {
    console.log("Successfully connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getOrphan", async (req, res) => {
  const orphan = await OrphanModel.find();
  if (orphan) {
    return res.send(orphan);
  }
  return res.send("No existing user");
});

app.get("/getDoctor", async (req, res) => {
  const doctor = await DoctorModel.find();
  if (doctor) {
    return res.send(doctor);
  }
  return res.send("No existing user");
});

app.post("/addOrphan", async (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const storyBehind = req.body.storyBehind;
  const yearOfEnroll = req.body.yearOfEnroll;
  const registerOrphan = new OrphanModel({
    name: name,
    gender: gender,
    dateOfBirth: dateOfBirth,
    storyBehind: storyBehind,
    yearOfEnroll: yearOfEnroll,
  });
  registerOrphan
    .save()
    .then(() => {
      res.send({
        message: "Orphan with name " + name + " is successfully added",
      });
    })
    .catch((err) => {
      console.log("error occured ", err);
    });
});

app.post("/addDoctor", async (req, res) => {
  const name = req.body.name;
  const expertize = req.body.expertize;
  const age = req.body.age;
  const email = req.body.email;
  const experience = req.body.experience;
  let date = new Date();
  let temp = date.getTime() + email + name + experience + expertize + age;
  let password = await bcrypt.hash(temp, 10);
  const registerDoctor = new DoctorModel({
    name: name,
    expertize: expertize,
    age: age,
    experience: experience,
    email: email,
    password: password,
  });
  registerDoctor
    .save()
    .then(() => {
      res.send({
        message: "Doctor with name " + name + " is successfully added",
        email: email,
        password: password,
      });
    })
    .catch((err) => {
      console.log("error occured ", err);
    });
});

app.put("/updateOrphan/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const storyBehind = req.body.storyBehind;
  const yearOfEnroll = req.body.yearOfEnroll;
  OrphanModel.findByIdAndUpdate(id, {
    name: name,
    gender: gender,
    storyBehind: storyBehind,
    yearOfEnroll: yearOfEnroll,
    dateOfBirth: dateOfBirth,
  })
    .then((data) => {
      res.send({
        message: "Successfully updated",
      });
    })
    .catch((err) => {
      console.log("some error occured " + err);
      res.send({
        message: "Failed to update",
      });
    });
});

app.put("/updateDoctor/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const expertize = req.body.expertize;
  const age = req.body.age;
  const experience = req.body.experience;
  console.log(name, experience, expertize, age);
  DoctorModel.findByIdAndUpdate(id, {
    name: name,
    expertize: expertize,
    experience: experience,
    age: age,
  })
    .then((data) => {
      res.send({
        message: "Successfully updated",
      });
    })
    .catch((err) => {
      console.log("some error occured " + err);
      res.send({
        message: "Failed to update",
      });
    });
});

app.delete("/deleteOrphan/:id", async (req, res) => {
  const id = req.params.id;
  OrphanModel.findByIdAndDelete(id)
    .then((data) => {
      res.send({
        message: "Deleted successfully",
      });
    })
    .catch((err) => {
      console.log("some error occured " + err);
      res.send({
        message: "Failed to delete",
      });
    });
});

app.delete("/deleteDoctor/:id", async (req, res) => {
  const id = req.params.id;
  DoctorModel.findByIdAndDelete(id)
    .then((data) => {
      res.send({
        message: "Deleted successfully",
      });
    })
    .catch((err) => {
      console.log("some error occured " + err);
      res.send({
        message: "Failed to delete",
      });
    });
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
