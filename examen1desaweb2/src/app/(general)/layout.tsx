'use client'
import BarraNavegacion from "../Components/NavBar";
import { useGastoContext } from "../Providers/GastoProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    const { isLogged } = useGastoContext();
    const router = useRouter();

    useEffect(() => {
        if (!isLogged) {
            router.push('/');
        }
    }, [isLogged, router]);

    return (
        <>
            <BarraNavegacion />
            <main className="container mt-4">
                {isLogged ? children : null}
            </main>
        </>
    );
}