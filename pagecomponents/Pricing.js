'use client'
import React from 'react'

export default function PricingPlans() {
  return (
    <section className="pricing-tier-section">
      <h2 className="section-title">PageSnap is currently in <span className="text-cyan-300">Free Beta 🚀</span></h2>
<div className="flex justify-center">
  <p className="text-sm text-zinc-400 mb-8 max-w-xl text-center">
    All core features are available to try — no signup required.
    <br />
    Pricing tiers will go live after the beta ends. We'd love your feedback while we polish it up!
  </p>
</div>



      <div className="pricing-tiers">
        <div className="glass-card">
          <h3>Free</h3>
          <p className="price">$0</p>
          <ul>
            <li>• 3 Snapshots</li>
            <li>• Basic HTML view</li>
            <li>• No login needed</li>
          </ul>
          <p className="text-xs text-zinc-500 mt-3 italic">You're using this right now!</p>
        </div>

        <div className="glass-card opacity-60 hover:opacity-100 transition">
          <h3>Starter <span className="text-xs text-cyan-400">(Coming Soon)</span></h3>
          <p className="price">$3/mo</p>
          <ul>
            <li>• Unlimited Snapshots</li>
            <li>• Component Extraction</li>
            <li>• Saved History</li>
          </ul>
          <p className="text-xs text-zinc-500 mt-3 italic">Available after launch</p>
        </div>

        <div className="glass-card opacity-60 hover:opacity-100 transition">
          <h3>Pro <span className="text-xs text-cyan-400">(Coming Soon)</span></h3>
          <p className="price">$18 one-time</p>
          <ul>
            <li>• Everything in Starter</li>
            <li>• Priority Access</li>
            <li>• Cloud Export Tools</li>
            <li>• Lifetime Payment</li>
          </ul>
          <p className="text-xs text-zinc-500 mt-3 italic">Planned for power users</p>
        </div>
      </div>

      <p className="text-center mt-6 text-sm text-cyan-300 italic">
        Got a feature idea or feedback? <a href="/feedback" className="underline hover:text-cyan-200">Let us know →</a>
      </p>
    </section>
  )
}
