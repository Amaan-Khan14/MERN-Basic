const asyncHandler = require("express-async-handler");
const detailsModel = require("../models/detailsModel");

//@desc Get all details
//@route GET /details
//@acces private

const getAllDetails = asyncHandler(async (req, res) => {
  const details = await detailsModel.find();
  res.status(200).json(details);
});

//@desc Get details by id
//@route GET /details/:id
//@acces private

const getDetailsById = asyncHandler(async (req, res) => {
  const details = await detailsModel.findById(req.params.id);
  if (!details) {
    res.status(404).json({ message: "Details Not Found" });
  }
  res.status(200).json(details);
});

//@desc Post details
//@route POST /details/
//@acces private

const createDetails = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone, dob, moodleId, gender,percentage,cgpa } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !dob ||
    !moodleId ||
    !gender ||
    !(percentage || cgpa)
  ) {
    res.status(400).json({ message: "Provide Details" });
  }
  const details = await detailsModel.create({
    name,
    email,
    phone,
    dob,
    moodleId,
    gender,
    percentage,
    cgpa,
  });

  res
    .status(201)
    .json({ message: "Student details stored successfully", details });
});

//@desc Put/Update details
//@route Put /details/:id
//@acces private
const updateDetailsById = asyncHandler(async (req, res) => {
  const details = await detailsModel.findById(req.params.id);
  if (!details) {
    res.status(404).json({ message: "No such details founded" });
  }

  const updateDetails = await detailsModel.findByIdAndUpdate(
    req.params.id,
    req.body.id,
    { new: true }
  );

  res.status(200).json({ message: "Updated succesfully", updateDetails });
});

//@desc Delete details
//@route DELET /details/:id
//@acces private
const deleteDetailsById = asyncHandler(async (req, res) => {
  const details = await detailsModel.findById(req.params.id);
  if (!details) {
    res.status(404).json({ message: "No such details found" });
  }

  await details.deleteOne({ _id: req.params.id });
  res.json({ message: "Deleted successfully", details });
});

module.exports = {
  getAllDetails,
  getDetailsById,
  createDetails,
  updateDetailsById,
  deleteDetailsById,
};
