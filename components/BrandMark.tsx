export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-lockup compact" : "brand-lockup"}>
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <defs>
            <linearGradient id="astravox-mark" x1="9" x2="54" y1="9" y2="57">
              <stop offset="0" stopColor="#06B6D4" />
              <stop offset="0.55" stopColor="#4F46E5" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M31.6 8 53 56h-9.8l-4.5-10.5H24.5L20.1 56H10L31.6 8Zm-3.9 29.8h7.8L31.6 28l-3.9 9.8Z"
            fill="url(#astravox-mark)"
          />
          <path
            d="M8.7 42.4c8.5 5.2 31.6 3.4 46-7.6"
            fill="none"
            stroke="#06B6D4"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <circle cx="32" cy="42" fill="#06B6D4" r="4.2" />
        </svg>
      </span>
      {!compact && <span className="brand-word">Astravox</span>}
    </span>
  );
}
