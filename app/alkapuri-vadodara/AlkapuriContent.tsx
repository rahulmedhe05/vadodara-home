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
  CheckCircle, TrendingUp, Star,
  Shield, TreePine, Car, GraduationCap, Heart,
  Building, Banknote, Key, ArrowRight, Landmark,
  Coffee, ShoppingBag, Plane, Train, Hotel
} from "lucide-react";

const area = "alkapuri";
const areaName = "Alkapuri";

export default function AlkapuriContent() {
  const business = getBusinessBySlug("real-estate");
  
  if (!business) {
    return null;
  }

  const services = [
    { title: "Commercial Offices", desc: `Premium office spaces on R.C. Dutt Road & surroundings`, icon: Building, color: "blue" },
    { title: "Retail Showrooms", desc: `High-visibility retail spaces in prime locations`, icon: Store, color: "green" },
    { title: "Luxury Apartments", desc: `Premium 3BHK, 4BHK flats near Sayaji Garden`, icon: Building2, color: "purple" },
    { title: "Co-Working Spaces", desc: `Modern shared office solutions for startups`, icon: Coffee, color: "orange" },
  ];

  const propertyTypes = [
    { title: "2 BHK Flats", price: "₹60-90 Lakhs", size: "1100-1500 sq.ft" },
    { title: "3 BHK Flats", price: "₹90 Lakhs - 1.5 Cr", size: "1500-2200 sq.ft" },
    { title: "4 BHK Flats", price: "₹1.5 Cr - 2.5 Cr", size: "2200-3500 sq.ft" },
    { title: "Office Spaces", price: "₹8,000-15,000/sq.ft", size: "500-5000 sq.ft" },
    { title: "Retail Showrooms", price: "₹12,000-25,000/sq.ft", size: "300-2000 sq.ft" },
    { title: "Commercial Complex", price: "₹5 Cr - 25 Cr", size: "5000-25000 sq.ft" },
  ];

  const nearbyProjects = [
    { name: "Alkapuri Tower", type: "Commercial Offices", status: "Ready to Move" },
    { name: "Sayaji Residency", type: "3/4 BHK Luxury Flats", status: "Ready to Move" },
    { name: "R.C. Dutt Business Hub", type: "Premium Offices", status: "Under Construction" },
    { name: "Garden View Heights", type: "2/3 BHK Apartments", status: "Ready to Move" },
    { name: "Alkapuri Business Center", type: "IT & Corporate Offices", status: "New Launch" },
    { name: "The Central Mall", type: "Retail & Entertainment", status: "Ready to Move" },
  ];

  const amenities = [
    { name: "Sayaji Garden (Kamati Baug)", distance: "0.2 km", icon: TreePine },
    { name: "Vadodara Railway Station", distance: "2 km", icon: Train },
    { name: "Vadodara Airport", distance: "6 km", icon: Plane },
    { name: "5-Star Hotels", distance: "0.5 km", icon: Hotel },
    { name: "Premium Banks & ATMs", distance: "0.1 km", icon: Landmark },
    { name: "High-End Shopping", distance: "0.3 km", icon: ShoppingBag },
  ];

  const faqs = [
    {
      q: "Why is Alkapuri considered the best commercial location in Vadodara?",
      a: "Alkapuri is Vadodara's CBD (Central Business District) with R.C. Dutt Road being the prime commercial corridor. It houses major corporate offices, banks, hotels, and retail showrooms. Excellent connectivity, prestigious address, and proximity to Sayaji Garden make it the preferred business location."
    },
    {
      q: "What is the commercial property rate in Alkapuri?",
      a: "Commercial property rates in Alkapuri range from ₹8,000-15,000 per sq.ft for office spaces and ₹12,000-25,000 per sq.ft for retail showrooms on main roads. Prime locations on R.C. Dutt Road can command even higher rates."
    },
    {
      q: "Are there residential options available in Alkapuri?",
      a: "Yes, Alkapuri has several premium residential complexes offering 2BHK, 3BHK, and 4BHK apartments. Prices range from ₹60 Lakhs to ₹2.5 Crore. Properties near Sayaji Garden are especially popular among families and senior professionals."
    },
    {
      q: "What makes Alkapuri ideal for business setup?",
      a: "Alkapuri offers unmatched business advantages - central location, proximity to railway station and airport, presence of major banks and financial institutions, luxury hotels for client meetings, and a prestigious address that enhances brand image."
    },
    {
      q: "Is Alkapuri good for rental income?",
      a: "Absolutely! Alkapuri offers the highest rental yields in Vadodara - 5-7% for commercial properties and 3-4% for residential. The constant demand from corporates, professionals, and retailers ensures minimal vacancy periods."
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
        heroSubtitle={`Vadodara's Premier Business District & Lifestyle Destination`}
      />

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Landmark className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">CBD</p>
              <p className="text-emerald-200 text-sm">Business District</p>
            </div>
            <div className="flex flex-col items-center">
              <Building className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-emerald-200 text-sm">Business Offices</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">7%</p>
              <p className="text-emerald-200 text-sm">Rental Yield</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">5-Star</p>
              <p className="text-emerald-200 text-sm">Lifestyle Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Real Estate in Alkapuri, Vadodara – The Heart of Commerce & Culture
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                <strong>Alkapuri</strong> is the pulsating heart of Vadodara, where business meets lifestyle in perfect harmony. 
                Home to the iconic <strong>Sayaji Garden (Kamati Baug)</strong>, the prestigious <strong>R.C. Dutt Road</strong>, 
                and the city&apos;s finest hotels, restaurants, and retail establishments, Alkapuri represents the pinnacle of 
                urban development in Gujarat&apos;s cultural capital.
              </p>
              <p className="leading-relaxed mb-6">
                <strong>Real estate in Alkapuri</strong> is synonymous with prime location and premium value. Whether you&apos;re 
                seeking a <strong>corporate office on R.C. Dutt Road</strong>, a <strong>retail showroom with high visibility</strong>, 
                or a <strong>luxury apartment overlooking Sayaji Garden</strong>, Alkapuri offers unmatched opportunities for 
                businesses and residents who demand the best.
              </p>
              <p className="leading-relaxed">
                The area&apos;s strategic position – just 2 km from the railway station and 6 km from the airport – combined with 
                its rich cultural heritage and modern infrastructure, makes <strong>Alkapuri property</strong> the most sought-after 
                in Vadodara. Here, every address is a statement of success, and every investment is backed by decades of proven 
                appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Alkapuri Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Alkapuri is Vadodara&apos;s Most Valuable Location
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Discover the unique advantages that make Alkapuri the undisputed leader in Vadodara real estate
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-500">
              <Landmark className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Central Business District</h3>
              <p className="text-gray-600">
                Alkapuri is Vadodara&apos;s official CBD with <strong>R.C. Dutt Road</strong> being the prime commercial artery. 
                Major banks, corporate offices, and multinational companies have their presence here, making it the business 
                nerve center of the city.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
              <TreePine className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Sayaji Garden Heritage</h3>
              <p className="text-gray-600">
                The historic <strong>Sayaji Garden</strong> – one of India&apos;s largest public gardens – is Alkapuri&apos;s crown jewel. 
                Properties near the garden enjoy premium valuations and offer residents a unique blend of urban convenience 
                and natural beauty.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Unmatched Connectivity</h3>
              <p className="text-gray-600">
                <strong>2 km from Railway Station</strong>, <strong>6 km from Airport</strong>, and connected to all major 
                highways. The proposed metro will have multiple stations in Alkapuri, further enhancing accessibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
              <Hotel className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Hospitality & Entertainment</h3>
              <p className="text-gray-600">
                Home to <strong>5-star hotels</strong> like Welcomhotel and Express Inn, fine dining restaurants, multiplexes, 
                and premium shopping destinations. Everything for business and leisure is at your doorstep.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <Banknote className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Highest Rental Returns</h3>
              <p className="text-gray-600">
                Alkapuri offers <strong>5-7% rental yield for commercial</strong> and <strong>3-4% for residential</strong> – 
                the highest in Vadodara. Strong corporate demand ensures properties are rarely vacant.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Consistent Appreciation</h3>
              <p className="text-gray-600">
                Property values in Alkapuri have shown <strong>steady 8-12% annual appreciation</strong>. Being a fully 
                developed area with limited new supply, prices are supported by strong fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real Estate Services in Alkapuri
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Specialized property solutions for Alkapuri&apos;s commercial and residential markets
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-emerald-500">
                <service.icon className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <Link href="#contact" className="text-emerald-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
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
            Property Prices in Alkapuri, Vadodara
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Current market rates for commercial and residential properties (Updated January 2026)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {propertyTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2">{type.title} in {areaName}</h3>
                <p className="text-2xl font-bold text-emerald-600 mb-1">{type.price}</p>
                <p className="text-gray-500 text-sm">Area: {type.size}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              Commercial vs Residential Analysis
            </h3>
            <p className="text-gray-700">
              Alkapuri&apos;s property market is unique in Vadodara with <strong>commercial rates exceeding residential</strong>. 
              R.C. Dutt Road commands <strong>₹15,000-25,000 per sq.ft</strong> for prime retail. Residential properties near 
              Sayaji Garden average <strong>₹6,500-9,000 per sq.ft</strong>. The area offers limited new inventory, with most 
              transactions being resales, which supports price stability.
            </p>
          </div>
        </div>
      </section>

      {/* About Alkapuri - Detailed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Alkapuri – Where History Meets Modern Commerce
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  <strong>Alkapuri</strong> takes its name from the Alka Cinema, which was once a landmark in the area. 
                  However, the locality&apos;s prominence predates this, going back to the Gaekwad era when the adjacent 
                  <strong> Sayaji Garden</strong> was established as a royal garden in 1879. This heritage connection gives 
                  Alkapuri a unique cultural significance that transcends mere commercial value.
                </p>
                <p>
                  The development of <strong>R.C. Dutt Road</strong> (named after freedom fighter Romesh Chunder Dutt) in 
                  the post-independence era transformed Alkapuri into Vadodara&apos;s commercial hub. Today, this tree-lined 
                  boulevard houses some of the city&apos;s most valuable real estate, with banks, corporate offices, and 
                  luxury showrooms occupying every inch of frontage.
                </p>
                <p>
                  <strong>Alkapuri real estate</strong> is characterized by its mix of commercial and residential properties. 
                  While the main roads are dominated by businesses, the interior lanes feature well-maintained residential 
                  complexes that offer the rare combination of central location with relatively peaceful living.
                </p>
                <p>
                  The area has seen recent redevelopment with older buildings making way for modern commercial complexes 
                  and luxury apartments. These new constructions adhere to contemporary standards while respecting the 
                  area&apos;s established character, ensuring <strong>Alkapuri property</strong> remains attractive to both 
                  traditional businesses and modern enterprises.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src="/images/properties/commercial-1.jpg"
                alt="Commercial Real Estate in Alkapuri Vadodara"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Business Advantages
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    Prestigious corporate address
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    Walk-in client accessibility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    Proximity to banks & institutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    5-star hotels for client meetings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    Premium talent attraction
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
            Prime Location Advantages
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Everything a business or resident needs is within walking distance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <amenity.icon className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">{amenity.name}</h3>
                  <p className="text-gray-500 text-sm">{amenity.distance} away</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Alkapuri Business Ecosystem</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-emerald-600" />
                  Financial Services
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• HDFC Bank Regional Office</li>
                  <li>• ICICI Bank Branch</li>
                  <li>• State Bank of India</li>
                  <li>• Axis Bank & Kotak Mahindra</li>
                  <li>• Multiple CA & Legal Firms</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-emerald-600" />
                  Hospitality & Dining
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Welcomhotel by ITC</li>
                  <li>• Express Inn</li>
                  <li>• Premium restaurants</li>
                  <li>• Business lounges</li>
                  <li>• Conference facilities</li>
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
            Featured Properties in Alkapuri
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Premium commercial and residential properties in prime locations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nearbyProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-emerald-500 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Ready to Move" ? "bg-green-100 text-green-700" :
                    project.status === "Under Construction" ? "bg-yellow-100 text-yellow-700" :
                    "bg-emerald-100 text-emerald-700"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600">{project.type}</p>
                <Link href="#contact" className="text-emerald-600 font-medium text-sm mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Get Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Setup Guide */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Setting Up Business in Alkapuri
            </h2>
            <p className="text-xl text-emerald-100 text-center mb-12">
              A step-by-step guide for entrepreneurs and corporates looking to establish presence in Vadodara&apos;s CBD
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">For Startups & SMEs</h3>
                <ul className="space-y-3 text-emerald-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Start with co-working spaces (₹8,000-15,000/seat/month)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Graduate to small offices (500-1000 sq.ft)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Leverage Alkapuri address for credibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Access to networking events & business community</span>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">For Corporates & MNCs</h3>
                <ul className="space-y-3 text-emerald-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Premium office spaces on R.C. Dutt Road</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Full-floor options in commercial towers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Build-to-suit solutions available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Adjacent to 5-star hotels for client hosting</span>
                  </li>
                </ul>
              </div>
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
            Common queries about real estate in Alkapuri, Vadodara
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
      <section id="contact" className="py-16 bg-emerald-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Your Ideal Space in Alkapuri
              </h2>
              <p className="text-lg mb-6 text-emerald-100">
                Whether you&apos;re looking for a commercial office, retail showroom, or luxury residence, our Alkapuri 
                specialists can help you find the perfect property that aligns with your business goals and lifestyle.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>+91 63535 83148</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>commercial@vadodarahomes.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <span>R.C. Dutt Road, Alkapuri, Vadodara 390007</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-800 rounded-xl">
                <h3 className="font-bold mb-2">We Specialize In</h3>
                <ul className="space-y-2 text-emerald-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Commercial leasing & sales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Retail space acquisition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Corporate relocations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Investment advisory
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Request Property Information</h3>
              <BusinessContactForm business={business} area={area} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore More Properties in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedKeywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/real-estate-in-vadodara/${keyword.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-emerald-100 hover:text-emerald-700 rounded-full text-sm transition-colors"
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
              Complete Guide to Commercial & Residential Real Estate in Alkapuri
            </h2>
            <p>
              <strong>Alkapuri</strong> stands as Vadodara&apos;s most important commercial district, offering unique 
              opportunities for businesses and residents seeking prime location advantages.
            </p>
            <h3>Understanding Alkapuri&apos;s Property Market</h3>
            <p>
              The <strong>Alkapuri real estate market</strong> is distinct from other Vadodara localities due to its 
              dual commercial-residential character. R.C. Dutt Road properties command premium rates due to their 
              visibility and footfall, while interior residential areas offer relatively peaceful living with central 
              location benefits.
            </p>
            <p>
              <strong>Commercial property in Alkapuri</strong> is in constant demand from banks, retail brands, 
              professional services firms, and corporate offices. The limited supply of quality commercial space 
              keeps vacancy rates low and rental yields high. Businesses value the prestige of an Alkapuri address 
              and the convenience of being in the city&apos;s business hub.
            </p>
            <h3>Investment Opportunities</h3>
            <p>
              For investors, <strong>Alkapuri offers multiple avenues</strong>:
            </p>
            <ul>
              <li><strong>Commercial Units:</strong> High rental yields of 5-7% with strong capital appreciation.</li>
              <li><strong>Retail Spaces:</strong> Premium returns for well-located showrooms on main roads.</li>
              <li><strong>Residential Flats:</strong> Steady demand from professionals working in the CBD.</li>
              <li><strong>Mixed-Use Properties:</strong> Ground floor commercial with upper residential floors.</li>
            </ul>
            <h3>Future Outlook</h3>
            <p>
              With the <strong>Vadodara Metro</strong> planned to have stations in Alkapuri, property values are 
              expected to see additional appreciation. The ongoing beautification of Sayaji Garden and surrounding 
              areas will further enhance the locality&apos;s appeal. For those seeking to invest in Vadodara&apos;s most 
              established and valuable location, <strong>Alkapuri property</strong> remains the gold standard.
            </p>
            <p>
              Contact our commercial real estate specialists today to explore available <strong>office spaces</strong>, 
              <strong>retail showrooms</strong>, and <strong>luxury apartments in Alkapuri</strong>. We provide end-to-end 
              support from property search to registration, ensuring a smooth transaction experience.
            </p>
          </div>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area={area} />
    </div>
  );
}
