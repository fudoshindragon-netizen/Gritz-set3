import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingDown, Award, Flame, Shield, Target, Zap } from 'lucide-react';

const TokenUtilities = () => {
  const utilities = [
    {
      title: "Pain Pool Rewards",
      description: "Earn more $GRITZ the longer you HODL through dips. The deeper the red, the more you're rewarded.",
      icon: TrendingDown,
      color: "from-red-500/20 to-orange-500/20",
      highlight: "Weaponized diamond hands"
    },
    {
      title: "Scar Chain NFTs", 
      description: "Dynamic NFTs that evolve based on your holding duration, tracking your 'emotional damage score.'",
      icon: Award,
      color: "from-purple-500/20 to-pink-500/20",
      highlight: "Scars as armor"
    },
    {
      title: "Burn Events",
      description: "Triggered during major crises - proving Gen Z doesn't flinch when markets crash.",
      icon: Flame,
      color: "from-orange-500/20 to-red-500/20",
      highlight: "Crisis = Opportunity"
    },
    {
      title: "Proof of Grit",
      description: "Lightweight staking system giving access to private 'battle vaults' for high-risk, high-reward opportunities.",
      icon: Shield,
      color: "from-gray-500/20 to-slate-500/20",
      highlight: "Elite access"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-800/30 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-red-400 border-red-400/50 bg-red-400/10">
            <Target className="w-4 h-4 mr-2" />
            Not Your Average Tokenomics
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Forged in <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Fire & Pain</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This isn't a soft coin. It's not for everyone. It's not even for most. 
            <br />
            <strong className="text-white">It's for the ones who kept going when the system said "tap out."</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {utilities.map((utility, index) => (
            <Card 
              key={index} 
              className="group bg-black/60 backdrop-blur-xl border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${utility.color} border border-gray-700/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <utility.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {utility.title}
                    </h3>
                    <Badge variant="outline" className="text-xs text-gray-400 border-gray-600/50 mb-3">
                      {utility.highlight}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {utility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Battle Cry Section */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-800/50">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-black text-white">THE GRITZ PHILOSOPHY</h3>
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <blockquote className="text-xl text-gray-300 italic leading-relaxed">
              "Mental toughness, emotional cunning, and burn-it-down resilience. 
              <br />
              We weaponized our pain into profit. 
              <br />
              <span className="text-white font-bold not-italic">Scars? We wear them like armor."</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtilities;