import React from 'react'

const Nav = () => (
  <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur border-b border-neutral-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-8 w-8 rounded bg-black/80" />
        <span className="font-semibold">LMT</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#" className="hover:opacity-80">Home</a>
        <a href="#" className="hover:opacity-80">Courses</a>
        <a href="#" className="hover:opacity-80">About</a>
        <a href="#" className="hover:opacity-80">Contact</a>
      </nav>
      <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded border">≡</button>
    </div>
  </header>
);

export default Nav