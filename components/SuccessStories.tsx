'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, X } from 'lucide-react'

const videos = [
  {
    id: 1,
    src: '/video1.mp4',
    thumbnail: '/thumb1.jpg',
    title: 'Improving your health by doing exercise with diet',
  },
  {
    id: 2,
    src: '/video2.mp4',
    thumbnail: '/thumb2.jpg',
    title: 'A healthy lifestyle with our diet plan',
  },
  {
    id: 3,
    src: '/video3.mp4',
    thumbnail: '/thumb3.jpg',
    title: 'Fitness and nutrition for a better you',
  },
]

export default function SuccessStories() {
  const [activeVideo, setActiveVideo] = useState(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      // Ensure sound is enabled on user-initiated play
      videoRef.current.muted = false
      videoRef.current.volume = 1
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleClose = () => {
    if (videoRef.current) {
      // Stop playback and reset to show poster thumbnail again
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      // Reload to reliably show poster frame across browsers
      videoRef.current.load()
    }
    setIsPlaying(false)
  }

  const handleSelectVideo = (video: typeof videos[0]) => {
    setActiveVideo(video)
    setIsPlaying(false)
  }

  useEffect(() => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isPlaying, activeVideo])

  return (
    <section className="pt-5 pb-15 -mt-20 lg:-mt-15 md:py-20 bg-white">
      <div className="mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif">
            Successful Stories from
            <span className="block text-green-600">Client&apos;s Experience</span>
          </h2>
          <button className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-md font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
            View More Stories
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Video Player */}
          <div className="w-full lg:w-2/3 order-1 lg:order-none">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
              <video
                ref={videoRef}
                key={activeVideo.src}
                poster={activeVideo.thumbnail}
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              >
                <source src={activeVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="bg-green-600 rounded-full p-4 border-4 border-white shadow-lg">
                    <Play className="w-16 h-16 text-white fill-white" />
                  </div>
                </div>
              )}

              {isPlaying && (
                <button
                  aria-label="Close video"
                  onClick={handleClose}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 md:p-10">
                <h3 className="text-white text-sm md:text-xl font-semibold">{activeVideo.title}</h3>
              </div>
            </div>
            
            {/* Mobile: Show 2 videos after main video */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mt-2">
              {videos.slice(1).map((video) => (
                <div
                  key={video.id}
                  className="relative w-full h-20 rounded-lg cursor-pointer overflow-hidden shadow-md"
                  onClick={() => handleSelectVideo(video)}
                >
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Content below video */}
            <div className="mt-4 lg:mt-6 bg-gradient-to-br from-white to-green-50 p-4 md:p-6 rounded-lg shadow-lg border border-green-100">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Transform Your Health Journey</h3>
              <p className="text-gray-600 mb-6">
                Watch real success stories from our clients who have transformed their lives through our personalized nutrition programs. 
                Each journey is unique, but the results speak for themselves.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 group hover:bg-green-50 p-2 rounded-md transition-colors">
                  <div className="w-3 h-3 bg-green-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 group-hover:text-green-700 transition-colors">Personalized meal planning</span>
                </div>
                <div className="flex items-center space-x-3 group hover:bg-green-50 p-2 rounded-md transition-colors">
                  <div className="w-3 h-3 bg-green-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 group-hover:text-green-700 transition-colors">24/7 expert support</span>
                </div>
                <div className="flex items-center space-x-3 group hover:bg-green-50 p-2 rounded-md transition-colors">
                  <div className="w-3 h-3 bg-green-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 group-hover:text-green-700 transition-colors">Sustainable lifestyle changes</span>
                </div>
                <div className="flex items-center space-x-3 group hover:bg-green-50 p-2 rounded-md transition-colors">
                  <div className="w-3 h-3 bg-green-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 group-hover:text-green-700 transition-colors">Proven results</span>
                </div>
              </div>

              {/* Action buttons and stats */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-green-200">
                <div className="flex flex-wrap gap-4 md:space-x-6">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-green-600">500+</div>
                    <div className="text-xs md:text-sm text-gray-600">Success Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-green-600">2-8</div>
                    <div className="text-xs md:text-sm text-gray-600">Weeks Results</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 md:px-6 text-sm md:text-base rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Start Your Journey
                  </button>
                  <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 md:px-6 text-sm md:text-base rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist - Desktop */}
          <div className="w-full lg:w-1/3 order-2 lg:order-none">
            {/* Desktop: Original layout */}
            <div className="hidden lg:block space-y-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative w-full h-25 rounded-lg cursor-pointer overflow-hidden shadow-md"
                  onClick={() => handleSelectVideo(video)}
                >
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  {activeVideo.id === video.id ? (
                    <div className="absolute inset-0 bg-green-700/90 p-4 flex items-center">
                      <Play className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-white text-sm leading-tight">
                        {video.title}
                      </h4>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute inset-0 bg-green-600/0 hover:bg-green-600/90 transition-all duration-300 opacity-0 hover:opacity-100 p-4 flex items-center group">
                        <Play className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                        <h4 className="font-semibold text-white text-sm leading-tight">
                          {video.title}
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content Section Below */}
        <div className="mt-16 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Nutrition Plans</h3>
            <p className="text-gray-600">Our expert nutritionists create customized meal plans tailored to your specific health goals, dietary preferences, and lifestyle needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Guidance & Support</h3>
            <p className="text-gray-600">Get continuous support from certified dietitians and nutritionists who guide you through your wellness journey with proven strategies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainable Results</h3>
            <p className="text-gray-600">Learn healthy habits that last a lifetime. Our approach focuses on sustainable changes that help you maintain your ideal weight and optimal health.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
