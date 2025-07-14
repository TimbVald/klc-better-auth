"use client";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Logout() {
    const router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/login");
    }

    return (
        <div className="flex justify-center">  
            <Button variant="outline" onClick={handleLogout}>Logout </Button>
        </div>
    )
}