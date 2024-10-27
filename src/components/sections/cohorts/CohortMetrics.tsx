export default function CohortMetrics() {
    const metrics = [
      {
        value: "90%",
        label: "Completion Rate",
        description: "Of students complete their capstone project"
      },
      {
        value: "6:1",
        label: "Student-Mentor Ratio",
        description: "Ensuring personalized attention"
      },
      {
        value: "500+",
        label: "Alumni Network",
        description: "Active traders worldwide"
      }
    ]
  
    return (
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-xl text-white font-semibold mb-2">
                  {metric.label}
                </div>
                <p className="text-gray-400">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }