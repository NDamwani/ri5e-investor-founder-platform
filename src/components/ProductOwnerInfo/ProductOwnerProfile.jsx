import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const MentorProfile = () => {
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyLogo(URL.createObjectURL(file));
    }
  };
  const formik = useFormik({
    initialValues: {
      companyName: "",
      founderName: "",
      coFounderName: "",
      email: "",
      phoneNo: "",
      companyVision: "",
      dofOps: "",
      industry: "",
      skills: "",
      profitOrLoss: "",
      networth: "",
      revenue: "",
      prevFunding: "",
      stage: "",
      mentorshipDuration: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Required"),
      founderName: Yup.string().required("Required"),
      coFounderName: Yup.string(),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNo: Yup.string().required("Required"),
      companyVision: Yup.string().required("Required"),
      dofOps: Yup.date().required("Required"),
      industry: Yup.string().required("Required"),
      skills: Yup.string().required("Required"),
      profitOrLoss: Yup.string().required("Required"),
      networth: Yup.string().required("Required"),
      revenue: Yup.string().required("Required"),
      prevFunding: Yup.string().required("Required"),
      stage: Yup.string().required("Required"),
      mentorshipDuration: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Complete Your Product Profile
      </h1>

      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
          {companyLogo ? (
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center absolute top-1/2 -translate-x-1 -translate-y-[25%] h-full w-full text-gray-400 text-lg">
              Upload Company Logo
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
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your company name"
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <div className="text-red-500 text-sm">
              {formik.errors.companyName}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Founder Name</label>
          <input
            type="text"
            name="founderName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.founderName}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter founder name"
          />
          {formik.touched.founderName && formik.errors.founderName ? (
            <div className="text-red-500 text-sm">
              {formik.errors.founderName}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Co-founder Name
          </label>
          <input
            type="text"
            name="coFounderName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.coFounderName}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter Co-founder name"
          />
          {formik.touched.founderName && formik.errors.founderName ? (
            <div className="text-red-500 text-sm">
              {formik.errors.founderName}
            </div>
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
            name="phoneNo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNo}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your phone number"
          />
          {formik.touched.phoneNo && formik.errors.phoneNo ? (
            <div className="text-red-500 text-sm">{formik.errors.phoneNo}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Company Vision
          </label>
          <textarea
            rows={3}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            name="companyVision"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyVision}
            placeholder="Enter your area of expertise"
          />
          {formik.touched.companyVision && formik.errors.companyVision ? (
            <div className="text-red-500 text-sm">
              {formik.errors.companyVision}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Date of Operations
          </label>
          <input
            type="date"
            name="dofOps"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dofOps}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your industry experience"
          />
          {formik.touched.dofOps && formik.errors.dofOps ? (
            <div className="text-red-500 text-sm">{formik.errors.dofOps}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Industry</label>
          <input
            type="text"
            name="industry"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.industry}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your Industry"
          />
          {formik.touched.industry && formik.errors.industry ? (
            <div className="text-red-500 text-sm">{formik.errors.industry}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skills}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter the company you are associated with"
          />
          {formik.touched.skills && formik.errors.skills ? (
            <div className="text-red-500 text-sm">{formik.errors.skills}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Profit / Loss
          </label>
          <input
            type="text"
            name="profitOrLoss"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profitOrLoss}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your current profit/loss"
          />
          {formik.touched.profitOrLoss && formik.errors.profitOrLoss ? (
            <div className="text-red-500 text-sm">
              {formik.errors.profitOrLoss}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Networth (USD){" "}
          </label>
          <input
            type="number"
            name="networth"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.networth}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your networth"
          />
          {formik.touched.networth && formik.errors.networth ? (
            <div className="text-red-500 text-sm">{formik.errors.networth}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Revenue</label>
          <input
            type="text"
            name="revenue"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.revenue}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your current revenue"
          />
          {formik.touched.revenue && formik.errors.revenue ? (
            <div className="text-red-500 text-sm">{formik.errors.revenue}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Previous Funding
          </label>
          <input
            type="text"
            name="prevFunding"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prevFunding}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter your previous funding details"
          />
          {formik.touched.prevFunding && formik.errors.prevFunding ? (
            <div className="text-red-500 text-sm">
              {formik.errors.prevFunding}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Stage of Company
          </label>
          <input
            type="text"
            name="stage"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stage}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter the stage of your company"
          />
          {formik.touched.stage && formik.errors.stage ? (
            <div className="text-red-500 text-sm">{formik.errors.stage}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Mentorship Duration
          </label>
          <input
            type="text"
            name="mentorshipDuration"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mentorshipDuration}
            className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
            placeholder="Enter the duration of mentorship that you require"
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
