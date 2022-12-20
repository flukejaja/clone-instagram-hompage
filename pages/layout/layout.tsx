import Body from "./body";
import Sidebarleft from "./sidearLeft";
import Sidebar from "./sidebar";

export default function Layout() {
    return <div className="flex w-screen">
        <div className="w-1/4">
            <Sidebar />
        </div>
        <div className="w-full">
            <Body/>
        </div>
        <div className="w-2/4">
            <Sidebarleft />
        </div>
    </div>
}