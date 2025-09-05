import React from 'react'

const Testimonial = () => (
  <section className="py-12">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
      <img className="rounded-2xl h-64 w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200" alt="Student" />
      <div>
        <p className="text-sm uppercase tracking-widest text-neutral-500">Testimonial</p>
        <blockquote className="mt-3 text-lg leading-relaxed">
          “These courses made complex topics simple and practical. Loved the community and weekly office hours.”
        </blockquote>
        <p className="mt-3 font-medium">Emily Thompson • Early Professional</p>
      </div>
    </div>
  </section>
);

export default Testimonial