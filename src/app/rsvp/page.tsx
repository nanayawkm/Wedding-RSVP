export default function RSVP() {
  return (
    <main className="min-h-screen">
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
                Let us know if you're coming!
              </h1>
              <p className="text-xl text-gray-600">
                Please fill out the form below to RSVP for our special day
              </p>
            </div>
            
            {/* Google Form Embed */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="aspect-video w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Wedding RSVP Form"
                >
                  Loading…
                </iframe>
              </div>
              <p className="text-center text-gray-500 mt-4 text-sm">
                If the form doesn't load, please refresh the page or contact us directly.
              </p>
            </div>
            
            {/* Additional Info */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
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