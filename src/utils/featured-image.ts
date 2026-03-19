export function buildFeaturedImageDataUrl(title: string, founderImageUrl?: string, subtitle = 'Yahia Dubai Market Insights') {
  const safeTitle = title
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, 140);

  const safeSubtitle = subtitle
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const founderLayer = founderImageUrl
    ? `<image href="${founderImageUrl}" x="1020" y="520" width="140" height="140" preserveAspectRatio="xMidYMid slice" clip-path="url(#rounded)" />`
    : '';

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="680">
    <defs>
      <clipPath id="rounded"><rect x="1020" y="520" width="140" height="140" rx="20" ry="20"/></clipPath>
    </defs>
    <rect width="1200" height="680" fill="white"/>
    <text x="80" y="120" font-size="30" font-family="Arial, sans-serif" fill="#19A880" font-weight="700">${safeSubtitle}</text>
    <foreignObject x="80" y="170" width="860" height="350">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,sans-serif;color:#0f172a;font-size:54px;line-height:1.08;font-weight:700;">
        ${safeTitle}
      </div>
    </foreignObject>
    <text x="860" y="640" font-size="24" font-family="Arial, sans-serif" fill="#0f172a" font-weight="700">Yahia Fadlallah</text>
    ${founderLayer}
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
