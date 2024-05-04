const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide with your name"],
    },
    email: {
      type: String,
      required: [true, "Please provide with your email"],
    },
    phone: {
      type: Number,
      required: [true, "Please provide with your phone number"],
    },
    moodleId: {
      type: Number,
      required: [true, "Provide with your Moodle ID"],
    },
    dob: {
      type: Date,
      required: [true, "Please provide your date of birth"],
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      required: [true],
      enum: ["Male", "Female", "Others"],
    },
    percentage: {
      type: Number
    },
    cgpa: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

studentSchema.pre("save", function (next) {
  const diff = Date.now() - this.dob;
  const ageDate = new Date(diff);
  this.age = Math.abs(ageDate.getUTCFullYear() - 1970);

  if (this.percentage) {
    if (this.percentage > 100) {
      throw new Error("Percentage cannot be greater than 100")
    }
    this.cgpa = (this.percentage / 9.5).toFixed(2);
  } else if (this.cgpa) {
    if (this.cgpa > 10) {
      throw new Error("CGPA cannot be greater than 10");
    }
    this.percentage = (this.cgpa * 9.5).toFixed(2);
  }
  next();
});

module.exports = mongoose.model("Details", studentSchema);
