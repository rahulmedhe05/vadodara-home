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
  Building, Banknote, Key, ArrowRight, Trophy,
  Dumbbell, ShoppingBag, Utensils
} from "lucide-react";

const area = "akota";
const areaName = "Akota";

export default function AkotaContent() {
  const business = getBusinessBySlug("real-estate");
  
  if (!business) {
    return null;
  }

  const services = [
    { title: "Premium Flats", desc: `Luxury 2BHK, 3BHK, 4BHK apartments in ${areaName}`, icon: Building2, color: "blue" },
    { title: "Bungalows & Villas", desc: `Exclusive independent bungalows in ${areaName}`, icon: Home, color: "green" },
    { title: "Penthouses", desc: `Sky-high living with panoramic views in ${areaName}`, icon: Building, color: "purple" },
    { title: "Commercial Spaces", desc: `Prime office & retail spaces in ${areaName}`, icon: Store, color: "orange" },
  ];

  const propertyTypes = [
    { title: "2 BHK Flats", price: "₹55-85 Lakhs", size: "1000-1400 sq.ft" },
    { title: "3 BHK Flats", price: "₹85 Lakhs - 1.4 Cr", size: "1400-2000 sq.ft" },
    { title: "4 BHK Flats", price: "₹1.2 Cr - 2.2 Cr", size: "2000-3000 sq.ft" },
    { title: "Penthouses", price: "₹1.8 Cr - 4 Cr", size: "3000-5000 sq.ft" },
    { title: "Independent Bungalows", price: "₹2 Cr - 6 Cr", size: "3000-8000 sq.ft" },
    { title: "Commercial Offices", price: "₹45 Lakhs - 2 Cr", size: "500-3000 sq.ft" },
  ];

  const nearbyProjects = [
    { name: "Akota Gardens Residency", type: "3/4 BHK Luxury Apartments", status: "Ready to Move" },
    { name: "Stadium View Heights", type: "Premium Flats", status: "Ready to Move" },
    { name: "Parivar Residency", type: "2/3 BHK Apartments", status: "Under Construction" },
    { name: "Akota Elite Villas", type: "Luxury Bungalows", status: "New Launch" },
    { name: "The Pinnacle", type: "Penthouses & Sky Villas", status: "Under Construction" },
    { name: "Shreeji Tower", type: "2/3 BHK Premium Flats", status: "Ready to Move" },
  ];

  const amenities = [
    { name: "Akota Stadium", distance: "0.5 km", icon: Trophy },
    { name: "Race Course Road", distance: "1 km", icon: Car },
    { name: "Inox Multiplex", distance: "1.5 km", icon: Star },
    { name: "GSFC University", distance: "2 km", icon: GraduationCap },
    { name: "Sterling Hospital", distance: "1 km", icon: Heart },
    { name: "Alkapuri Market", distance: "2 km", icon: ShoppingBag },
  ];

  const faqs = [
    {
      q: "What makes Akota a premium residential area in Vadodara?",
      a: "Akota is considered Vadodara's most prestigious locality due to its proximity to Akota Stadium, excellent infrastructure, tree-lined streets, low population density, and presence of high-net-worth residents. The area offers a perfect blend of urban amenities with a peaceful, green environment."
    },
    {
      q: "What is the average property price in Akota, Vadodara?",
      a: "Akota commands premium prices with rates ranging from ₹5,500 to ₹8,500 per sq.ft. 2 BHK flats start from ₹55 Lakhs, 3 BHK from ₹85 Lakhs, and luxury bungalows can go up to ₹6 Crore depending on location and amenities."
    },
    {
      q: "Is Akota good for families with children?",
      a: "Absolutely! Akota is ideal for families with excellent schools like Navrachana, DPS, and GIIS nearby. The area has multiple parks, the famous Akota Stadium for sports activities, and a safe, family-friendly environment."
    },
    {
      q: "What are the connectivity options from Akota?",
      a: "Akota enjoys excellent connectivity - 3 km from Vadodara Railway Station, 8 km from Airport, direct access to Race Course Road and Productivity Road. The proposed metro line will have a station near Akota, further enhancing connectivity."
    },
    {
      q: "Are there good investment opportunities in Akota?",
      a: "Yes, Akota offers stable appreciation of 8-10% annually with high rental demand from professionals and families. The limited land availability and premium status ensure property values remain strong."
    }
  ];

  const relatedKeywords = realEstateKeywords.slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea={area} />
      
      <BusinessHeroSlider 
        business={business} 
        area={area} 
        heroTitle={`Premium Real Estate in ${areaName}, Vadodara`}
        heroSubtitle={`Experience Luxury Living in Vadodara's Most Prestigious Neighborhood`}
      />

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Trophy className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">#1</p>
              <p className="text-amber-200 text-sm">Premium Locality</p>
            </div>
            <div className="flex flex-col items-center">
              <Building className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">200+</p>
              <p className="text-amber-200 text-sm">Luxury Properties</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">10%</p>
              <p className="text-amber-200 text-sm">Annual Appreciation</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 mb-2" />
              <p className="font-bold text-2xl">4.9/5</p>
              <p className="text-amber-200 text-sm">Livability Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Real Estate in Akota, Vadodara – The Crown Jewel of Vadodara&apos;s Property Market
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                <strong>Akota</strong> stands as the epitome of premium living in Vadodara. Home to the iconic <strong>Akota Stadium</strong>, 
                this upscale neighborhood has been the preferred address for industrialists, business owners, doctors, and senior executives 
                for decades. The area&apos;s tree-lined avenues, spacious bungalow plots, and well-maintained infrastructure make it the most 
                coveted residential destination in the city.
              </p>
              <p className="leading-relaxed mb-6">
                <strong>Real estate in Akota</strong> represents the pinnacle of Vadodara&apos;s property market. Whether you&apos;re seeking a 
                <strong> luxury apartment overlooking Akota Stadium</strong>, an <strong>independent bungalow with a private garden</strong>, 
                or a <strong>premium penthouse with city views</strong>, Akota offers exclusive options that cater to discerning buyers who 
                refuse to compromise on quality and prestige.
              </p>
              <p className="leading-relaxed">
                The area&apos;s strategic location provides seamless access to <strong>Race Course Road</strong>, <strong>Alkapuri</strong>, 
                and the city center, while maintaining the serenity that distinguishes premium residential neighborhoods. With limited new 
                construction opportunities and consistently high demand, <strong>property in Akota</strong> has proven to be one of the 
                safest and most rewarding real estate investments in Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Akota Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Akota is Vadodara&apos;s Most Premium Address
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Discover what makes Akota the undisputed leader in Vadodara&apos;s luxury real estate segment
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-amber-500">
              <Trophy className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Prestigious Address</h3>
              <p className="text-gray-600">
                Akota has been home to Vadodara&apos;s elite for generations. Owning property here is a <strong>status symbol</strong> that 
                reflects success and refined taste. The neighborhood&apos;s exclusivity is unmatched in the city.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
              <TreePine className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Green & Spacious</h3>
              <p className="text-gray-600">
                Unlike crowded city areas, Akota features <strong>wide roads, mature trees, and ample open spaces</strong>. Many properties 
                have private gardens, and the area around Akota Stadium provides excellent recreational space.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <Dumbbell className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Sports & Recreation Hub</h3>
              <p className="text-gray-600">
                The <strong>Akota Stadium</strong> is the center of sporting activities with facilities for cricket, athletics, and fitness. 
                Residents enjoy morning walks, jogging tracks, and sports facilities right at their doorstep.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
              <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
              <p className="text-gray-600">
                Top schools like <strong>Navrachana International</strong>, <strong>DPS</strong>, and <strong>Delhi Public School</strong> are 
                within 2-3 km. GSFC University and MS University add to the educational ecosystem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <Heart className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Premium Healthcare</h3>
              <p className="text-gray-600">
                <strong>Sterling Hospital</strong>, <strong>Bhailal Amin Hospital</strong>, and multiple specialty clinics ensure 
                world-class healthcare is always nearby. The area has the highest concentration of medical facilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <TrendingUp className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Stable Appreciation</h3>
              <p className="text-gray-600">
                Akota property values have shown <strong>consistent 8-10% annual appreciation</strong>. Limited supply and high demand 
                from HNIs ensure your investment is protected against market volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Exclusive Property Services in Akota
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Tailored real estate solutions for Akota&apos;s distinguished clientele
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-amber-500">
                <service.icon className="w-12 h-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <Link href="#contact" className="text-amber-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
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
            Property Prices in Akota, Vadodara
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Current market rates for premium properties in Akota (Updated January 2026)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {propertyTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2">{type.title} in {areaName}</h3>
                <p className="text-2xl font-bold text-amber-600 mb-1">{type.price}</p>
                <p className="text-gray-500 text-sm">Area: {type.size}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-amber-600" />
              Premium Pricing Analysis
            </h3>
            <p className="text-gray-700">
              Akota commands the highest property rates in Vadodara at <strong>₹5,500 - ₹8,500 per sq.ft</strong> for residential 
              properties. Prime locations near Akota Stadium can fetch up to <strong>₹10,000 per sq.ft</strong>. Despite premium 
              pricing, demand consistently outstrips supply, with properties often selling within weeks of listing. The area has 
              delivered <strong>85% appreciation over the last decade</strong>, outperforming most other localities.
            </p>
          </div>
        </div>
      </section>

      {/* About Akota - Detailed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Akota – A Legacy of Elegance and Excellence
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  <strong>Akota</strong> derives its significance from being one of Vadodara&apos;s oldest planned neighborhoods. 
                  Developed during the pre-independence era, the area was designed with wide plots, garden spaces, and 
                  infrastructure that was ahead of its time. This legacy planning is evident even today in the spacious 
                  layouts and tree-covered streets that define Akota.
                </p>
                <p>
                  The <strong>Akota Stadium</strong>, built in the 1960s, became the heart of the neighborhood and a symbol of 
                  Vadodara&apos;s sporting culture. The stadium has hosted numerous international cricket matches and national 
                  events, adding to Akota&apos;s prestige. Properties around the stadium are considered the most valuable in the city.
                </p>
                <p>
                  Over the decades, <strong>Akota real estate</strong> has attracted the who&apos;s who of Vadodara – from industrialists 
                  and diamond merchants to doctors and corporate executives. This concentration of affluent residents has led to the 
                  development of premium amenities, upscale restaurants, designer boutiques, and exclusive clubs in the area.
                </p>
                <p>
                  Today, while maintaining its old-world charm, Akota is seeing the rise of <strong>luxury high-rises</strong> and 
                  <strong>premium apartment complexes</strong> that offer modern amenities while respecting the area&apos;s aesthetic 
                  character. These developments cater to young professionals and NRIs who wish to reside in Vadodara&apos;s finest locality.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src="/images/properties/villa-1.jpg"
                alt="Premium Real Estate in Akota Vadodara"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-600" />
                  Premium Investment Features
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    Limited supply ensures value retention
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    High rental demand from executives
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    Prestigious address adds intangible value
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    Recession-resistant property values
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    Strong resale market with quick turnaround
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
            World-Class Amenities in Akota
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Everything you need for a luxurious lifestyle is within minutes
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <amenity.icon className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">{amenity.name}</h3>
                  <p className="text-gray-500 text-sm">{amenity.distance} away</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Premium Lifestyle Amenities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-amber-600" />
                  Dining & Entertainment
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fine dining restaurants</li>
                  <li>• Inox Multiplex Cinema</li>
                  <li>• Premium cafes & lounges</li>
                  <li>• Exclusive clubs</li>
                  <li>• Art galleries & cultural centers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-600" />
                  Shopping & Services
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Designer boutiques</li>
                  <li>• Premium banks & ATMs</li>
                  <li>• Luxury car showrooms</li>
                  <li>• Branded retail stores</li>
                  <li>• Specialty grocery stores</li>
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
            Exclusive Residential Projects in Akota
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Handpicked luxury properties from Akota&apos;s finest developments
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nearbyProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-amber-500 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Ready to Move" ? "bg-green-100 text-green-700" :
                    project.status === "Under Construction" ? "bg-yellow-100 text-yellow-700" :
                    "bg-amber-100 text-amber-700"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600">{project.type}</p>
                <Link href="#contact" className="text-amber-600 font-medium text-sm mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Request Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Akota Lifestyle
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Living in Akota is more than just owning property – it&apos;s about being part of an exclusive community that 
              values quality, privacy, and refined living. Morning walks around Akota Stadium, evening gatherings at 
              premium clubs, weekend brunches at upscale restaurants – this is the Akota lifestyle.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Serene Environment</h3>
                <p className="text-amber-200">Tree-lined streets and low traffic density</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Safe & Secure</h3>
                <p className="text-amber-200">Gated communities with 24/7 security</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Elite Community</h3>
                <p className="text-amber-200">Neighbors who share your values</p>
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
            Everything you need to know about buying property in Akota
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
      <section id="contact" className="py-16 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover Your Dream Home in Akota
              </h2>
              <p className="text-lg mb-6 text-amber-100">
                Our exclusive property consultants specialize in Akota&apos;s premium real estate. With access to off-market 
                listings and pre-launch opportunities, we can help you find properties that aren&apos;t available elsewhere.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>+91 63535 83148</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>premium@vadodarahomes.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <span>Near Akota Stadium, Vadodara 390020</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-800 rounded-xl">
                <h3 className="font-bold mb-2">Our Premium Services Include</h3>
                <ul className="space-y-2 text-amber-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Access to off-market listings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Private property viewings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Legal & documentation support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Interior design consultation
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Schedule a Private Consultation</h3>
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
                className="px-4 py-2 bg-gray-100 hover:bg-amber-100 hover:text-amber-700 rounded-full text-sm transition-colors"
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
              The Complete Guide to Buying Premium Property in Akota, Vadodara
            </h2>
            <p>
              <strong>Akota</strong> represents the zenith of residential real estate in Vadodara. This guide provides 
              comprehensive insights for those considering an investment in this prestigious locality.
            </p>
            <h3>Understanding Akota&apos;s Premium Market</h3>
            <p>
              The <strong>Akota property market</strong> operates differently from other areas in Vadodara. Here, demand 
              consistently exceeds supply, and properties rarely stay on the market for long. Many transactions happen 
              through private networks before properties are publicly listed, making it essential to work with well-connected 
              real estate consultants.
            </p>
            <p>
              <strong>Property rates in Akota</strong> have shown remarkable stability even during market downturns. While 
              other areas may see price corrections, Akota&apos;s limited inventory and premium status provide a buffer against 
              volatility. This makes it an ideal choice for conservative investors seeking capital preservation alongside growth.
            </p>
            <h3>Types of Properties Available</h3>
            <p>
              <strong>Akota real estate</strong> offers diverse options for different preferences:
            </p>
            <ul>
              <li><strong>Heritage Bungalows:</strong> Original plots from the 1960s-70s with mature gardens and spacious layouts. These are rare and command premium prices.</li>
              <li><strong>Modern Villas:</strong> Contemporary independent homes built on subdivided plots, offering modern amenities with traditional spaciousness.</li>
              <li><strong>Luxury Apartments:</strong> New high-rises offering 3 and 4 BHK units with premium finishes, club facilities, and security.</li>
              <li><strong>Penthouses:</strong> Top-floor units with private terraces and panoramic views, perfect for those seeking exclusivity.</li>
            </ul>
            <h3>Investment Considerations</h3>
            <p>
              When investing in <strong>Akota property</strong>, consider the following factors:
            </p>
            <ul>
              <li><strong>Location within Akota:</strong> Properties near Akota Stadium and main roads command 15-20% premium.</li>
              <li><strong>Age of Property:</strong> New constructions offer modern amenities, while older bungalows offer larger plots.</li>
              <li><strong>Builder Reputation:</strong> Stick to established developers with track records in premium projects.</li>
              <li><strong>Future Development:</strong> Check for any proposed infrastructure that could impact the area&apos;s character.</li>
            </ul>
            <p>
              Whether you&apos;re looking for a <strong>family home in Akota</strong>, an <strong>investment property</strong>, or a 
              <strong>retirement residence</strong>, our team can help you navigate this exclusive market. Contact us for a 
              private consultation and discover why Akota continues to be Vadodara&apos;s most desirable address.
            </p>
          </div>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area={area} />
    </div>
  );
}
