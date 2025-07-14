'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder images - replace with actual images later
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      alt: "Engagement photo 1",
      title: "Our Engagement"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
      alt: "Engagement photo 2",
      title: "First Date"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      alt: "Engagement photo 3",
      title: "Beach Day"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
      alt: "Engagement photo 4",
      title: "Sunset Walk"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      alt: "Engagement photo 5",
      title: "Coffee Date"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
      alt: "Engagement photo 6",
      title: "Weekend Getaway"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      alt: "Engagement photo 7",
      title: "Dinner Date"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
      alt: "Engagement photo 8",
      title: "Adventure Time"
    }
  ]

  return (
    <main className="min-h-screen">
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing the beautiful moments of our journey together
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                More Memories Coming Soon
              </h2>
              <p className="text-gray-600 mb-6">
                We'll be adding more photos as we get closer to our special day. Stay tuned!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/rsvp" className="btn-primary">
                  RSVP Now
                </a>
                <a href="/our-story" className="btn-secondary">
                  Read Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images.find(img => img.id === selectedImage)?.src}
              alt={images.find(img => img.id === selectedImage)?.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  )
} 