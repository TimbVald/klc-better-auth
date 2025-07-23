"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn, signUp } from "@/server/users"

import { z } from "zod"
import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
})

export function ResetPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const searchParams = useSearchParams()
    const token = searchParams.get("token")


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {

        if (values.password !== values.confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas")
            form.setError("confirmPassword", { message: "Les mots de passe ne correspondent pas" })
            setIsLoading(false)
            return
        }


        setIsLoading(true)
        const { error } = await authClient.resetPassword({
            newPassword: values.password,
            token: token as string
        });
        if (!error) {
            toast.success("Mot de passe réinitialisé avec succès")
            router.push("/login")
        } else {
            toast.error(error?.message as string)
        }
        setIsLoading(false)
    }
    return (

        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Réinitialiser votre mot de passe</CardTitle>
                    <CardDescription>
                        Entrez votre nouveau mot de passe
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-6">
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Mot de passe</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="********" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="grid gap-3">
                                            <FormField
                                                control={form.control}
                                                name="confirmPassword"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Confirmer le mot de passe</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="********" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isLoading}>
                                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Réinitialiser le mot de passe"}
                                    </Button>
                                </div>
                                <div className="text-center text-sm">
                                    Vous avez déjà un compte ?{" "}
                                    <Link href="/login" className="underline underline-offset-4">
                                        Connexion
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                En cliquant sur continuer, vous acceptez nos <Link href="/terms" className="underline underline-offset-4">Conditions d&apos;utilisation</Link>{" "}
                et <Link href="/privacy" className="underline underline-offset-4">Politique de confidentialité</Link>.
            </div>
        </div>
    )
}
