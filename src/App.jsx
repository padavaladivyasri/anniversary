import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const AnniversaryWebsite = () => {
  const [currentScreen, setCurrentScreen] = useState('loading');
  const [tapCount, setTapCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [photos, setPhotos] = useState([]);

  const milestones = [
    { year: 2001, event: 'Wedding Day', date: 'August 10' },
    { year: 2004, event: 'First Daughter Born', date: 'July 30' },
    { year: 2006, event: 'Second Daughter Born', date: 'May 22' },
    { year: 2008, event: 'Son Born', date: 'December 7' }
  ];

  // Load photos from photo_data.json file
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await fetch('./photo_data.json');
        if (!response.ok) throw new Error('Failed to fetch');
        const photoDataRaw = await response.json();
        
        if (photoDataRaw && Array.isArray(photoDataRaw) && photoDataRaw.length > 0) {
          const processedPhotos = photoDataRaw.map((photo) => ({
            url: `data:${photo.mime};base64,${photo.base64}`,
            caption: photo.caption
          }));
          console.log('✅ Photos loaded:', processedPhotos.length, 'images');
          setPhotos(processedPhotos);
        }
      } catch (error) {
        console.error('Photo load error:', error);
        // Fallback captions
        setPhotos([
          { url: null, caption: 'Moments Together ❤️' },
          { url: null, caption: 'Love & Celebration 🎉' },
          { url: null, caption: 'Silver Anniversary 🎊' },
          { url: null, caption: 'Beautiful Together 💕' },
          { url: null, caption: 'Family Love 👨‍👩‍👧‍👦' },
          { url: null, caption: 'Home is with You 🏠' },
          { url: null, caption: 'Forever Yours 💍' }
        ]);
      }
    };
    loadPhotos();
  }, []);

  useEffect(() => {
    setTimeout(() => setCurrentScreen('starry'), 2000);
  }, []);

  const Confetti = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: Math.random() * 100 + '%',
              top: -10 + 'px',
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
              opacity: Math.random() * 0.7 + 0.3,
              fontSize: '20px'
            }}
          >
            {['💕', '✨', '🌹', '💍', '🎉'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    );
  };

  const LoadingScreen = () => (
    <div className="w-full h-screen bg-gradient-to-b from-rose-900 via-pink-800 to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <Heart className="w-24 h-24 text-pink-200 mx-auto fill-pink-200" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">25 Years of Love</h1>
        <p className="text-pink-100 text-xl">A Celebration for Brahmeswara Rao & Madhavi</p>
        <div className="mt-8 text-pink-200">Loading your special moment...</div>
      </div>
    </div>
  );

  const StarryNight = () => (
    <div className="w-full h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: (Math.random() * 2 + 1) + 's'
            }}
          />
        ))}
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white text-center">A Love Story Under the Stars</h2>
      </div>
      <button
        onClick={() => setCurrentScreen('heart')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition"
      >
        Continue
      </button>
    </div>
  );

  const BeatingHeart = () => (
    <div className="w-full h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex flex-col items-center justify-center">
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.15); }
        }
        @keyframes fall {
          to { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
      <div 
        className="animate-pulse"
        style={{
          animation: 'heartbeat 0.8s ease-in-out infinite'
        }}
      >
        <Heart className="w-40 h-40 text-red-500 fill-red-500" />
      </div>
      <h2 className="mt-8 text-3xl font-bold text-purple-900">A Love That Beats Strong</h2>
      <p className="mt-4 text-center text-purple-700 text-lg max-w-2xl">
        25 years of togetherness, trust, and unconditional love
      </p>
      <button
        onClick={() => setCurrentScreen('tapHeart')}
        className="mt-12 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition text-lg"
      >
        Tap to Continue
      </button>
    </div>
  );

  const TapHeart = () => (
    <div className="w-full h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex flex-col items-center justify-center">
      <p className="text-2xl text-purple-900 mb-8 font-bold">Tap the Heart 25 times! 💕</p>
      <div
        onClick={() => {
          const newCount = tapCount + 1;
          setTapCount(newCount);
          if (newCount === 25) {
            setTimeout(() => setCurrentScreen('explosion'), 500);
          }
        }}
        className="cursor-pointer transform hover:scale-110 transition"
        style={{
          animation: 'heartbeat 0.6s ease-in-out infinite'
        }}
      >
        <Heart className="w-48 h-48 text-red-500 fill-red-500 cursor-pointer hover:scale-120" />
      </div>
      <p className="mt-8 text-2xl font-bold text-pink-600">{tapCount}/25 Taps</p>
      <div className="w-96 h-2 bg-pink-200 rounded-full mt-4">
        <div 
          className="h-full bg-pink-500 rounded-full transition-all"
          style={{width: (tapCount/25)*100 + '%'}}
        />
      </div>
    </div>
  );

  const Explosion = () => (
    <div className="w-full h-screen bg-gradient-to-b from-yellow-50 to-orange-50 flex flex-col items-center justify-center relative overflow-hidden">
      {showConfetti && <Confetti />}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping"
          style={{
            left: '50%',
            top: '50%',
            width: '40px',
            height: '40px',
            marginLeft: '-20px',
            marginTop: '-20px',
            fontSize: '30px',
            animationDelay: (i * 0.1) + 's'
          }}
        >
          ✨
        </div>
      ))}
      <Heart className="w-40 h-40 text-red-500 fill-red-500 mb-8" />
      <h2 className="text-4xl font-bold text-orange-600 mb-4">Your Love Explodes with Joy!</h2>
      <p className="text-xl text-orange-500">Every heartbeat is a beautiful memory</p>
      <button
        onClick={() => {
          setShowConfetti(true);
          setTimeout(() => setCurrentScreen('timeline'), 1500);
        }}
        className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition text-lg"
      >
        Celebrate! 🎉
      </button>
    </div>
  );

  const Timeline = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-purple-900 mb-16">Your Beautiful Journey</h2>
      <div className="max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <div key={index} className="mb-12 animate-fadeIn" style={{animationDelay: (index*0.3)+'s'}}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white font-bold text-xl">
                  {milestone.year}
                </div>
              </div>
              <div className="ml-8 flex-grow">
                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-pink-300">
                  <h3 className="text-2xl font-bold text-purple-900">{milestone.event}</h3>
                  <p className="text-pink-600 mt-2">{milestone.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentScreen('slideshow')}
        className="block mx-auto mt-12 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition text-lg"
      >
        View Memory Gallery
      </button>
    </div>
  );

  const PhotoSlideshow = () => {
    const [photoIndex, setPhotoIndex] = useState(0);

    if (photos.length === 0) {
      return (
        <div className="w-full h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl text-purple-900 mb-4">📸 Loading your memories...</p>
            <div className="animate-spin h-12 w-12 border-4 border-pink-500 border-t-purple-500 rounded-full mx-auto"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full px-4">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-pink-300">
            {photos[photoIndex]?.url ? (
              <div className="w-full h-96">
                <img 
                  src={photos[photoIndex].url} 
                  alt={photos[photoIndex].caption}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 h-96 flex items-center justify-center">
                <p className="text-gray-600 text-lg">Photo loading...</p>
              </div>
            )}
            <div className="p-6">
              <p className="text-xl font-bold text-center text-purple-900">
                {photos[photoIndex]?.caption}
              </p>
              <p className="text-center text-gray-500 mt-2">{photoIndex + 1}/{photos.length}</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
            >
              ← Previous
            </button>
            <button
              onClick={() => setPhotoIndex((photoIndex + 1) % photos.length)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
            >
              Next →
            </button>
          </div>
          <button
            onClick={() => setCurrentScreen('letter')}
            className="block mx-auto mt-8 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition"
          >
            Read the Letter
          </button>
        </div>
      </div>
    );
  };

  const Letter = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-16 px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-12 border-4 border-pink-300">
          <p className="text-4xl text-center mb-8">💌</p>
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">A Letter from Divya</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p><span className="font-semibold text-pink-600">Dear Mom & Dad,</span> ❤️</p>
            <p>Happy 25th Wedding Anniversary!</p>
            <p>Thank you for filling our home with love, care, and countless beautiful memories. Your love, trust, and togetherness inspire me every day. I feel truly blessed to have you both as my parents.</p>
            <p>May your journey together continue to be filled with happiness, laughter, and endless love. Wishing you many more wonderful years together.</p>
            <p>Happy Silver Jubilee! 💖</p>
            <p className="font-bold">With all my love,<br/>Your loving daughter, <span className="text-pink-600">Divya</span> ❤️</p>
          </div>
        </div>
        <button
          onClick={() => setCurrentScreen('celebration')}
          className="block mx-auto mt-12 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition text-lg"
        >
          Continue to Celebration
        </button>
      </div>
    </div>
  );

  const Celebration = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-yellow-100 via-pink-100 to-purple-100 py-16 px-8 relative">
      {showConfetti && <Confetti />}
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl mb-8 animate-bounce">🎂</div>
        <h2 className="text-4xl font-bold text-purple-900 mb-4">Silver Jubilee Celebration!</h2>
        <p className="text-2xl text-pink-600 mb-12">25 Years of Beautiful Togetherness</p>
        
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-300">
            <p className="text-3xl mb-2">🎁</p>
            <p className="font-bold text-purple-900">Gift of Love</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-300">
            <p className="text-3xl mb-2">🎉</p>
            <p className="font-bold text-purple-900">Celebration</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-300">
            <p className="text-3xl mb-2">🎆</p>
            <p className="font-bold text-purple-900">Fireworks</p>
          </div>
        </div>

        <button
          onClick={() => {
            setShowConfetti(true);
            setTimeout(() => setCurrentScreen('fireworks'), 1000);
          }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition text-lg mb-4"
        >
          Launch Fireworks! 🎆
        </button>

        <button
          onClick={() => setCurrentScreen('final')}
          className="block mx-auto mt-4 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition text-lg"
        >
          Final Message
        </button>
      </div>
    </div>
  );

  const FinalMessage = () => (
    <div className="w-full h-screen bg-gradient-to-b from-rose-900 via-pink-800 to-purple-900 flex flex-col items-center justify-center relative overflow-hidden">
      {showConfetti && <Confetti />}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            fontSize: '40px',
            animation: `bounce ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: (Math.random() * 2) + 's'
          }}
        >
          {'🎊✨💕🎉🌹💍'[Math.floor(Math.random() * 6)]}
        </div>
      ))}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6">Happy 25th Anniversary!</h1>
        <h2 className="text-4xl font-bold text-pink-200 mb-12">Brahmeswara Rao & Madhavi</h2>
        <p className="text-2xl text-pink-100 mb-4">💍 Silver Jubilee 💍</p>
        <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-8">
          Your love is a beautiful inspiration. May your bond continue to shine brighter with each passing year.
        </p>
        <p className="text-3xl text-pink-200 font-bold mb-8">With all our love and blessings ❤️</p>
        
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          <button
            onClick={() => {
              setShowConfetti(false);
              setTapCount(0);
              setCurrentScreen('loading');
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition text-lg"
          >
            Start Over
          </button>
          <button
            onClick={() => setShowConfetti(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full transition text-lg"
          >
            🎉 More Celebration!
          </button>
        </div>
      </div>
    </div>
  );

  const screens = {
    loading: <LoadingScreen />,
    starry: <StarryNight />,
    heart: <BeatingHeart />,
    tapHeart: <TapHeart />,
    explosion: <Explosion />,
    timeline: <Timeline />,
    slideshow: <PhotoSlideshow />,
    letter: <Letter />,
    celebration: <Celebration />,
    fireworks: <FinalMessage />,
    final: <FinalMessage />
  };

  return (
    <div className="w-full bg-pink-50">
      {screens[currentScreen]}
    </div>
  );
};

export default AnniversaryWebsite;