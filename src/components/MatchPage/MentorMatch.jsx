import MentorCard from "./MentorCard";

export default function MentorMatch() {
  return (
    <section className="text-center">
      <h1 className="text-4xl md:text-6xl">Best Mentor Matches</h1>
      <div className="flex flex-col items-center">
        <MentorCard />
      </div>
      <h2 className="mt-12 sm:mt-20 text-4xl md:text-6xl">Available Mentors</h2>
      <div className="flex flex-col items-center">
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </section>
  );
}
