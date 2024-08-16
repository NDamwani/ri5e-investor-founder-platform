import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const MentorProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      expertise: "",
      industryExperience: "",
      experience: "",
      company: "",
      role: "",
      availability: "",
      achievements: "",
      education: "",
      mentorshipDuration: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      expertise: Yup.string().required("Required"),
      industryExperience: Yup.string().required("Required"),
      experience: Yup.string().required("Required"),
      company: Yup.string().required("Required"),
      role: Yup.string().required("Required"),
      availability: Yup.string().required("Required"),
      achievements: Yup.string().required("Required"),
      education: Yup.string().required("Required"),
      mentorshipDuration: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Complete Your Profile</h1>

      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center h-full w-full text-gray-400 text-lg">
              Upload Photo
            </div>
          )}
        </div>
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your full name"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your email address"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your phone number"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Area of Expertise
          </label>
          <input
            type="text"
            name="expertise"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expertise}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your area of expertise"
          />
          {formik.touched.expertise && formik.errors.expertise ? (
            <div className="text-red-500 text-sm">
              {formik.errors.expertise}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Industry Experience
          </label>
          <input
            type="text"
            name="industryExperience"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.industryExperience}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your industry experience"
          />
          {formik.touched.industryExperience &&
          formik.errors.industryExperience ? (
            <div className="text-red-500 text-sm">
              {formik.errors.industryExperience}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Years of Experience (YOE)
          </label>
          <input
            type="number"
            name="experience"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.experience}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your years of experience"
          />
          {formik.touched.experience && formik.errors.experience ? (
            <div className="text-red-500 text-sm">
              {formik.errors.experience}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Company Associated With
          </label>
          <input
            type="text"
            name="company"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter the company you are associated with"
          />
          {formik.touched.company && formik.errors.company ? (
            <div className="text-red-500 text-sm">{formik.errors.company}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Current Role/Position
          </label>
          <input
            type="text"
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your current role or position"
          />
          {formik.touched.role && formik.errors.role ? (
            <div className="text-red-500 text-sm">{formik.errors.role}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Availability</label>
          <input
            type="text"
            name="availability"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.availability}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your availability"
          />
          {formik.touched.availability && formik.errors.availability ? (
            <div className="text-red-500 text-sm">
              {formik.errors.availability}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Key Achievements
          </label>
          <input
            type="text"
            name="achievements"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.achievements}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your key achievements"
          />
          {formik.touched.achievements && formik.errors.achievements ? (
            <div className="text-red-500 text-sm">
              {formik.errors.achievements}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Education</label>
          <input
            type="text"
            name="education"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.education}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your education details"
          />
          {formik.touched.education && formik.errors.education ? (
            <div className="text-red-500 text-sm">
              {formik.errors.education}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Duration of Mentorship
          </label>
          <input
            type="text"
            name="mentorshipDuration"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mentorshipDuration}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter the duration of mentorship"
          />
          {formik.touched.mentorshipDuration &&
          formik.errors.mentorshipDuration ? (
            <div className="text-red-500 text-sm">
              {formik.errors.mentorshipDuration}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-300"
          >
            Complete Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default MentorProfile;
