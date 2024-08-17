import { useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";

export default function MentorCard() {
  const navigate = useNavigate();
  return (
    <div className="mt-8 flex w-full items-center justify-center gap-8 rounded-3xl bg-accent p-4 px-12 sm:w-1/2 md:justify-evenly md:p-8">
      <div className="my-auto hidden rounded-lg bg-white md:block md:w-48">
        <img
          src="/team-man.jpg"
          alt="mentor"
          className="h-full w-full rounded-lg object-contain"
        />
      </div>
      <div className="flex flex-col gap-x-12 md:w-96 lg:flex-row">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold md:text-4xl">Harshil Kumar</h2>
          <p className="text-lg">harshilK@gmail.com</p>
          <p className="text-lg">Skills: React, Node, Express</p>
          <p className="text-lg">Experience: 5 years</p>
        </div>

        <div className="mt-4 flex flex-col justify-center gap-y-2 lg:gap-y-8">
          <PrimaryButton
            name="Message"
            type="button"
            handleClick={() => {
              navigate("/product-owner/inbox", {
                state: {
                  mentorName: "Harshil Kumar",
                  mentorEmail: "harshilK@gmail.com",
                },
              });
            }}
            className="w-28 max-w-48 self-center rounded bg-white p-2 font-semibold text-black transition hover:bg-gray-300 md:w-full"
          />
          <PrimaryButton
            name="Profile"
            type="button"
            handleClick={() => {
              navigate("/mentor/profile", {
                state: {
                  mentorName: "Harshil Kumar",
                  mentorEmail: "harshilK@gmail.com",
                },
              });
            }}
            className="w-28 max-w-48 self-center rounded bg-white p-2 font-semibold text-black transition hover:bg-gray-300 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
