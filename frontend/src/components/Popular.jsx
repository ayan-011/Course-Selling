import React from 'react'
import Card from "./Card";

const Popular = () => (
  <section className="py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Browse our most popular courses.</h2>
        <a className="text-sm text-indigo-600 hover:underline" href="#">View all</a>
      </div>
      <div className="mt-6 flex justify-center  ">
        <Card/>
         
      </div>
    </div>
  </section>
);

export default Popular