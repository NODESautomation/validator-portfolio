import type React from "react"

interface PgpLogoProps {
  fingerprint: string
  className?: string
}

const PgpLogo: React.FC<PgpLogoProps> = ({ fingerprint, className = "" }) => {
  const shortFingerprint = fingerprint.slice(0, 8)

  return (
    <div className={`font-mono text-xs bg-emerald-700 text-white p-2 rounded ${className}`}>{shortFingerprint}</div>
  )
}

export default PgpLogo
