const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const OrphanModel = require("./orphanModel");
const DoctorModel = require("./doctorModel");
const MedicalDetailModel = require("./medicalDetailModel");
const AdoptionModel = require("./adoptionModel");
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

//ORPHAN API/////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/getOrphan", async (req, res) => {
  const orphan = await OrphanModel.find();
  if (orphan) {
    return res.send(orphan);
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

//DOCTOR API/////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/getDoctor", async (req, res) => {
  const doctor = await DoctorModel.find();
  if (doctor) {
    return res.send(doctor);
  }
  return res.send("No existing user");
});

app.post("/addDoctor", async (req, res) => {
  const name = req.body.name;
  const expertize = req.body.expertize;
  const age = req.body.age;
  const email = req.body.email;
  const experience = req.body.experience;
  const date = new Date();
  let temp = date.getTime().toString();
  const password = await bcrypt.hash(temp, 10);
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
        password: temp,
      });
    })
    .catch((err) => {
      console.log("error occured ", err);
    });
});

app.put("/updateDoctor/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const expertize = req.body.expertize;
  const age = req.body.age;
  const experience = req.body.experience;
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

// DOCTOR LOGIN AND CHANGE PASSWORD API//////////////////////////////////////////////////////////////////////

app.put("/changePasswordDoctor", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const newpass = req.body.newpass;

  const doctor = await DoctorModel.findOne({ email: email });
  if (doctor) {
    if (await bcrypt.compare(password, doctor.password)) {
      const temp = await bcrypt.hash(newpass, 10);
      DoctorModel.findOneAndUpdate(
        { email: email },
        {
          password: temp,
        }
      )
        .then((result) => {
          console.log(result);
          res.send({
            message: "password changed successfully",
          });
        })
        .catch((err) => {
          res.send({
            message: "failed to update" + err,
          });
        });
    }
  } else {
    res.send({
      message: "No such user found",
    });
  }
});

app.get("/loginDoctor", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const doctor = await DoctorModel.findOne({ email: email });
  if (doctor) {
    if (await bcrypt.compare(password, doctor.password)) {
      return res.send({
        message: doctor,
      });
    }
  } else {
    res.send({
      message: "No such user found",
    });
  }
});

// Add Medical Details API//////////////////////////////////////////////////////////////////////

app.get("/getMedicalDetail", async (req, res) => {
  try {
    const medicalDetail = await MedicalDetailModel.find();
    if (medicalDetail) {
      res.send({
        message: medicalDetail,
      });
    } else {
      res.send("No medical details found");
    }
  } catch (error) {
    console.log("some error occured" + error);
  }
});

app.post("/addMedicalDetail/:id", async (req, res) => {
  const id = req.params.id;
  const bloodGroup = req.body.bloodGroup;
  const allergies = req.body.allergies;
  const symptoms = req.body.symptoms;
  const diagonsis = req.body.diagonsis;
  const treatment = req.body.treatment;
  const registerMedicalDetail = new MedicalDetailModel({
    orphanId: id,
    bloodGroup: bloodGroup,
    allergies: allergies,
    symptoms: symptoms,
    diagonsis: diagonsis,
    treatment: treatment,
  });
  registerMedicalDetail
    .save()
    .then(() => {
      res.send({
        message: "Medical details is successfully added",
      });
    })
    .catch((err) => {
      console.log("error occured ", err);
    });
});

app.put("/updateMedicalDetail/:id", async (req, res) => {
  const id = req.params.id;
  const bloodGroup = req.body.bloodGroup;
  const allergies = req.body.allergies;
  const symptoms = req.body.symptoms;
  const diagonsis = req.body.diagonsis;
  const treatment = req.body.treatment;
  MedicalDetailModel.findByIdAndUpdate(id, {
    orphanId: id,
    bloodGroup: bloodGroup,
    allergies: allergies,
    symptoms: symptoms,
    diagonsis: diagonsis,
    treatment: treatment,
  })
    .then(() => {
      res.send({
        message: "Medical details is successfully updated",
      });
    })
    .catch((err) => {
      console.log("error occured ", err);
    });
});

app.delete("/deleteMedicalRecord/:id", async (req, res) => {
  const id = req.params.id;
  MedicalDetailModel.findByIdAndDelete(id)
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

// ADOPTION API//////////////////////////////////////////////////////////////////////////////////////////////

app.get("/getAdoptionRequest", async (req, res) => {
  try {
    const AdoptionDetail = await AdoptionModel.find();
    if (AdoptionDetail) {
      res.send({
        message: AdoptionDetail,
      });
    } else {
      res.send("No medical details found");
    }
  } catch (error) {
    console.log("some error occured" + error);
  }
});

app.post("/addAdoptionRequest", async (req, res) => {
  const pname = req.body.pname;
  const uid = req.body.uid;
  const phoneNo = req.body.phoneNo;
  const email = req.body.email;
  const address = req.body.address;
  const message = req.body.message;
  const registerAdoption = new AdoptionModel({
    pname: pname,
    uid: uid,
    email: email,
    phoneNo: phoneNo,
    address: address,
    message: message,
  });
  registerAdoption
    .save()
    .then(() => {
      res.send({
        message: "Adoption request is successfully added",
      });
    })
    .catch((err) => {
      console.log("error occured ", err);
    });
});

app.delete("/deleteAdoptionRequest/:id", async (req, res) => {
  const id = req.params.id;
  AdoptionModel.findByIdAndDelete(id)
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

// server listen address and port////////////////////////////////////////////////////////////////////////////

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
