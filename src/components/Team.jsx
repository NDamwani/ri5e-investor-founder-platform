import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <section id="team" className="bg-black text-white p-4 text-center">
      <div>
        <h2 className="text-3xl font-bold p-2">Our Team</h2>
        <p className="text-lg p-2">
          Our team is made up of the best engineers and designers from around
          the world.
        </p>
      </div>
      <div className="flex flex-col items-center gap-12 p-8 mt-2 md:justify-evenly md:flex-row">
        <TeamCard name="Nikhil Damwani" />
        <TeamCard name="Parth Rathod" />
        <TeamCard name="Raghav Gupta" />
      </div>
    </section>
  );
}
