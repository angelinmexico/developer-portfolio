import { Link } from 'react-router-dom'
import { Coffee, Home as HomeIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <HomeIcon className="w-12 h-12 text-[#e5a12e] mb-4" />
      <h1 className="text-5xl font-bold text-[#e5a12e] mb-4">Welcome</h1>
      <p className="text-xl text-[#2c3e6b] mb-8">Your barebone React app is ready.</p>
      <Link to="/about" className="btn-primary flex items-center gap-2">
        <Coffee className="w-4 h-4" />
        Go to About
      </Link>
    </div>
  )
}
