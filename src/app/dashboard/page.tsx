import Logout from "@/components/logout";

export default function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Logout />
        </div>
    )
}