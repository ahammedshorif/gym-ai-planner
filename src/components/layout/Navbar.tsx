import { Dumbbell } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)] backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-[var(--coler-text)] font-bold text-lg">
                <Dumbbell className="h-6 w-6 text-[var(--color-accent)]" />
                <span className="font-semibold text-lg">GymAI</span>
            </Link>
            <nav>
                <>
                <Link to="/auth/sign-in" className="text-[var(--color-text)]">
                    <button>Sign In</button>
                </Link>
                
                </>
            </nav>
        </div>
    </header>
}
