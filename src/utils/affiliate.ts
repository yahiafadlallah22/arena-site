const KLOOK_AID = '115387';
const KLOOK_ADID = '1240159';

export function buildKlookAffiliateUrl(targetUrl: string) {
  if (targetUrl.includes('affiliate.klook.com/redirect')) {
    return targetUrl;
  }
  return `https://affiliate.klook.com/redirect?aid=${KLOOK_AID}&aff_adid=${KLOOK_ADID}&k_site=${encodeURIComponent(targetUrl)}`;
}

export function buildKlookFallbackUrl(targetUrl?: string) {
  if (!targetUrl) {
    return `https://www.klook.com/?aid=${KLOOK_AID}`;
  }
  return buildKlookAffiliateUrl(targetUrl);
}

export function buildKlookHotelAffiliateUrl(targetUrl?: string, fallbackUrl?: string) {
  if (targetUrl?.includes('affiliate.klook.com/redirect')) {
    return targetUrl;
  }

  const hotelTarget = targetUrl && /\/hotels\/detail\//.test(targetUrl) ? targetUrl : fallbackUrl || targetUrl;

  if (!hotelTarget) {
    return `https://www.klook.com/hotels/?aid=${KLOOK_AID}`;
  }

  return buildKlookAffiliateUrl(hotelTarget);
}

export function buildWhatsappUrl(phone: string, message: string) {
  const normalized = phone.replace(/[^\d+]/g, '');
  return `https://wa.me/${normalized.replace('+', '')}?text=${encodeURIComponent(message)}`;
}
