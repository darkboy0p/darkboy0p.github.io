import React from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolioData';

const Services = () => {
  return (
    <section id="services-page" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional frontend development focused on landing pages and portfolios.
            Fast delivery, clean code, affordable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-slate-200 p-8 hover:border-slate-400 transition-all shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-slate-200 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-slate-600 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{service.turnaround}</span>
                  </div>
                  <span className="font-bold text-slate-900">{service.price}</span>
                </div>
                <a
                  href="#contact"
                  className="block w-full text-center bg-slate-800 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;