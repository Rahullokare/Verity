import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "VerityRCM recovered over $300,000 in previously denied claims within the first 90 days. Their expertise in denial management is unmatched.",
      author: "Dr. Sarah Johnson",
      role: "Cardiology Practice",
      avatar: "👩‍⚕️",
    },
    {
      quote:
        "Our reimbursement time decreased by 45% while our collections increased by 28%. The team understands the complexities of orthopedic billing.",
      author: "Michael Torres",
      role: "Clinic Administrator",
      avatar: "👨‍💼",
    },
    {
      quote:
        "Switching to VerityRCM was the best decision we made. They handle all our billing complexities so we can focus on patient care.",
      author: "Dr. James Wilson",
      role: "Orthopedic Surgery",
      avatar: "👨‍⚕️",
    },
  ];
  return (
    <div id="testimonials" className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Medical Professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            See what our clients say about our medical billing services.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
