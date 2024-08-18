import { useEffect, useState } from "react";
import MentorCard from "./MentorCard";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { constants } from "../../utility/constants";

export default function MentorMatch() {
  const [mentors, setMentors] = useState([]);
  const { axiosGet } = useAxiosPrivate();
  useEffect(() => {
    const fetchAllMentors = async () => {
      try {
        const response = await axiosGet(constants.GETALLMENTORS);
        const mentors = response.mentors;
        const filteredMentors = mentors.filter(
          (mentor) => mentor.areaOfExpertise?.length > 0,
        );
        const updateFilteredMentors = filteredMentors.map((mentor) => {
          const areaOfExpertise = mentor.areaOfExpertise.join(", ");
          return {
            _id: mentor._id,
            fullName: mentor.fullName,
            email: mentor.email,
            skills: areaOfExpertise,
            experience: mentor.yearsOfExperience,
          };
        });
        setMentors(updateFilteredMentors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllMentors();
  }, []);
  return (
    <section className="text-center">
      <h1 className="text-4xl md:text-6xl">Best Mentor Matches</h1>
      <div className="flex flex-col items-center">
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor._id}
            mentorId={mentor._id}
            mentorName={mentor.fullName}
            mentorEmail={mentor.email}
            mentorSkills={mentor.skills}
            mentorExperience={mentor.experience}
          />
        ))}
      </div>
      <h2 className="mt-12 text-4xl sm:mt-20 md:text-6xl">Available Mentors</h2>
      <div className="flex flex-col items-center">
        {/* <MentorCard />
        <MentorCard />
        <MentorCard /> */}
      </div>
    </section>
  );
}
