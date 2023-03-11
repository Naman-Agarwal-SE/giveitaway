const express = require("express");
const {getNgoList, updateNgoList, ngoCount, like, disLike} = require("../modules/ngo/ngo.controller.js");
const {getCitiesList, getActiveCitiesList} = require("../modules/cities/cities.controller.js");
const ngoValidation = require('../validator/ngo/ngo.validation');
const router = express.Router();

router.get("/getNgoList", ngoValidation.getNgoList, getNgoList);
router.put("/updateNgoList", updateNgoList);
router.get("/ngoCount", ngoCount);
router.put("/like/:id", like);
router.put("/disLike/:id", disLike);

//fetch city
router.get("/getCities", getCitiesList);
//fetch city
router.get("/getActiveCities", getActiveCitiesList);

module.exports = router;
