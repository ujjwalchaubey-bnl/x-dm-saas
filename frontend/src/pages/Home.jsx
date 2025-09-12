// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * Complete SaaS-style homepage (xreacher.com inspired)
 */

const FeatureCard = ({ title, desc, accent }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${accent}`}>
      {title.split(" ")[0]}
    </div>
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </div>
);

const PricingCard = ({ name, price, bullets, tag }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border">
    <div className="flex items-center justify-between">
      <h4 className="text-xl font-bold">{name}</h4>
      {tag && <span className="text-sm text-blue-600 font-semibold">{tag}</span>}
    </div>
    <div className="mt-4">
      <div className="text-3xl font-extrabold">{price}</div>
      <div className="text-sm text-gray-500 mt-1">per month</div>
    </div>
    <ul className="mt-5 space-y-2 text-sm text-gray-600">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-500">✔</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
    <Link
      to="/signup"
      className="block text-center mt-6 py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
    >
      Start {name}
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white font-bold px-3 py-2 rounded">XReach</div>
          <div className="text-sm text-gray-600 hidden md:block">Automate X outreach</div>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/pricing" className="text-sm text-gray-700 hover:text-gray-900">Pricing</Link>
          <Link to="/faq" className="text-sm text-gray-700 hover:text-gray-900">FAQ</Link>
          <Link to="/login" className="text-sm text-gray-700 hover:text-gray-900">Log in</Link>
          <Link to="/signup" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</Link>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 flex-grow">
        <section className="grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Automate X outreach — fill your calendar with qualified leads
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Run cloud-based campaigns, personalize messages at scale with AI, and send up to hundreds of DMs per connected account. Start for free and scale when you’re ready.
            </p>

            <div className="mt-6 flex gap-3">
              <Link to="/signup" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Start for Free
              </Link>
              <a href="#features" className="px-6 py-3 rounded-lg border text-gray-700 hover:bg-gray-100 transition">See features</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Free plan:</strong> 50 DMs/day. Pro unlocks up to 450 DMs/day per account.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-sm text-gray-500">Live campaign preview</div>
            <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm">
              <div className="text-xs text-gray-400">Campaign</div>
              <div className="mt-2 font-medium">Founder Outreach — 1200 leads</div>
              <div className="mt-3 text-sm text-gray-600">Messages sent: <strong>1,024</strong></div>
              <div className="mt-2 text-sm text-gray-600">Replies: <strong>82</strong></div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-12 grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="High daily send limits"
            desc="Scale outreach safely: tiered daily DM limits per connected account with rate control."
            accent="text-blue-600"
          />
          <FeatureCard
            title="AI personalization"
            desc="Use AI to generate personalized messages at scale and A/B test templates for higher reply rates."
            accent="text-purple-600"
          />
          <FeatureCard
            title="Cloud-based scheduling"
            desc="Run 24/7 campaigns without needing your machine online — scheduling, retries and error handling included."
            accent="text-green-600"
          />
        </section>

        {/* PRICING SUMMARY */}
        <section className="py-12">
          <h2 className="text-2xl font-bold">Plans that scale with you</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <PricingCard
              name="Starter"
              price="$0"
              tag="Free"
              bullets={[
                "50 DMs/day per account",
                "Connect 1 account",
                "Upload up to 1k leads",
                "Basic analytics",
              ]}
            />
            <PricingCard
              name="Pro"
              price="$97"
              tag="Popular"
              bullets={[
                "450 DMs/day per account",
                "Connect 1 account",
                "Upload up to 50k leads",
                "Advanced analytics & CSV import",
              ]}
            />
            <PricingCard
              name="Scale"
              price="$144"
              bullets={[
                "900 DMs/day per account",
                "Connect up to 2 accounts",
                "Upload up to 650k leads",
                "Priority support & team seats",
              ]}
            />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12">
          <h3 className="text-xl font-bold">What people say</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="font-semibold">“Booked dozens of calls”</div>
              <div className="text-sm text-gray-600 mt-2">
                I've been using this tool and it’s amazing! It booked dozens of calls for me.
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="font-semibold">“Super easy to use”</div>
              <div className="text-sm text-gray-600 mt-2">
                The setup was simple and I could launch my first campaign in minutes.
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="font-semibold">“Great support”</div>
              <div className="text-sm text-gray-600 mt-2">
                Anytime I had a question, the team helped right away. Highly recommend!
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="bg-blue-600 text-white font-bold px-3 py-2 rounded inline-block">
              XReach
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Automate X outreach and book more meetings — without the manual grind.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/pricing" className="hover:text-gray-900">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-gray-900">FAQ</Link></li>
              <li><Link to="/login" className="hover:text-gray-900">Login</Link></li>
              <li><Link to="/signup" className="hover:text-gray-900">Sign up</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} XReach. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
