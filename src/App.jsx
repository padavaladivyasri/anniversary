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

  // Load photos from public folder
  useEffect(() => {
    const photoList = [
      {
        url: '/image1.jpg',
        caption: 'Moments Together ❤️'
      },
      {
        url: '/image2.jpg',
        caption: 'Love & Celebration 🎉'
      },
      {
        url: '/image3.jpg',
        caption: 'Silver Anniversary 🎊'
      },
      {
        url: '/image4.jpg',
        caption: 'Beautiful Together 💕'
      },
      {
        url: '/image5.jpg',
        caption: 'Family Love 👨‍👩‍👧‍👦'
      },
      {
        url: '/image6.jpg',
        caption: 'Home is with You 🏠'
      },
      {
        url: '/image7.jpg',
        caption: 'Forever Yours 💍'
      }
    ];

    setPhotos(photoList);
    console.log('✅ Photos loaded:', photoList.length, 'images');
  }, []);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('starry');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Confetti component
  const Confetti = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: Math.random() * 100 + '%',
              top: '-10px',
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
              opacity: Math.random() * 0.7 + 0.3,
              fontSize: '20px'
            }}
          >
            {['💕', '✨', '🌹', '💍', '🎉'][
              Math.floor(Math.random() * 5)
            ]}
          </div>
        ))}
      </div>
    );
  };

  // Loading Screen
  const LoadingScreen = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-rose-900 via-pink-800 to-purple-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <Heart className="w-24 h-24 text-pink-200 mx-auto fill-pink-200" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          25 Years of Love
        </h1>

        <p className="text-pink-100 text-lg sm:text-xl">
          A Celebration for Brahmeswara Rao & Madhavi
        </p>

        <div className="mt-8 text-pink-200">
          Loading your special moment...
        </div>
      </div>
    </div>
  );

  // Starry Night
  const StarryNight = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
              animationDuration: Math.random() * 2 + 1 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          A Love Story Under the Stars
        </h2>
      </div>

      <button
        onClick={() => setCurrentScreen('heart')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition"
      >
        Continue
      </button>
    </div>
  );

  // Beating Heart
  const BeatingHeart = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex flex-col items-center justify-center px-4 py-12">
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }

          25% {
            transform: scale(1.1);
          }

          50% {
            transform: scale(1);
          }

          75% {
            transform: scale(1.15);
          }
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>

      <div
        style={{
          animation: 'heartbeat 0.8s ease-in-out infinite'
        }}
      >
        <Heart className="w-32 h-32 sm:w-40 sm:h-40 text-red-500 fill-red-500" />
      </div>

      <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-purple-900 text-center">
        A Love That Beats Strong
      </h2>

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

  // Tap Heart
  const TapHeart = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex flex-col items-center justify-center px-4 py-12">
      <p className="text-xl sm:text-2xl text-purple-900 mb-8 font-bold text-center">
        Tap the Heart 25 times! 💕
      </p>

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
        <Heart className="w-40 h-40 sm:w-48 sm:h-48 text-red-500 fill-red-500 cursor-pointer" />
      </div>

      <p className="mt-8 text-2xl font-bold text-pink-600">
        {tapCount}/25 Taps
      </p>

      <div className="w-full max-w-sm h-2 bg-pink-200 rounded-full mt-4">
        <div
          className="h-full bg-pink-500 rounded-full transition-all"
          style={{
            width: (tapCount / 25) * 100 + '%'
          }}
        />
      </div>
    </div>
  );

  // Explosion
  const Explosion = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
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
            animationDelay: i * 0.1 + 's'
          }}
        >
          ✨
        </div>
      ))}

      <Heart className="w-32 h-32 sm:w-40 sm:h-40 text-red-500 fill-red-500 mb-8" />

      <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4 text-center">
        Your Love Explodes with Joy!
      </h2>

      <p className="text-lg sm:text-xl text-orange-500 text-center">
        Every heartbeat is a beautiful memory
      </p>

      <button
        onClick={() => {
          setShowConfetti(true);

          setTimeout(() => {
            setCurrentScreen('timeline');
          }, 1500);
        }}
        className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition text-lg"
      >
        Celebrate! 🎉
      </button>
    </div>
  );

  // Timeline
  const Timeline = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 py-16 px-4 sm:px-8 overflow-y-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-900 mb-16">
        Your Beautiful Journey
      </h2>

      <div className="max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="mb-12 animate-fadeIn"
            style={{
              animationDelay: index * 0.3 + 's'
            }}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white font-bold text-xl">
                  {milestone.year}
                </div>
              </div>

              <div className="ml-4 sm:ml-8 flex-grow">
                <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 border-2 border-pink-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-900">
                    {milestone.event}
                  </h3>

                  <p className="text-pink-600 mt-2">
                    {milestone.date}
                  </p>
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

  // Photo Slideshow
  const PhotoSlideshow = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [imageError, setImageError] = useState(false);

    if (photos.length === 0) {
      return (
        <div className="w-full min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl text-purple-900 mb-4">
              📸 Loading your memories...
            </p>

            <div className="animate-spin h-12 w-12 border-4 border-pink-500 border-t-purple-500 rounded-full mx-auto" />
          </div>
        </div>
      );
    }

    const currentPhoto = photos[photoIndex];

    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-center py-8 px-4 overflow-y-auto">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-4 sm:border-8 border-pink-300">

            {/* Photo */}
            {!imageError ? (
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.caption}
                  className="w-full h-full object-cover"
                  onError={() => {
                    console.error(
                      '❌ Image failed to load:',
                      currentPhoto.url
                    );
                    setImageError(true);
                  }}
                  onLoad={() => {
                    console.log(
                      '✅ Image loaded:',
                      currentPhoto.url
                    );
                  }}
                />
              </div>
            ) : (
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center px-4">
                <div className="text-center">
                  <p className="text-5xl mb-4">📷</p>

                  <p className="text-gray-700 text-lg font-semibold">
                    Unable to load photo
                  </p>

                  <p className="text-gray-500 mt-2 text-sm">
                    {currentPhoto.url}
                  </p>
                </div>
              </div>
            )}

            {/* Caption */}
            <div className="p-5 sm:p-6">
              <p className="text-lg sm:text-xl font-bold text-center text-purple-900">
                {currentPhoto.caption}
              </p>

              <p className="text-center text-gray-500 mt-2">
                {photoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-8 flex-wrap">
            <button
              onClick={() => {
                setImageError(false);
                setPhotoIndex(
                  (photoIndex - 1 + photos.length) % photos.length
                );
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-5 sm:px-6 py-3 rounded-full transition"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                setImageError(false);
                setPhotoIndex(
                  (photoIndex + 1) % photos.length
                );
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-5 sm:px-6 py-3 rounded-full transition"
            >
              Next →
            </button>
          </div>

          {/* Letter Button */}
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

  // Letter
  const Letter = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12 sm:py-16 px-4 sm:px-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-12 border-4 border-pink-300">
          <p className="text-4xl text-center mb-8">
            💌
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-8">
            A Letter from Divya
          </h2>

          <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              <span className="font-semibold text-pink-600">
                Dear Mom & Dad,
              </span>{' '}
              ❤️
            </p>

            <p>
              Happy 25th Wedding Anniversary!
            </p>

            <p>
              Thank you for filling our home with love, care,
              and countless beautiful memories. Your love,
              trust, and togetherness inspire me every day.
              I feel truly blessed to have you both as my
              parents.
            </p>

            <p>
              May your journey together continue to be filled
              with happiness, laughter, and endless love.
              Wishing you many more wonderful years together.
            </p>

            <p>
              Happy Silver Jubilee! 💖
            </p>

            <p className="font-bold">
              With all my love,
              <br />
              Your loving daughter,{' '}
              <span className="text-pink-600">
                Divya
              </span>{' '}
              ❤️
            </p>
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

  // Celebration
  const Celebration = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-yellow-100 via-pink-100 to-purple-100 py-12 sm:py-16 px-4 sm:px-8 relative overflow-y-auto">
      {showConfetti && <Confetti />}

      <div className="max-w-2xl mx-auto text-center">
        <div className="text-7xl sm:text-8xl mb-8 animate-bounce">
          🎂
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
          Silver Jubilee Celebration!
        </h2>

        <p className="text-xl sm:text-2xl text-pink-600 mb-12">
          25 Years of Beautiful Togetherness
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-300">
            <p className="text-3xl mb-2">🎁</p>
            <p className="font-bold text-purple-900">
              Gift of Love
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-300">
            <p className="text-3xl mb-2">🎉</p>
            <p className="font-bold text-purple-900">
              Celebration
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-300">
            <p className="text-3xl mb-2">🎆</p>
            <p className="font-bold text-purple-900">
              Fireworks
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setShowConfetti(true);

            setTimeout(() => {
              setCurrentScreen('fireworks');
            }, 1000);
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

  // Final Message
  const FinalMessage = () => (
    <div className="w-full min-h-screen bg-gradient-to-b from-rose-900 via-pink-800 to-purple-900 flex flex-col items-center justify-center relative overflow-y-auto px-4 py-12">
      {showConfetti && <Confetti />}

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            fontSize: '40px',
            animation: `bounce ${
              2 + Math.random() * 2
            }s ease-in-out infinite`,
            animationDelay: Math.random() * 2 + 's'
          }}
        >
          {'🎊✨💕🎉🌹💍'[
            Math.floor(Math.random() * 6)
          ]}
        </div>
      ))}

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="text-center relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Happy 25th Anniversary!
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-pink-200 mb-12">
          Brahmeswara Rao & Madhavi
        </h2>

        <p className="text-xl sm:text-2xl text-pink-100 mb-4">
          💍 Silver Jubilee 💍
        </p>

        <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto mb-8">
          Your love is a beautiful inspiration. May your
          bond continue to shine brighter with each passing
          year.
        </p>

        <p className="text-2xl sm:text-3xl text-pink-200 font-bold mb-8">
          With all our love and blessings ❤️
        </p>

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
    <div className="w-full min-h-screen bg-pink-50">
      {screens[currentScreen]}
    </div>
  );
};

export default AnniversaryWebsite;