import React from 'react';
import { Palette, Heart, Sparkles, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Unique pieces that express your individual style and creativity"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every item is crafted with passion and attention to detail"
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "High-quality materials and construction for lasting beauty"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Supporting local artisans and creative communities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
                ABOUT BREEZY BLISS
              </h2>
              <p className="text-xl text-yellow-100 leading-relaxed mb-6">
                We believe fashion should be an expression of joy, creativity, and individuality. 
                Our carefully curated collection brings together unique pieces that tell a story 
                and make you feel confident and beautiful.
              </p>
              <p className="text-lg text-yellow-200 leading-relaxed">
                From handcrafted accessories to statement pieces, every item in our collection 
                is chosen to inspire and delight. Join our community of creative souls who 
                aren't afraid to stand out and express their true selves.
              </p>
            </div>

            <button className="bg-yellow-400 text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
              LEARN MORE ABOUT US
            </button>
          </div>

          {/* Right Content - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">
                  {feature.title}
                </h3>
                <p className="text-yellow-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;