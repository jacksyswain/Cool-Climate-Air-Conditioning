import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function ACRepairHyderabad() {
  return (
    <>
      <Helmet>
        <title>Best AC Repair in Hyderabad | Cool Climate Air Conditioning</title>
        <meta
          name="description"
          content="Looking for reliable AC repair in Hyderabad? Cool Climate provides same-day AC service, gas filling, installation & maintenance across Hyderabad. Call 8523056414 now."
        />
        <link
          rel="canonical"
          href="https://coolclimatehyd.in/ac-repair-hyderabad"
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cool Climate Air Conditioning",
            "areaServed": "Hyderabad",
            "telephone": "+918523056414",
            "url": "https://coolclimatehyd.in/ac-repair-hyderabad"
          }
          `}
        </script>
      </Helmet>

      <div className="bg-[#4A4F55] text-[#F2E8C9] min-h-screen py-16">
        <div className="container max-w-5xl">

          <h1 className="text-4xl font-bold text-[#D4AF37] mb-6">
            Best AC Repair Service in Hyderabad
          </h1>

          <p className="mb-6 text-lg leading-relaxed">
            Cool Climate Air Conditioning offers professional and affordable AC repair services in Hyderabad.
            We provide same-day doorstep service for split and window AC units across Kukatpally,
            Madhapur, Gachibowli, Kondapur, Miyapur, Secunderabad and nearby areas.
          </p>

          {/* Services Section */}
          <div className="bg-[#5A6066] border border-[#737A82] p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-2xl font-semibold text-[#C89F2A] mb-4">
              Our AC Repair & Service Solutions
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>AC Cooling Issue Repair</li>
              <li>AC Gas Filling & Refilling</li>
              <li>Compressor & PCB Repair</li>
              <li>Water Leakage Fixing</li>
              <li>AC Installation & Uninstallation</li>
              <li>Annual Maintenance Contracts (AMC)</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#5A6066] border border-[#737A82] p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-2xl font-semibold text-[#C89F2A] mb-4">
              Why Choose Cool Climate in Hyderabad?
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>✔ Same-Day AC Repair Service</li>
              <li>✔ Experienced & Verified Technicians</li>
              <li>✔ Transparent Pricing</li>
              <li>✔ Service Available Across Hyderabad</li>
              <li>✔ Quick Response & Customer Support</li>
            </ul>
          </div>

          {/* Near Me Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C89F2A] mb-3">
              AC Repair Near You in Hyderabad
            </h2>
            <p>
              Searching for “AC repair near me” in Hyderabad? Our team reaches your location quickly 
              and ensures efficient and long-lasting repair solutions.
            </p>
          </div>

          {/* Areas Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C89F2A] mb-3">
              Areas We Serve
            </h2>
            <p>
              Kukatpally, Madhapur, Gachibowli, Kondapur, Miyapur, Ameerpet,
              Hitech City, Secunderabad, Jubilee Hills, Banjara Hills and surrounding areas.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C89F2A] mb-4">
              Frequently Asked Questions
            </h2>

            <h3 className="font-semibold text-[#E8C558] mb-1">
              How much does AC repair cost in Hyderabad?
            </h3>
            <p className="mb-4">
              AC repair charges typically range from ₹500 to ₹2500 depending on the issue and spare parts required.
            </p>

            <h3 className="font-semibold text-[#E8C558] mb-1">
              Do you provide same-day AC service in Hyderabad?
            </h3>
            <p>
              Yes, we provide fast and same-day AC repair services across Hyderabad.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#52575D] border border-[#737A82] p-6 rounded-lg text-center shadow-md">
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3">
              Call Now for AC Repair in Hyderabad
            </h2>
            <p className="mb-4">
              📞 Contact us at <strong>8523056414</strong> for reliable AC repair and servicing.
            </p>

            <Link
              to="/booking"
              className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#E3C15A] transition"
            >
              Book AC Service Now
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}