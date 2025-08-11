import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, MessageCircle, Instagram, Twitter, Camera, Copy, Share2 } from 'lucide-react';
import { gritzData } from './mock/mockData';
import { useToast } from '../hooks/use-toast';

const SocialShare = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [shareText] = useState(
    `🔥 GRIT Protocol is here - the Gen Z battle coin! 🔥\n\n"Born broke. Built different." 💪\n\nNot another meme token - this is a badge of survival forged in student debt, recession, and unmatched hustle.\n\n🩸 Pain Pool Rewards\n⚡ Scar Chain NFTs  \n🔥 Burn Events\n🛡️ Proof of Grit\n\nFor the ones who kept going when the system said "tap out."\n\n#GRITZ #GenZ #BuiltDifferent #CryptoSurvival`
  );

  const shareUrl = "https://moonshot.com/iaHdC8eJRacH21XRxTzfnGoy9mHjG9WDXCcYMRnmoon?ref=uyBQuyVmLM";

  const socialPlatforms = [
    {
      name: 'Telegram',
      icon: MessageCircle,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => {
        const url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
        toast({ title: "Sharing to Telegram!", description: "Opening Telegram..." });
      }
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      color: 'bg-gray-800 hover:bg-gray-900',
      action: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
        toast({ title: "Sharing to X!", description: "Opening X (Twitter)..." });
      }
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      action: () => {
        // Instagram doesn't support direct URL sharing, so we copy the text
        navigator.clipboard.writeText(shareText + '\n' + shareUrl);
        toast({ 
          title: "Content Copied!", 
          description: "Paste this in your Instagram story or post!" 
        });
      }
    },
    {
      name: 'Snapchat',
      icon: Camera,
      color: 'bg-yellow-400 hover:bg-yellow-500 text-black',
      action: () => {
        // Snapchat sharing via web
        const url = `https://www.snapchat.com/scan?attachmentUrl=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
        toast({ title: "Sharing to Snapchat!", description: "Opening Snapchat..." });
      }
    }
  ];

  const copyShareText = () => {
    navigator.clipboard.writeText(shareText + '\n' + shareUrl);
    toast({ title: "Share text copied!", description: "Ready to paste anywhere!" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <Share2 className="w-5 h-5 text-yellow-400" />
            Spread the GRITZ
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Share Preview */}
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-black text-lg">
                $G
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-yellow-400">GRIT Protocol</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Born broke. Built different. • The Gen Z battle coin
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                  <span>Price: ${gritzData.coin.currentPrice}</span>
                  <span className="text-green-400">+{gritzData.coin.change24h}%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Copy Share Text */}
          <Button
            onClick={copyShareText}
            variant="outline"
            className="w-full border-gray-600 hover:bg-gray-800 text-white"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Share Text
          </Button>

          {/* Social Platform Buttons */}
          <div className="grid grid-cols-2 gap-3">
            {socialPlatforms.map((platform) => (
              <Button
                key={platform.name}
                onClick={platform.action}
                className={`${platform.color} transition-all duration-200 transform hover:scale-105 font-semibold`}
              >
                <platform.icon className="w-4 h-4 mr-2" />
                {platform.name}
              </Button>
            ))}
          </div>

          {/* Quick Tips */}
          <div className="text-xs text-gray-400 space-y-1">
            <p>💡 <strong>Pro Tips:</strong></p>
            <p>• Use trending hashtags like #GenZCrypto #GRITZ</p>
            <p>• Tag your friends who need to see this</p>
            <p>• Share in crypto and finance groups</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SocialShare;