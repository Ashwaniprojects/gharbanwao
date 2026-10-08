export const Logo = ({ className = "" }) => (
  <a href="/" className={`inline-flex items-center gap-2.5 ${className}`} data-testid="site-logo" aria-label="Ghar Banwao home">
    <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#93C526" />
      <path d="M14 34 L32 18 L50 34" fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="21" y="34" width="22" height="14" fill="#FFFF00" />
      <rect x="29" y="40" width="6" height="8" fill="#000" />
    </svg>
    <span className="font-extrabold tracking-tight text-[20px] leading-none">
      GharBanwao<span className="text-green">.com</span>
      <sup className="text-[10px] font-medium ml-0.5">®</sup>
    </span>
  </a>
);
