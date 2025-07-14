export default function OurStory() {
  const storySections = [
    {
      title: "How We Met",
      date: "2020",
      emoji: "👋",
      content: "Our story began in the most unexpected way. We first crossed paths at a mutual friend's gathering, where a simple introduction turned into hours of conversation. From that moment, we knew there was something special between us.",
      placeholder: "More details about how we met will be added here..."
    },
    {
      title: "Our First Date",
      date: "2021",
      emoji: "💕",
      content: "Our first official date was filled with laughter, great food, and endless conversation. We discovered our shared love for adventure and our dreams for the future. It was the beginning of many beautiful moments together.",
      placeholder: "Details about our first date will be added here..."
    },
    {
      title: "The Proposal",
      date: "2024",
      emoji: "💍",
      content: "On a beautiful evening, surrounded by the people we love most, Phillip got down on one knee and asked the question that would change our lives forever. It was a moment filled with tears of joy and overwhelming happiness.",
      placeholder: "The full proposal story will be shared here..."
    },
    {
      title: "Planning Our Future",
      date: "2025",
      emoji: "🏠",
      content: "As we plan our wedding, we're also dreaming about the life we'll build together. We're excited to start this new chapter and create a home filled with love, laughter, and endless adventures.",
      placeholder: "Our dreams and plans for the future will be shared here..."
    }
  ]

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-headline-bold text-gray-900 mb-6">
              Our Love Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-body max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite. Here's how Phillip Dogbe and Nicole Sarfo's journey began.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline-bold text-gray-900 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite. Here's how Nicole and Philip's journey began.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {storySections.map((section, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < storySections.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-teal-200 to-lilac-200"></div>
                )}
                
                <div className="flex items-start space-x-8 mb-16">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-lilac-500 rounded-full flex items-center justify-center text-2xl">
                      {section.emoji}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-headline-bold text-gray-900">
                        {section.title}
                      </h2>
                      <span className="text-lg font-semibold text-teal-600">
                        {section.date}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {section.content}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-500 italic">
                        {section.placeholder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-headline-bold text-gray-900 mb-4">
                Join Our Journey
              </h2>
              <p className="text-gray-600 mb-6">
                We can't wait to celebrate our love story with you on our wedding day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/rsvp" className="btn-primary">
                  RSVP Now
                </a>
                <a href="/gallery" className="btn-secondary">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 