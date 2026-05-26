import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-[#2b6b3a] mb-4">About</h1>
      <p className="text-lg mb-6">This is a minimal feature‑based structure.</p>
      <Link to="/" className="text-[#e5a12e] underline flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" />
        Back home
      </Link>
    </div>
  )
}
