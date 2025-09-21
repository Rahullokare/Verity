import React from "react";

const PainPoints = () => {
  const painPoints = [
    {
      title: "Time-Consuming Billing Tasks",
      description: "Administrative burden takes away from patient care",
      solution:
        "We handle all billing tasks so you can focus on providing services",
      icon: "⏰",
      color: "bg-orange-500",
    },
    {
      title: "Revenue Leakage",
      description:
        "Lost revenue from claim denials, errors, and delayed submissions",
      solution:
        "Timely claims, error elimination, and denial management to maximize revenue",
      icon: "💰",
      color: "bg-green-500",
    },
    {
      title: "Complex Regulations",
      description:
        "Keeping up with changing billing regulations and coding standards",
      solution:
        "Our team stays current with all regulations to avoid penalties",
      icon: "📋",
      color: "bg-blue-500",
    },
  ];

  return (
    <div
      id="solutions"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Solutions
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Solving Your Biggest
            <span className="text-blue-600 block">Billing Challenges</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            We understand the challenges medical practices face and provide
            targeted solutions that deliver real results.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {painPoints.map((point, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg opacity-20 group-hover:opacity-30 transition duration-300 blur"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-md h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <div
                    className={`inline-flex items-center justify-center h-16 w-16 rounded-full ${point.color} text-white text-2xl mb-6 transform group-hover:scale-110 transition duration-300`}
                  >
                    {point.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {point.title}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-2 text-gray-600">{point.description}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm font-medium text-blue-800">
                        {point.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Proven Results Across All Practices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white">98%</div>
                  <div className="text-blue-100 mt-2">
                    Claim Acceptance Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white">62%</div>
                  <div className="text-blue-100 mt-2">Reduction in Denials</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white">40%</div>
                  <div className="text-blue-100 mt-2">Faster Reimbursement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPoints;
