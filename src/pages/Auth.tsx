import { AuthView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Auth(){
    const {pathname} = useParams();
    return <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
        <div className="max-w-md">
        <AuthView pathname={pathname} />
        </div>
    </div>
}