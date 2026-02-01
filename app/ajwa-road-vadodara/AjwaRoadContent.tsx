"use client";

import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import Link from "next/link";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessHeroSlider } from "@/components/business-hero-slider";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { BusinessContactForm } from "@/components/business-contact-form";
import { 
  Building2, Home, Store, MapPin, Phone, Mail, 
  CheckCircle, TrendingUp,
  Shield, TreePine, Car, GraduationCap, Heart,
  Building, Banknote, Key, ArrowRight
} from "lucide-react";

const area = "ajwa-road";
const areaName = "Ajwa Road";

export default function AjwaRoadContent() {
  const business = getBusinessBySlug("real-estate");
  
  if (!business) {
    return null;
  }

  const services = [
    { title: "Flats for Sale", desc: `Premium 1BHK, 2BHK, 3BHK flats in ${areaName}`, icon: Building2, color: "blue" },
    { title: "Houses & Villas", desc: `Luxurious independent houses & villas in ${areaName}`, icon: Home, color: "green" },
    { title: "Commercial Property", desc: `Shops, offices & showrooms in ${areaName}`, icon: Store, color: "purple" },
    { title: "Rental Properties", desc: `Affordable flats & houses for rent in ${areaName}`, icon: Key, color: "orange" },
  ];

  const propertyTypes = [
    { title: "1 BHK Flats", price: "₹18-28 Lakhs", size: "450-650 sq.ft" },
    { title: "2 BHK Flats", price: "₹32-55 Lakhs", size: "850-1200 sq.ft" },
    { title: "3 BHK Flats", price: "₹55-95 Lakhs", size: "1200-1800 sq.ft" },
    { title: "4 BHK Flats", price: "₹85 Lakhs - 1.5 Cr", size: "1800-2500 sq.ft" },
    { title: "Row Houses", price: "₹65 Lakhs - 1.2 Cr", size: "1500-2200 sq.ft" },
    { title: "Independent Bungalows", price: "₹1.2 Cr - 3 Cr", size: "2500-5000 sq.ft" },
  ];

  const nearbyProjects = [
    { name: "Shree Residency", type: "2/3 BHK Apartments", status: "Ready to Move" },
    { name: "Ajwa Garden City", type: "Row Houses & Villas", status: "Under Construction" },
    { name: "Green Valley Heights", type: "Premium Flats", status: "Ready to Move" },
    { name: "Lakshmi Nagar", type: "Affordable Housing", status: "Nearing Completion" },
    { name: "Royal Orchid", type: "Luxury Villas", status: "New Launch" },
    { name: "Ajwa Paradise", type: "2/3/4 BHK Flats", status: "Ready to Move" },
  ];

  const amenities = [
    { name: "Ajwa Fun World", distance: "2 km", icon: TreePine },
    { name: "Ajwa Garden", distance: "3 km", icon: TreePine },
    { name: "NH-8 Highway", distance: "5 km", icon: Car },
    { name: "Schools & Colleges", distance: "1-3 km", icon: GraduationCap },
    { name: "Hospitals", distance: "2-4 km", icon: Heart },
    { name: "Shopping Centers", distance: "1-2 km", icon: Store },
  ];

  const faqs = [
    {
      q: "What is the average property price in Ajwa Road, Vadodara?",
      a: "Property prices in Ajwa Road range from ₹18 Lakhs for 1 BHK flats to ₹3 Crore+ for luxury bungalows. The average price per square foot is ₹3,500-5,500 depending on the project and amenities."
    },
    {
      q: "Is Ajwa Road a good area for real estate investment?",
      a: "Yes, Ajwa Road is one of the fastest-growing corridors in Vadodara with excellent appreciation potential. The area has seen 15-20% price appreciation in the last 3 years due to infrastructure development and proximity to Ajwa Fun World."
    },
    {
      q: "What are the upcoming infrastructure projects near Ajwa Road?",
      a: "Major upcoming projects include road widening, new flyovers, metro connectivity plans, and commercial hubs. The area is also seeing development of IT parks and educational institutions."
    },
    {
      q: "Are there affordable housing options in Ajwa Road?",
      a: "Yes, Ajwa Road offers affordable 1 BHK and 2 BHK flats starting from ₹18 Lakhs. Several PMAY-eligible projects are also available for first-time homebuyers."
    },
    {
      q: "What amenities are available near Ajwa Road properties?",
      a: "Ajwa Road offers excellent amenities including schools, hospitals, shopping centers, banks, restaurants, and recreational facilities. The famous Ajwa Fun World and Ajwa Garden are major attractions."
    }
  ];

  const relatedKeywords = realEstateKeywords.slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea={area} />
      
      <BusinessHeroSlider 
        business={business} 
        area={area} 
        heroTitle={`Real Estate in ${areaName}, Vadodara`}
        heroSubtitle={`Discover Premium Properties on Ajwa Road - Vadodara's Fastest Growing Real Estate Destination`}
      />

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Building2 className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">5000+</p>
              <p className="text-blue-200 text-sm">Happy Families</p>
            </div>
            <div className="flex flex-col items-center">
              <Building className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">150+</p>
              <p className="text-blue-200 text-sm">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">18%</p>
              <p className="text-blue-200 text-sm">Avg. Appreciation</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-blue-200 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Real Estate in Ajwa Road, Vadodara – Your Complete Property Guide
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                <strong>Ajwa Road</strong> has emerged as one of the most sought-after real estate destinations in Vadodara, Gujarat. 
                Located in the western part of the city, this rapidly developing corridor connects the main city to the famous 
                <strong> Ajwa Fun World</strong> and <strong>Ajwa Garden</strong>, making it a preferred choice for homebuyers and investors alike.
              </p>
              <p className="leading-relaxed mb-6">
                Whether you&apos;re looking for <strong>flats for sale in Ajwa Road</strong>, <strong>independent houses</strong>, 
                <strong>luxury villas</strong>, or <strong>commercial properties</strong>, this area offers diverse options to suit 
                every budget and requirement. The strategic location, coupled with excellent infrastructure development, has made 
                <strong> real estate in Ajwa Road, Vadodara</strong> a hot investment destination with promising returns.
              </p>
              <p className="leading-relaxed">
                In this comprehensive guide, we&apos;ll explore everything you need to know about <strong>property investment in Ajwa Road</strong> – 
                from current market trends and property prices to upcoming projects and investment opportunities. Whether you&apos;re a 
                first-time homebuyer or a seasoned investor, this guide will help you make an informed decision about your next 
                property purchase on Ajwa Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ajwa Road Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Invest in Real Estate on Ajwa Road?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Discover the key factors that make Ajwa Road one of the best locations for property investment in Vadodara
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">High Appreciation Potential</h3>
              <p className="text-gray-600">
                Ajwa Road has witnessed <strong>15-20% price appreciation</strong> over the last 3 years. With ongoing infrastructure 
                projects and increasing demand, property values are expected to rise further, making it an excellent investment choice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellent Connectivity</h3>
              <p className="text-gray-600">
                Ajwa Road enjoys seamless connectivity to <strong>NH-8</strong>, <strong>Vadodara Railway Station</strong>, and 
                <strong> Vadodara Airport</strong>. The proposed metro line will further enhance accessibility, boosting property demand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <TreePine className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Green & Peaceful Environment</h3>
              <p className="text-gray-600">
                Located away from the city&apos;s hustle-bustle, Ajwa Road offers a <strong>serene living environment</strong> with 
                proximity to <strong>Ajwa Garden</strong> and numerous green spaces, perfect for families seeking peaceful living.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Educational Hub</h3>
              <p className="text-gray-600">
                The area houses several <strong>reputed schools and colleges</strong> including international schools, engineering 
                colleges, and medical institutions, making it ideal for families with children.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Banknote className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Affordable Price Points</h3>
              <p className="text-gray-600">
                Compared to prime areas like Alkapuri and Akota, Ajwa Road offers <strong>20-30% lower property prices</strong> while 
                providing similar amenities, making it attractive for budget-conscious buyers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Building className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Rapid Development</h3>
              <p className="text-gray-600">
                <strong>New residential projects</strong>, shopping complexes, and commercial establishments are constantly coming up, 
                transforming Ajwa Road into a self-sufficient micro-market with all modern amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Real Estate Services in Ajwa Road
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Comprehensive property solutions for all your real estate needs on Ajwa Road, Vadodara
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-blue-500">
                <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <Link href="#contact" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types & Prices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Property Prices in Ajwa Road, Vadodara
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Current market rates for different property types on Ajwa Road (Updated January 2026)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {propertyTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2">{type.title} in {areaName}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">{type.price}</p>
                <p className="text-gray-500 text-sm">Area: {type.size}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Price Trend Analysis
            </h3>
            <p className="text-gray-700">
              The average property rate on Ajwa Road is <strong>₹3,500 - ₹5,500 per sq.ft</strong> depending on the project 
              and amenities. Premium projects with luxury amenities command prices up to <strong>₹6,500 per sq.ft</strong>. 
              Over the past 5 years, property prices have increased by approximately <strong>45-50%</strong>, making it one of 
              the best-performing real estate corridors in Vadodara.
            </p>
          </div>
        </div>
      </section>

      {/* About Ajwa Road - Detailed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Ajwa Road – Vadodara&apos;s Emerging Real Estate Hotspot
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  <strong>Ajwa Road</strong> stretches from the western outskirts of Vadodara city towards the scenic Ajwa Lake 
                  and the popular Ajwa Fun World. This 15-kilometer stretch has transformed from a quiet suburban road into a 
                  thriving residential and commercial hub over the past decade.
                </p>
                <p>
                  The area&apos;s growth story began with the development of <strong>Ajwa Fun World</strong> – Gujarat&apos;s largest 
                  amusement park – which attracted visitors from across the state. This footfall led to commercial development, 
                  followed by residential projects catering to the growing demand from young professionals and families.
                </p>
                <p>
                  Today, <strong>Ajwa Road real estate</strong> offers a perfect blend of urban conveniences and suburban tranquility. 
                  The area is characterized by wide roads, planned layouts, and a mix of affordable and premium housing options. 
                  Several reputed builders have launched projects here, including <strong>2 BHK flats</strong>, <strong>3 BHK apartments</strong>, 
                  <strong>row houses</strong>, and <strong>luxury villas</strong>.
                </p>
                <p>
                  The upcoming <strong>Vadodara Metro</strong> is expected to have a station near Ajwa Road, which will further 
                  boost property values and improve connectivity to the city center. Infrastructure developments like road widening, 
                  new flyovers, and improved drainage systems are already underway.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src="/images/properties/house-1.jpg"
                alt="Real Estate in Ajwa Road Vadodara"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Investment Highlights
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    RERA approved projects for buyer protection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Clear titles and legal documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Bank loan approved properties
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Rental yield of 3-4% annually
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Capital appreciation of 8-12% yearly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nearby Amenities & Infrastructure
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Ajwa Road offers excellent social infrastructure and amenities for comfortable living
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <amenity.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">{amenity.name}</h3>
                  <p className="text-gray-500 text-sm">{amenity.distance} away</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Landmarks Near Ajwa Road</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold text-lg mb-3">Educational Institutions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Delhi Public School (DPS)</li>
                  <li>• Navrachana International School</li>
                  <li>• Parul University Campus</li>
                  <li>• GSFC University</li>
                  <li>• Multiple CBSE & GSEB Schools</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold text-lg mb-3">Healthcare Facilities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bhailal Amin General Hospital</li>
                  <li>• Kiran Multi-Specialty Hospital</li>
                  <li>• Sterling Hospital</li>
                  <li>• Multiple Clinics & Pharmacies</li>
                  <li>• 24x7 Emergency Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Popular Residential Projects on Ajwa Road
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Explore the top residential projects from reputed builders on Ajwa Road
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nearbyProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Ready to Move" ? "bg-green-100 text-green-700" :
                    project.status === "Under Construction" ? "bg-yellow-100 text-yellow-700" :
                    project.status === "New Launch" ? "bg-blue-100 text-blue-700" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600">{project.type}</p>
                <Link href="#contact" className="text-blue-600 font-medium text-sm mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Get Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How to Buy Property on Ajwa Road – Step by Step Guide
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Follow these simple steps to purchase your dream property on Ajwa Road, Vadodara
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: "Define Your Requirements", desc: "Determine your budget, preferred property type (flat, villa, plot), size requirements, and must-have amenities." },
                { step: 2, title: "Research the Market", desc: "Explore different projects on Ajwa Road, compare prices, check builder reputation, and read reviews from existing residents." },
                { step: 3, title: "Site Visits", desc: "Visit shortlisted properties, check the construction quality, verify amenities, and assess the neighborhood." },
                { step: 4, title: "Legal Verification", desc: "Verify RERA registration, check property documents, title clearance, and ensure no pending litigations." },
                { step: 5, title: "Negotiate & Book", desc: "Negotiate the best price, understand payment plans, and make the booking with a token amount." },
                { step: 6, title: "Complete Documentation", desc: "Complete sale agreement, arrange home loan if needed, and register the property with local authorities." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-white p-6 rounded-xl shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Common questions about real estate investment on Ajwa Road, Vadodara
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Looking for Property on Ajwa Road, Vadodara?
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Connect with our expert property consultants who have in-depth knowledge of the Ajwa Road 
                real estate market. We&apos;ll help you find the perfect property that matches your requirements and budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>+91 63535 83148</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>info@vadodarahomes.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <span>Ajwa Road, Vadodara, Gujarat 390019</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-800 rounded-xl">
                <h3 className="font-bold mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> 15+ Years of Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> 500+ Properties Listed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Free Site Visits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Home Loan Assistance
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Get Free Consultation</h3>
              <BusinessContactForm business={business} area={area} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Real Estate Searches in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedKeywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/real-estate-in-vadodara/${keyword.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-full text-sm transition-colors"
              >
                {keyword.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-6">
              Complete Guide to Buying Property on Ajwa Road, Vadodara
            </h2>
            <p>
              <strong>Ajwa Road</strong> has established itself as one of the most promising real estate corridors in Vadodara. 
              This comprehensive guide covers everything you need to know about investing in <strong>property on Ajwa Road</strong>, 
              from market trends and price analysis to future growth prospects.
            </p>
            <h3>Real Estate Market Overview</h3>
            <p>
              The <strong>real estate market on Ajwa Road</strong> has shown consistent growth over the past decade. What was once 
              a quiet suburban stretch has transformed into a bustling residential hub with numerous <strong>apartments</strong>, 
              <strong>villas</strong>, and <strong>commercial properties</strong>. The area attracts a diverse mix of buyers – 
              from young IT professionals to retired individuals seeking peaceful living.
            </p>
            <p>
              <strong>Property prices on Ajwa Road</strong> vary based on location, project quality, and amenities. Areas closer 
              to the main city command higher prices, while plots and projects towards Ajwa Fun World offer more affordable options. 
              The average rate ranges from <strong>₹3,500 to ₹6,000 per square foot</strong> for residential properties.
            </p>
            <h3>Future Growth Prospects</h3>
            <p>
              Several factors indicate strong future growth for <strong>Ajwa Road real estate</strong>:
            </p>
            <ul>
              <li><strong>Metro Connectivity:</strong> The proposed Vadodara Metro will have stations along Ajwa Road, significantly improving accessibility.</li>
              <li><strong>Road Infrastructure:</strong> Ongoing road widening and flyover projects will reduce travel time to the city center.</li>
              <li><strong>Commercial Development:</strong> New shopping malls, IT parks, and business centers are planned for the area.</li>
              <li><strong>Educational Institutions:</strong> Several new schools and colleges are being established, increasing the area&apos;s appeal for families.</li>
            </ul>
            <h3>Best Time to Invest</h3>
            <p>
              Experts suggest that the current phase represents an excellent opportunity to invest in <strong>Ajwa Road properties</strong>. 
              With major infrastructure projects underway and property prices still relatively affordable compared to established areas, 
              early investors stand to benefit from significant appreciation once these developments are completed.
            </p>
            <p>
              Whether you&apos;re looking for <strong>flats for sale in Ajwa Road</strong>, <strong>plots for construction</strong>, 
              or <strong>ready-to-move villas</strong>, our team of experienced property consultants can help you find the perfect 
              investment opportunity. Contact us today for personalized assistance with your property search on Ajwa Road, Vadodara.
            </p>
          </div>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area={area} />
    </div>
  );
}
