export default function RSVP() {
  return (
    <main className="min-h-screen">
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-headline-bold text-gray-900 mb-4">
                Let us know if you're coming!
              </h1>
              <p className="text-xl text-gray-600">
                Please fill out the form below to RSVP for our special day
              </p>
            </div>
            
            {/* Google Form Embed */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
              <div className="w-full" style={{ height: '600px', minHeight: '400px' }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Wedding RSVP Form"
                  loading="lazy"
                >
                  Loading RSVP form...
                </iframe>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm mb-4">
                  If the form doesn't load properly, please try refreshing the page or use the direct link below.
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-lilac-500 hover:bg-lilac-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Open RSVP Form in New Tab
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-headline text-gray-900 mb-4">
                Wedding Details
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">Ceremony</h3>
                  <p className="text-gray-700">
                    Saturday, 17th August 2025<br />
                    Christ Apostolic Christ Int'l<br />
                    Third Save, Tema
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-lilac-600 mb-2">Reception</h3>
                  <p className="text-gray-700">
                    Canwin Hotel<br />
                    Oceanview Estate, 18 Junction<br />
                    Tema
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 