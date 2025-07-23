import Logout from "@/components/logout";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { MailIcon } from "lucide-react";
import { CreateOrganizationForm } from "@/components/forms/create-organization-forms";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <Logout />
            </div>

            <div className="flex flex-col items-center justify-center h-screen">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Create Organization</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <div className="mb-2 flex flex-col items-center gap-2">
                            <div
                                className="flex size-11 shrink-0 items-center justify-center rounded-full border"
                                aria-hidden="true"
                            >
                                <svg
                                    className="stroke-zinc-800 dark:stroke-zinc-100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                                </svg>
                            </div>
                            <DialogHeader>
                                <DialogTitle className="sm:text-center">
                                    Create Organization
                                </DialogTitle>
                                <DialogDescription className="sm:text-center">
                                    Create a new organization to manage your team.
                                </DialogDescription>
                            </DialogHeader>
                        </div>
                        <CreateOrganizationForm />
                        <p className="text-muted-foreground text-center text-xs">
                            By creating an organization you agree to our{" "}
                            <a className="underline hover:no-underline" href="#">
                                Terms of Service
                            </a>
                            .
                        </p>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}