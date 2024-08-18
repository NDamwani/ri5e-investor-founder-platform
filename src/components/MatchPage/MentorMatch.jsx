import { useEffect, useState } from "react";
import MentorCard from "./MentorCard";
import { jwtDecode } from "jwt-decode";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { constants } from "../../utility/constants";

export default function MentorMatch() {
  const [bestMatch, setBestMatch] = useState(null);
  const [remainingMentors, setRemainingMentors] = useState([]);
  const { axiosGet } = useAxiosPrivate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("userToken");

        const decodedToken = jwtDecode(token);
        console.log("decodedToken", decodedToken);
        console.log("token", token);
        const userId = decodedToken.id;
        console.log("userId", userId);

        const response = await axiosGet(constants.GETBESTMENTOR + userId);
        console.log("response", response);

        if (response) {
          setBestMatch(response.bestMatches[0]);
          setRemainingMentors(response.remainingMentors);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <section className="text-center">
      <h1 className="mb-8 text-4xl md:text-6xl">Best Mentor Match</h1>
      <div className="mb-16 flex flex-col items-center">
        {bestMatch ? (
          <MentorCard
            key={bestMatch._id}
            mentorId={bestMatch._id}
            mentorName={bestMatch.fullName}
            mentorEmail={bestMatch.email}
            mentorSkills={bestMatch.skills?.join(", ")}
            mentorExperience={bestMatch.experience}
          />
        ) : (
          <p>No best match found.</p>
        )}
      </div>

      <h2 className="mb-8 text-4xl md:text-6xl">Other Mentors</h2>
      <div className="flex flex-col items-center">
        {remainingMentors.length > 0 ? (
          remainingMentors.map((mentor) => (
            <MentorCard
              key={mentor._id}
              mentorId={mentor._id}
              mentorName={mentor.fullName}
              mentorEmail={mentor.email}
              mentorSkills={mentor.skills?.join(", ")}
              mentorExperience={mentor.experience}
            />
          ))
        ) : (
          <p>No other mentors available.</p>
        )}
      </div>
    </section>
  );
}
