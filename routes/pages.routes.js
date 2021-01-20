const { Router } = require("express");
const express = require("express");

const data = require("../db/applicants.json");

const router = express.Router();

router.get("/page", (req, res, next) => {
  const search = req.query.search;
  let applicants = [...data.applicants];

  if (search) {
    applicants = applicants.filter((applicant) => {
      return applicant.firstName.includes(search) || applicant.lastName.includes(search) || applicant.email.includes(search);
    });
  }

  const properptyViewedData = {
    type: "Property Viewed",
    items: [],
  };

  const appointmentSetData = {
    type: "Appointment Set",
    items: [],
  };

  const interestedData = {
    type: "Interested",
    items: [],
  };

  const offerAcceptedData = {
    type: "Offer Accepted",
    items: [],
  };

  applicants.forEach((applicant) => {
    switch (applicant.statusType) {
      case "Appointment_Set":
        appointmentSetData.items.push(applicant);
        break;
      case "Property_Viewed":
        properptyViewedData.items.push(applicant);
        break;
      case "Interested":
        interestedData.items.push(applicant);
        break;
      case "Offer_Accepted":
        offerAcceptedData.items.push(applicant);
        break;
      default:
        return;
    }
  });

  const resData = [
    offerAcceptedData,
    interestedData,
    appointmentSetData,
    properptyViewedData,
  ];

  res.send(resData);
});

module.exports = router;
