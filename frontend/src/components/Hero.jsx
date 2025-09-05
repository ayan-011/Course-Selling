import React from 'react'

const Hero = () => (
  <section className="bg-cream">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 text-center">
      <p className="text-xs uppercase tracking-widest">Home • Life • Career • Courses</p>
      <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Unlock a Healthier, More Purposeful Life <span className="text-indigo-600">with LMT</span>
      </h1>
      <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
        Simple, science-backed courses for mental, emotional, financial, and spiritual growth.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button className="px-5 py-2.5 rounded-lg bg-black text-white">Start free</button>
        <button className="px-5 py-2.5 rounded-lg border">Browse courses</button>
      </div>
    </div>
  </section>
);

export default Hero