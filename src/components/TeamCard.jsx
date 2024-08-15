// eslint-disable-next-line react/prop-types
export default function TeamCard({ name }) {
  return (
    <div className="min-h-48 p-8 bg-[#1a1a1a] rounded-2xl">
      <img
        src="team-man.jpg"
        alt="Team member"
        className="rounded-full h-40 w-40 inline-block object-cover"
      />
      <h3 className="mt-2 p-2 text-lg"> {name}</h3>
    </div>
  );
}
