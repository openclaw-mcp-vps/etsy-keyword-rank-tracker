export default function Page() {
  const features = [
    "Daily automated rank checks for all your listings",
    "Email alerts when rankings drop or improve",
    "Competitor listing analysis side-by-side",
    "Historical ranking charts & trend data",
    "Track unlimited keywords per listing",
    "CSV export for reporting"
  ];

  const faqs = [
    {
      q: "How does the rank tracking work?",
      a: "We scrape Etsy search results daily for your target keywords and record the position of your listings. You get a full history of where you rank over time."
    },
    {
      q: "When will I receive ranking alerts?",
      a: "Email alerts are sent within minutes of a significant ranking change — either a notable drop or a jump — so you can act fast."
    },
    {
      q: "Can I track competitor listings too?",
      a: "Yes. Add any Etsy listing URL as a competitor and we'll track its rank for the same keywords alongside yours."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For Etsy Sellers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Etsy Listing Rankings<br />for Target Keywords
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Know exactly where your listings appear in Etsy search. Get daily rank checks, competitor analysis, and instant email alerts when your position changes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-white">Pro Plan</h2>
            <span className="bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-2 py-1 rounded-full">Most Popular</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Etsy Keyword Rank Tracker. All rights reserved.
      </footer>
    </main>
  );
}
