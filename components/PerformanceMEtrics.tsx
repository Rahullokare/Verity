import React, { useEffect, useState } from "react";

const PerformanceMetrics = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { value: "98%", label: "Claim Acceptance Rate" },
    { value: "40%", label: "Faster Reimbursement" },
    { value: "$2.3M", label: "Recovered Annually for Clients" },
    { value: "62%", label: "Reduction in Denials" },
  ];
  // Rotate through success metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Performance Metrics
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Proven Results for Medical Practices
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our clients consistently achieve remarkable improvements in their
            revenue cycle management.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {metrics[activeMetric].value}
                </div>
                <div className="text-xl text-gray-700">
                  {metrics[activeMetric].label}
                </div>
              </div>
              <div className="flex justify-center mt-6">
                {metrics.map((_, index) => (
                  <button
                    key={index}
                    className={`mx-1 rounded-full w-3 h-3 ${
                      index === activeMetric ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setActiveMetric(index)}
                    aria-label={`Show metric ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
