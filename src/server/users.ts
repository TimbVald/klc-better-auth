"use server";
import { auth } from "@/lib/auth"
 
export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            }
        })
        return {
            success: true,
            message: "Connexion réussie"
        }
    } catch (error) {
        console.error(error)
        const e = error as Error
        return {
            success: false,
            message: e.message || "Email ou mot de passe invalide"
        }
    }
}


export const signUp = async (name: string, email: string, password: string) => {
    try {
        await auth.api.signUpEmail({
        body: {
            email,
            password,
            name
        }
    })
    return {
        success: true,
        message: "Inscription réussie"
    }
    } catch (error) {
        console.error(error)
        const e = error as Error
        return {
            success: false,
            message: e.message || "Email ou mot de passe invalide"
        }
    }
}