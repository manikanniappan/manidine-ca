// ManiDine Website — app/flyer/page.tsx — updated 2026-05-14

import { headers } from "next/headers";
import { redirect } from "next/navigation";

const IOS_APP_URL = "https://apps.apple.com/us/app/manidine/id6758255262";
const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=com.manidine.customer";
const WEBSITE_URL =
  "https://manidine.ca/?utm_source=bag_insert&utm_medium=qr&utm_campaign=edmonton_launch";

export default async function FlyerRedirectPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const ua = userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) {
    redirect(IOS_APP_URL);
  }

  if (/android/.test(ua)) {
    redirect(ANDROID_APP_URL);
  }

  redirect(WEBSITE_URL);
}