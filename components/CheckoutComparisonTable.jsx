// FILE: components/CheckoutComparisonTable.jsx

import React from "react";

export default function CheckoutComparisonTable() {
  // Average example (from your earlier example numbers):
  // Uber: 42.18, Skip: 40.92 => avg = 41.55
  // ManiDine: 33.45 => savings = 8.10
  const otherAppsAvg = 41.55;
  const maniDineExample = 33.45;
  const savings = (otherAppsAvg - maniDineExample).toFixed(2);

  return (
    <div className="w-full font-[Poppins,Arial,sans-serif]">
      <div className="mb-3">
        <div className="text-sm font-semibold text-white/90">
          Typical checkout comparison
        </div>
        <div className="text-xs text-white/70">
          Same restaurant • same order • example totals
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <table className="w-full border-collapse text-left text-[12px] sm:text-[13px]">
          <thead>
            <tr className="bg-white/5">
              <th className="px-3 py-3 font-semibold text-white/90">Fee Type</th>
              <th className="px-3 py-3 font-semibold text-white/80">
                Other major food delivery apps
              </th>
              <th className="px-3 py-3 font-semibold text-white/90">
                ManiDine
              </th>
            </tr>
          </thead>

          <tbody className="text-white/85">
            <tr className="border-t border-white/10">
              <td className="px-3 py-3">Menu Price</td>
              <td className="px-3 py-3">Often marked-up</td>
              <td className="px-3 py-3 font-semibold">In-store price</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-3">Service Fee</td>
              <td className="px-3 py-3">Usually 10–15%</td>
              <td className="px-3 py-3 font-semibold">Flat $1.99</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-3">Delivery Fee</td>
              <td className="px-3 py-3">Typically $3.99–$11+</td>
              <td className="px-3 py-3 font-semibold">Capped &amp; transparent</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-3">Surge Pricing</td>
              <td className="px-3 py-3">Often</td>
              <td className="px-3 py-3 font-semibold">Never</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-3">Hidden Fees</td>
              <td className="px-3 py-3">Often</td>
              <td className="px-3 py-3 font-semibold">None</td>
            </tr>

            <tr className="border-t border-white/10 bg-white/5">
              <td className="px-3 py-3 font-semibold">Typical Total</td>
              <td className="px-3 py-3 font-semibold">${otherAppsAvg.toFixed(2)}</td>
              <td className="px-3 py-3 font-extrabold text-white">
                ${maniDineExample.toFixed(2)}
              </td>
            </tr>

            <tr className="border-t border-white/10 bg-white/5">
              <td className="px-3 py-3 font-semibold">Your Savings</td>
              <td className="px-3 py-3">—</td>
              <td className="px-3 py-3 font-extrabold text-white">
                Save about ${savings} / order
_loading…
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-[11px] text-white/60">
        *Example based on a ~$25 order and ~5 km delivery. Taxes vary by location.
      </div>
    </div>
  );
}
