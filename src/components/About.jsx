import React from 'react';
import { Download, Code2, Palette, Zap, CheckCircle, Clock, Star, Users, ArrowRight } from 'lucide-react';
import { personalInfo, aboutMe, services, uniqueSellingPoints } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Zap: Zap,
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-slate-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-300 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* About Me Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 font-medium">{aboutMe.headline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4 font-medium">
                {aboutMe.description}
              </p>
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-900">2-4</div>
                <div className="text-xs text-slate-500">Days Delivery</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500">Client Satisfaction</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-900">800 ৳</div>
                <div className="text-xs text-slate-500">Starting Price</div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white px-8 py-3.5 rounded-lg font-semibold hover:from-slate-600 hover:to-slate-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Image & USP */}
          <div className="space-y-6">
            {/* Profile Image Placeholder */}
            <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-2xl border-4 border-white shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden group">
                <div className="text-center">
                  <div className="text-6xl font-bold text-slate-400 group-hover:scale-110 transition-transform">
                    {personalInfo.name[0]}
                  </div>
                  <div className="text-sm text-slate-500 mt-2">Frontend Developer</div>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Based in Narsingdi, Bangladesh</p>
                <p className="text-xs text-slate-500">Available for remote projects worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why Choose Me?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I bring a unique combination of skills and dedication that sets me apart from other developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueSellingPoints.map((point, index) => {
              const IconComponent = iconMap[point.icon];
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-slate-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="h-6 w-6 text-slate-700" />}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{point.title}</h4>
                  <p className="text-sm text-slate-600">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div id="services">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Services I Offer</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I specialize in creating stunning, high-performance frontend solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden">
                  {/* Service Header */}
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      {IconComponent && <IconComponent className="h-7 w-7 text-white" />}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>

                  {/* Service Features */}
                  <div className="p-6 flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Footer */}
                  <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-slate-600">
                        <Clock className="h-4 w-4" />
                        <span>{service.turnaround}</span>
                      </div>
                      <div className="font-bold text-slate-900">{service.price}</div>
                    </div>
                    <a
                      href="#contact"
                      className="block w-full text-center bg-slate-800 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700 transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Launch Your Project?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a professional, ultra-fast landing page or portfolio starting at just 800 BDT. 
            I deliver in 2-4 days with 100% client satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform inline-flex items-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Email Me Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;