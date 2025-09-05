import React from 'react'

const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded bg-black/80" />
          <span className="font-semibold">LMT</span>
        </div>
        <p className="mt-3 text-neutral-600">Practical education for a purposeful life.</p>
      </div>
      <div>
        <p className="font-semibold">Company</p>
        <ul className="mt-2 space-y-2 text-neutral-600">
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Resources</p>
        <ul className="mt-2 space-y-2 text-neutral-600">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Legal</p>
        <ul className="mt-2 space-y-2 text-neutral-600">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Refunds</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer