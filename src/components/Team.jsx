export default function Team() {
  return (
    <section className="bg-black mt-32 text-white p-4 text-center">
        <div>
            <h2>Team</h2>
            <p>Our team is made up of the best engineers and designers from around the world.</p>
        </div>
        <div className="flex justify-between p-8 mt-2 md:justify-evenly">
            <div className="h-48 max-w-48">
            <img src="team-man.jpg" alt="Team member" className="rounded-full h-40 w-40 inline-block" />
            <h3> Parth Rathod </h3>
            </div>
            <div>
            <img src="team-man.jpg" alt="Team member" className="rounded-full h-40 w-40 inline-block" />
            <h3> Nikhil Damwani </h3>
            </div>
            <div>
            <img src="team-man.jpg" alt="Team member" className="rounded-full h-40 w-40 inline-block" />
            <h3> Raghav Gupta </h3>
            </div>
        </div>
    </section>
  )
}
