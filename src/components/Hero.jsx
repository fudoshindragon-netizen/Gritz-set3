import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Copy, Share2 } from 'lucide-react';
import { gritzData } from './mock/mockData';
import { useToast } from '../hooks/use-toast';

const Hero = ({ onShare }) => {
  const { toast } = useToast();

  const copyContract = () => {
    navigator.clipboard.writeText(gritzData.coin.contractAddress);
    toast({
      title: "Contract Address Copied!",
      description: "Address copied to clipboard",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Coin Background Image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <img 
            src="https://customer-assets.emergentagent.com/job_hustle2wealth/artifacts/wytsy9kz_file_00000000b2b461fab054a3d7f4aea29d.png" 
            alt="GRIT Coin" 
            className="w-[700px] h-[700px] object-contain animate-slow-spin filter brightness-110"
          />
        </div>
        
        {/* Additional Background Effects */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-yellow-500/5 via-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4 text-yellow-400 border-yellow-400/50 bg-yellow-400/10 hover:bg-yellow-400/20 transition-all duration-300">
            <TrendingUp className="w-4 h-4 mr-2" />
            +{gritzData.coin.change24h}% Today
          </Badge>
          
          <h1 className="text-6xl sm:text-8xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            GRIT Protocol
          </h1>
          
          <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-4">
            {gritzData.coin.symbol}
          </div>
          
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {gritzData.coin.slogan}
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            {gritzData.coin.tagline} • {gritzData.coin.description}
          </p>
        </div>

        {/* Price Card */}
        <Card className="bg-black/40 backdrop-blur-xl border-gray-800/50 p-6 mb-8 max-w-md mx-auto hover:bg-black/60 transition-all duration-300">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">Current Price</p>
            <p className="text-4xl font-bold text-yellow-400 mb-2">
              ${gritzData.coin.currentPrice}
            </p>
            <p className="text-gray-300 text-sm">
              Market Cap: ${gritzData.coin.marketCap.toLocaleString()}
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-4 p-2 bg-gray-800/50 rounded-lg">
              <span className="text-xs text-gray-400 font-mono">
                {gritzData.coin.contractAddress}
              </span>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={copyContract}
                className="h-6 w-6 p-0 hover:bg-gray-700"
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://moonshot.com/iaHdC8eJRacH21XRxTzfnGoy9mHjG9WDXCcYMRnmoon?ref=uyBQuyVmLM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-yellow-500/25"
            >
              Get GRITZ - Born Broke Built Different
            </Button>
          </a>
          
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onShare}
            className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 font-semibold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share the GRITZ
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { label: "Total Supply", value: gritzData.coin.totalSupply },
            { label: "24h Change", value: `+${gritzData.coin.change24h}%`, highlight: true },
            { label: "Community", value: "Growing Fast" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className={`font-bold text-lg ${stat.highlight ? 'text-green-400' : 'text-white'}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;