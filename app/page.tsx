"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function MedicalBillingLandingPage() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    practice: "",
    specialty: "",
    employees: "",
  });

  // Rotate through success metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you shortly.");
  };

  const metrics = [
    { value: "98%", label: "Claim Acceptance Rate" },
    { value: "40%", label: "Faster Reimbursement" },
    { value: "$2.3M", label: "Recovered Annually for Clients" },
    { value: "62%", label: "Reduction in Denials" },
  ];

  const painPoints = [
    {
      title: "Time-Consuming Billing Tasks",
      description: "Administrative burden takes away from patient care",
      solution:
        "We handle all billing tasks so you can focus on providing services",
      icon: "⏰",
    },
    {
      title: "Revenue Leakage",
      description:
        "Lost revenue from claim denials, errors, and delayed submissions",
      solution:
        "Timely claims, error elimination, and denial management to maximize revenue",
      icon: "💰",
    },
    {
      title: "Complex Regulations",
      description:
        "Keeping up with changing billing regulations and coding standards",
      solution:
        "Our team stays current with all regulations to avoid penalties",
      icon: "📋",
    },
  ];

  const services = [
    {
      title: "Eligibility & Verification",
      description:
        "Complete patient insurance verification before services are rendered",
      icon: "✅",
    },
    {
      title: "Authorization Management",
      description: "Obtain necessary pre-authorizations for procedures",
      icon: "🔐",
    },
    {
      title: "Charge Posting",
      description: "Accurate and timely charge entry with quality checks",
      icon: "💳",
    },
    {
      title: "Payment Posting",
      description: "Precise payment application and reconciliation",
      icon: "📊",
    },
    {
      title: "Billing & AR Management",
      description: "Comprehensive accounts receivable management",
      icon: "📈",
    },
    {
      title: "Denial Management",
      description: "Proactive denial prevention and recovery strategies",
      icon: "🛡️",
    },
  ];

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

  const processSteps = [
    {
      step: "1",
      title: "Practice Analysis",
      description:
        "We evaluate your current billing processes and identify revenue opportunities",
    },
    {
      step: "2",
      title: "Customized Onboarding",
      description:
        "Seamless integration with your existing systems and workflows",
    },
    {
      step: "3",
      title: "Active Management",
      description:
        "Our experts handle your entire billing cycle with precision",
    },
    {
      step: "4",
      title: "Continuous Optimization",
      description: "Ongoing performance monitoring and improvement strategies",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>VerityRCM | Maximize Your Medical Practice Revenue</title>
        <meta
          name="description"
          content="Advanced medical billing services that increase reimbursements, reduce denials, and free your team to focus on patient care."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">Verity</span>
                <span className="text-2xl font-bold text-gray-800">RCM</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a
                  href="#solutions"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Solutions
                </a>
                <a
                  href="#services"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Process
                </a>
                <a
                  href="#testimonials"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Testimonials
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Free Revenue Analysis
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#solutions"
                className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Solutions
              </a>
              <a
                href="#services"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Services
              </a>
              <a
                href="#process"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Process
              </a>
              <a
                href="#testimonials"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Testimonials
              </a>
              <div className="mt-4 p-2">
                <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Free Revenue Analysis
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Eliminate Revenue Leakage</span>
                  <span className="block text-blue-600 xl:inline">
                    With Expert Medical Billing
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  VerityRCM specializes in maximizing reimbursements, reducing
                  denials, and handling complex regulations so you can focus on
                  patient care.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#analysis"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Free Analysis
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-blue-50 flex items-center justify-center">
            <div className="relative w-4/5 h-4/5 bg-blue-100 rounded-lg p-8">
              <div className="absolute inset-0 border border-blue-200 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold mb-4">
                  Practice Performance Dashboard
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Collections Rate</span>
                      <span className="text-green-600">+28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Denial Rate</span>
                      <span className="text-red-600">-62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-red-500 h-2.5 rounded-full"
                        style={{ width: "12%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Reimbursement Speed</span>
                      <span className="text-green-600">45% faster</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
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

      {/* Pain Points & Solutions Section */}
      <div id="solutions" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Solutions
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Addressing Your Practice's Pain Points
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We understand the challenges you face and provide targeted
              solutions.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="relative bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl -top-6 left-1/2 transform -translate-x-1/2">
                    {point.icon}
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {point.description}
                    </p>
                    <div className="mt-4 p-3 bg-blue-50 rounded-md">
                      <p className="text-sm text-blue-700 font-medium">
                        {point.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Revenue Cycle Management
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              End-to-end solutions tailored to your practice's needs.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Process
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Partner With Your Practice
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A seamless transition with continuous support and transparent
              reporting.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    {index < processSteps.length - 1 && (
                      <div className="hidden sm:block h-0.5 w-full bg-gray-200 ml-10"></div>
                    )}
                  </div>
                  <div className="relative flex justify-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
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

      {/* CTA Section */}
      <div id="analysis" className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                Ready to increase your practice revenue?
              </span>
              <span className="block text-blue-200">
                Get a free revenue analysis today.
              </span>
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Discover how much revenue your practice could be recovering with
              our specialized billing services.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="practice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Practice Name
                  </label>
                  <input
                    type="text"
                    name="practice"
                    id="practice"
                    required
                    value={formData.practice}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="specialty"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Specialty
                    </label>
                    <select
                      name="specialty"
                      id="specialty"
                      required
                      value={formData.specialty}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="primary-care">Primary Care</option>
                      <option value="specialty-care">Specialty Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="employees"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Practice Size
                    </label>
                    <select
                      name="employees"
                      id="employees"
                      required
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select</option>
                      <option value="1-5">1-5 providers</option>
                      <option value="6-10">6-10 providers</option>
                      <option value="11-20">11-20 providers</option>
                      <option value="20+">20+ providers</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Request Free Analysis
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <span className="text-2xl font-bold text-white">Verity</span>
            <span className="text-2xl font-bold text-blue-400">RCM</span>
          </div>
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center mt-6">
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">
                Services
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">
                Testimonials
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-300 hover:text-white">
                Privacy
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2023 VerityRCM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
