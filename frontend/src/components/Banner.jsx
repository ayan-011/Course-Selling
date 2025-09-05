import React from 'react'

const Banner = () => (
  <section className="py-12">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-2xl bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600')] bg-cover bg-center">
      <div className="backdrop-brightness-[.6]">
        <div className="p-10 sm:p-14 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold">Transform your life with LMT</h3>
          <p className="mt-2 max-w-xl text-white/90">A guided course bundle for mental, emotional, financial, and spiritual insight.</p>
          <button className="mt-5 px-5 py-2.5 rounded-lg bg-white text-black font-medium">Join the journey</button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner