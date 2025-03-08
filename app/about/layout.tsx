import Sidebar from "./sidebar";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            <div className="bg-blue-300 flex justify-center">
                {children}
            </div>
        </>
    );
}