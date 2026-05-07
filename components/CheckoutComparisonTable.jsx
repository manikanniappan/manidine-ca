// ManiDine.ca / (project root) / components/CheckoutComparisonTable.jsx — Updated: 2026-05-07 15:25 (America/Edmonton)
// FILE: components/CheckoutComparisonTable.jsx

import React from "react";

export default function CheckoutComparisonTable() {
  // Example checkout comparison based on a $25 in-store menu order
  // and an approximately 5 km delivery in Alberta.
  const inStoreMenuPrice = 25.0;
  const otherAppsMenuMarkupRate = 0.15;
  const otherAppsMenuPrice = inStoreMenuPrice * (1 + otherAppsMenuMarkupRate);
  const otherAppsServiceFee = otherAppsMenuPrice * 0.15;
  const otherAppsDeliveryFee = 5.99;
  const otherAppsBusyPeriodFee = 2.0;
  const otherAppsOtherFees = 0.52;
  const otherAppsTax = 1.98;
  const otherAppsTotal = 41.55;
  const otherAppsTotalWithBusyPeriodFee = otherAppsTotal + otherAppsBusyPeriodFee;

  const maniDineServiceFee = 1.99;
  const maniDineDeliveryBase = 1.99;
  const maniDinePerKmRate = 0.65;
  const maniDineDeliveryDistanceKm = 5;
  const maniDineDeliveryRawFee =
    maniDineDeliveryBase + maniDinePerKmRate * maniDineDeliveryDistanceKm;
  const maniDineDeliveryFee = 4.99;
  const maniDineBusyPeriodFee = 0.0;
  const maniDineTax = 1.47;
  const maniDineTotal = 33.45;

  const savingsWithoutBusyPeriodFee = (otherAppsTotal - maniDineTotal).toFixed(2);
  const savingsWithBusyPeriodFee = (
    otherAppsTotalWithBusyPeriodFee - maniDineTotal
  ).toFixed(2);

  return (
    <div className="w-full font-[Poppins,Arial,sans-serif]">
      <div className="mb-2">
        <div className="text-sm font-semibold text-white/90">
          Typical checkout comparison
        </div>
        <div className="text-xs text-white/70">
          Same restaurant • same order • example totals
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <table className="w-full border-collapse text-left text-[10px] sm:text-[12px]">
          <thead>
            <tr className="bg-white/5">
              <th className="px-3 py-2 font-semibold text-white/90">Fee Type</th>
              <th className="px-3 py-2 font-semibold text-white/80">
                Other major food delivery apps
              </th>
              <th className="px-3 py-2 font-semibold text-white/90">
                ManiDine
              </th>
            </tr>
          </thead>

          <tbody className="text-white/85">
            <tr className="border-t border-white/10">
              <td className="px-3 py-2">Menu Price</td>
              <td className="px-3 py-2">
                ${otherAppsMenuPrice.toFixed(2)}
                <div className="mt-1 text-[10px] text-white/55">
                  $25.00 + 15% markup
                </div>
              </td>
              <td className="px-3 py-2 font-semibold">
                ${inStoreMenuPrice.toFixed(2)}
                <div className="mt-1 text-[10px] font-normal text-white/60">
                  In-store price
                </div>
              </td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-2">Service Fee</td>
              <td className="px-3 py-2">
                ${otherAppsServiceFee.toFixed(2)}
                <div className="mt-1 text-[10px] text-white/55">
                  15% of marked-up menu price
                </div>
              </td>
              <td className="px-3 py-2 font-semibold">
                ${maniDineServiceFee.toFixed(2)}
                <div className="mt-1 text-[10px] font-normal text-white/60">
                  Flat ManiDine service fee
                </div>
              </td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-2">Delivery Fee</td>
              <td className="px-3 py-2">
                ${otherAppsDeliveryFee.toFixed(2)}
                <div className="mt-1 text-[10px] text-white/55">
                  Typical 5 km example
                </div>
              </td>
              <td className="px-3 py-2 font-semibold">
                ${maniDineDeliveryFee.toFixed(2)}
                <div className="mt-1 text-[10px] font-normal text-white/60">
                  5 km: $1.99 + ($0.65 × 5 km) = ${maniDineDeliveryRawFee.toFixed(2)} → $4.99
                </div>
              </td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-2">Busy-Period Fee</td>
              <td className="px-3 py-2">
                ${otherAppsBusyPeriodFee.toFixed(2)}
                <div className="mt-1 text-[10px] text-white/55">
                  Example added during high-demand times
                </div>
              </td>
              <td className="px-3 py-2 font-semibold">
                ${maniDineBusyPeriodFee.toFixed(2)}
                <div className="mt-1 text-[10px] font-normal text-white/60">
                  No ManiDine busy-period fee
                </div>
              </td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-2">Other / Hidden Fees</td>
              <td className="px-3 py-2">
                ${otherAppsOtherFees.toFixed(2)}
                <div className="mt-1 text-[10px] text-white/55">
                  Small-fee example
                </div>
              </td>
              <td className="px-3 py-2 font-semibold">$0.00</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="px-3 py-2">Estimated Tax</td>
              <td className="px-3 py-2">${otherAppsTax.toFixed(2)}</td>
              <td className="px-3 py-2 font-semibold">
                ${maniDineTax.toFixed(2)}
              </td>
            </tr>

            <tr className="border-t border-white/10 bg-white/5">
              <td className="px-3 py-2 font-semibold">Typical Total</td>
              <td className="px-3 py-2 font-semibold">
                ${otherAppsTotal.toFixed(2)}
                <div className="mt-1 text-[10px] font-normal text-white/55">
                  ${otherAppsTotalWithBusyPeriodFee.toFixed(2)} with busy-period fee
                </div>
              </td>
              <td className="px-3 py-2 font-extrabold text-white">
                ${maniDineTotal.toFixed(2)}
              </td>
            </tr>

            <tr className="border-t border-white/10 bg-white/5">
              <td className="px-3 py-2 font-semibold">Your Savings</td>
              <td className="px-3 py-2">—</td>
              <td className="px-3 py-2 font-extrabold text-white">
                Save about ${savingsWithoutBusyPeriodFee} / order
                <div className="mt-1 text-[10px] font-semibold text-white/70">
                  Save about ${savingsWithBusyPeriodFee} when other apps add a $2.00 busy-period fee
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
