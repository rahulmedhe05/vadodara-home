"use client";

import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getAreaContent, getDefaultAreaContent } from "@/lib/area-content";
import Link from "next/link";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessHeroSlider } from "@/components/business-hero-slider";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { BusinessContactForm } from "@/components/business-contact-form";
import { 
  Building2, Home, Store, MapPin, Phone, Mail, 
  CheckCircle, Star, Users, Award, Clock, Quote, TrendingUp, Heart
} from "lucide-react";

interface AreaPageTemplateProps {
  area: string;
  areaName: string;
}

export function AreaPageTemplate({ area, areaName }: AreaPageTemplateProps) {
  const business = getBusinessBySlug("real-estate");
  const content = getAreaContent(area) || getDefaultAreaContent(area, areaName);
  
  if (!business) {
    return null;
  }

  const services = [
    { title: "Flats for Sale", desc: `1BHK, 2BHK, 3BHK flats in ${areaName}`, icon: Building2, color: "blue" },
    { title: "Houses for Sale", desc: `Independent houses & villas in ${areaName}`, icon: Home, color: "green" },
    { title: "Commercial Property", desc: `Shops, offices & showrooms in ${areaName}`, icon: Store, color: "purple" },
    { title: "Rental Properties", desc: `Flats & houses for rent in ${areaName}`, icon: MapPin, color: "orange" },
  ];

  const relatedKeywords = realEstateKeywords.slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav />
      
      <BusinessHeroSlider 
        business={business} 
        area={area} 
        heroTitle={`${content.tagline}`}
        heroSubtitle={`Real Estate in ${areaName}, Vadodara`}
      />

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-blue-600 mb-2" />
              <p className="font-bold text-2xl">5000+</p>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9/5</p>
              <p className="text-gray-600 text-sm">Customer Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-purple-600 mb-2" />
              <p className="font-bold text-2xl">24/7</p>
              <p className="text-gray-600 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real Estate Services in {areaName}
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Whether you&apos;re looking to buy, sell, or rent property in {areaName}, Vadodara, 
            we provide comprehensive real estate services to meet all your needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <service.icon className={`w-12 h-12 text-${service.color}-600 mb-4`} />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why {areaName}?</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">
                {content.name} — {content.tagline}
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="text-lg leading-relaxed">
                  {content.intro}
                </p>
                <div className="mt-6 space-y-3">
                  {content.whyInvest.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/properties/house-1.jpg"
                alt={`Real Estate in ${areaName}`}
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Starting from</p>
                <p className="text-xl font-bold">{content.priceRange.oneBHK}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Life in {areaName}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {content.lifestyle}
            </p>
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Connectivity & Access</h3>
              <p className="text-gray-700">{content.connectivity}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Property Prices in {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Current market rates for different property types. Prices vary based on location, amenities, and condition.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "1 BHK Flats", price: content.priceRange.oneBHK },
              { title: "2 BHK Flats", price: content.priceRange.twoBHK },
              { title: "3 BHK Flats", price: content.priceRange.threeBHK },
              { title: "Independent Houses", price: content.priceRange.house },
              { title: "Villas", price: content.priceRange.villa },
              { title: "Commercial Shops", price: content.priceRange.commercial },
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2">{type.title} in {areaName}</h3>
                <p className="text-blue-600 font-semibold text-xl">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Nearby Landmarks & Amenities</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {content.nearbyLandmarks.map((landmark, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-gray-700">
                📍 {landmark}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
            <p className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
              "{content.testimonial.quote}"
            </p>
            <div>
              <p className="font-bold text-lg">{content.testimonial.name}</p>
              <p className="text-blue-200">{content.testimonial.type}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Find Your Property in {areaName}?
              </h2>
              <p className="text-xl mb-4 text-blue-100 font-medium">
                {content.ctaText}
              </p>
              <p className="text-lg mb-6 text-blue-200">
                Our local experts know every lane in {areaName}. Tell us what you&apos;re looking for, and we&apos;ll find it.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">+91 63535 83148</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>info@vadodarahomes.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <span>{areaName}, Vadodara, Gujarat</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Get Free Property Consultation</h3>
              <BusinessContactForm business={business} area={area} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Real Estate Searches
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

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area={area} />
    </div>
  );
}
