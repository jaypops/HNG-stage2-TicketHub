export function WavyBackground() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-64 text-primary opacity-10"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
    </svg>
  )
}
