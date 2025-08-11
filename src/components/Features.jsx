import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Zap, Smile, Users, TrendingUp, Shield, Rocket, Award, TrendingDown, Flame } from 'lucide-react';
import { gritzData } from './mock/mockData';

const Features = () => {
  const iconMap = {
    Zap: Zap,
    Smile: Smile,
    Users: Users,
    TrendingUp: TrendingUp,
    Shield: Shield,
    Rocket: Rocket,
    Award: Award,
    TrendingDown: TrendingDown,
    Flame: Flame
  };

  const enhancedFeatures = [
    ...gritzData.features,
    {
      title: "Emotional Cunning",
      description: "We weaponized our pain into profit. Scars are armor.",
      icon: "Users"
    },
    {
      title: "Burn-it-Down Resilience", 
      description: "When the system breaks, we build something new from the ashes.",
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-yellow-400 border-yellow-400/50 bg-yellow-400/10">
            Gen Z Mental Toughness
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Built Different <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">From Day One</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We didn't just survive the chaos. We weaponized it into pure GRITZ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Zap;
            
            return (
              <Card 
                key={index} 
                className="group bg-black/40 backdrop-blur-xl border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 hover:bg-black/60"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-white mb-4">
            Still here. Still grinding. $GRITZ.
          </p>
          <p className="text-gray-400">
            A badge of survival for those built different.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;