const milestones = [
  { year: "2015", event: "Founded in Tangail" },
  { year: "2017", event: "Launched nationwide bike rental services" },
  { year: "2020", event: "Surpassed 1 million rentals" },
  { year: "2022", event: "Expanded to international markets" },
];

const HistoryMilestones = () => {
  return (
    <section className="bg-blue-50 p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Our History
      </h2>
      <div className="timeline space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-bold text-gray-900">
              {milestone.year}
            </h3>
            <p className="text-lg text-gray-700">{milestone.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistoryMilestones;
