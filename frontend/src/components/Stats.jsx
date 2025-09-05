import React from 'react'

const Stats = () => (
  <section className="py-8 bg-cream">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 text-center sm:text-left">
      <div>
        <h3 className="text-xl font-semibold">Curated to help build smarter, more responsible finances.</h3>
        <p className="mt-2 text-neutral-600">Short, actionable modules with worksheets and templates.</p>
      </div>
      <div className="flex sm:justify-end gap-10">
        <div>
          <div className="text-3xl font-bold">2,000+</div>
          <div className="text-sm text-neutral-600">Students</div>
        </div>
        <div>
          <div className="text-3xl font-bold">87</div>
          <div className="text-sm text-neutral-600">Lessons</div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats