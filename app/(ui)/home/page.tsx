"use client"

import React, { useState } from 'react'
import Image from 'next/image'

export default function LandingPage() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setLogoPreview(URL.createObjectURL(file))
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 text-gray-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold">LD</div>
          <div>
            <h1 className="text-xl font-extrabold">LaxDrinkCo</h1>
            <p className="text-xs text-gray-500">Custom branded bottles for restaurants</p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a className="text-sm hover:text-black/80" href="#products">Products</a>
          <a className="text-sm hover:text-black/80" href="#how">How it works</a>
          <a className="text-sm hover:text-black/80" href="#testimonials">Testimonials</a>
          <a className="text-sm hover:text-black/80" href="#contact">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="#quote" className="px-4 py-2 bg-black text-white rounded-lg text-sm">Request a quote</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Elevate your table. <span className="text-indigo-600">Custom-branded bottles</span> that carry your restaurant&apos;s personality.
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">Reusable glass & premium PET bottles printed with your logo — small MOQs, fast proofs, eco-friendly options. Perfect for table service, events, and retail.</p>

          <div className="flex gap-4 items-center">
            <a href="#quote" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow">Request a quote</a>
            <a href="#products" className="px-6 py-3 border rounded-lg text-sm">See products</a>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-900/80"></span>
              <span>MOQ starting at 100</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-900/80"></span>
              <span>Free digital proof in 24–48 hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-900/80"></span>
              <span>Eco-friendly and recyclable options</span>
            </div>
          </div>
        </div>

        {/* Bottle mockup + logo upload preview */}
        <div className="relative">
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Preview</p>
                  <h3 className="font-semibold">Your logo on a bottle</h3>
                </div>
                <div className="text-sm text-gray-400">PNG / SVG recommended</div>
              </div>

              <div className="w-full h-64 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden relative">
                {/* Bottle SVG placeholder */}
                <svg viewBox="0 0 120 280" className="w-36 h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#F8FAFF" />
                      <stop offset="100%" stopColor="#EEF2FF" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="10" width="100" height="260" rx="18" fill="url(#g)" stroke="#E6E9F2" />
                  <rect x="34" y="32" width="52" height="36" rx="6" fill="#fff" />
                </svg>

                {/* Logo preview placed over bottle label area */}
                {logoPreview ? (
                  <Image src={logoPreview} alt="logo preview" className="absolute w-28 object-contain" width={112} height={112} style={{ top: '38%', transform: 'translateY(-50%)' }} />
                ) : (
                  <div className="absolute top-1/2 transform -translate-y-1/2 text-center text-gray-400 px-4">
                    <p className="text-sm">Upload your logo to preview</p>
                  </div>
                )}
              </div>

              <label className="mt-4 block">
                <span className="sr-only">Upload logo</span>
                <input type="file" accept="image/*" onChange={handleLogoChange} className="w-full text-sm" />
              </label>

              <div className="mt-4 flex gap-3">
                <a href="#quote" className="inline-block px-4 py-2 bg-black text-white rounded-lg text-sm">Get a quote</a>
                <a href="#products" className="inline-block px-4 py-2 border rounded-lg text-sm">See bottle types</a>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500 text-center">This is a mockup preview. For print-ready proofs we produce a digital sample before production.</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-extrabold mb-6">Products & options</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Glass Bottles', desc: 'Premium glass, dishwasher safe. Custom label printing or etching.' },
            { title: 'PET Bottles', desc: 'Lightweight and durable — great for high turnover restaurants.' },
            { title: 'Eco Range', desc: 'Recycled materials & biodegradable packaging.' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-full h-36 flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">SVG</div>
              </div>
              <h4 className="font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-extrabold mb-6">How it works</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Request a quote', desc: 'Tell us your qty, bottle type & upload your logo.' },
            { step: '2', title: 'Free digital proof', desc: 'We send a print-ready proof within 24–48 hrs.' },
            { step: '3', title: 'Production & quality check', desc: 'We print, inspect, and pack your order.' },
            { step: '4', title: 'Delivery', desc: 'Fast shipping to your restaurant or event.' },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-3 font-semibold text-indigo-600">{s.step}</div>
              <h5 className="font-semibold mb-1">{s.title}</h5>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-extrabold mb-6">What restaurants say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: 'Our tables look so much more premium — guests notice the branded bottles right away.', by: 'The Blue Spoon' },
            { quote: 'Fast proofs and excellent print quality. Repeat order in two months.', by: 'The Terrace Grill' },
            { quote: 'Great eco options and the MOQ was manageable for our small bistro.', by: 'Bistro 47' },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold">{t.by}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Quote CTA */}
      <section id="quote" className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-indigo-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-extrabold">Ready to brand your bottles?</h3>
          <p className="mt-2 text-indigo-100">Send us your logo and details — we’ll reply with a free proof & quote.</p>

          <form action="#" className="mt-6 grid md:grid-cols-3 gap-4">
            <input className="p-3 rounded-lg text-gray-900" placeholder="Restaurant name" />
            <input className="p-3 rounded-lg text-gray-900" placeholder="Contact email" />
            <input className="p-3 rounded-lg text-gray-900" placeholder="Quantity" />
            <div className="md:col-span-2">
              <input type="file" className="w-full text-sm rounded-lg" />
            </div>
            <button className="md:col-span-1 px-4 py-3 bg-white text-indigo-600 rounded-lg font-semibold">Request quote</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h4 className="font-semibold">LaxDrinkCo</h4>
            <p className="mt-1">Custom branded bottles for restaurants — quality printing & fast proofs.</p>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="font-semibold">Email</div>
              <div>sales@laxdrinkco.com</div>
            </div>
            <div>
              <div className="font-semibold">Phone</div>
              <div>+91 98765 43210</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-gray-400">© {new Date().getFullYear()} LaxDrinkCo — All rights reserved</div>
      </footer>
    </div>
  )
}
