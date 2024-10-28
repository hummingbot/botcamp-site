export default function CohortMetrics() {
    const metrics = [
      {
        value: "10+",
        label: "Live Sessions",
        description: "Hands-on workshops taught by industry experts"
      },
      {
        value: "8:1",
        label: "Student-Instructor Ratio",
        description: "Learn in a structured, personalized environment"
      },
      {
        value: "300+",
        label: "Alumni Network",
        description: "Join a community of successful traders and developers"
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