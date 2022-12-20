export default function Sidebarleft() {
    let listSidebar = [1, 2, 3, 4, 5]
    return <>
        <div className="w-full h-screen border-r border-gray-400">
            <div className="flex-col items-center pt-4">
                <div className="space-x-4 h-24  flex items-center justify-between pl-4">
                    <div className="h-14 w-36 bg-white rounded-full">
                    </div>
                    <div className="w-full ">
                        <p>Pakkapongs</p>
                        <p>Pakkapong Sittiporn</p>
                    </div>
                    <div className="h-4 w-full ">
                        <p className="text-sky-600 text-sm font-bold">Switch</p>
                    </div>
                </div>
            </div>
            <div className="space-x-4 h-24  flex items-center justify-between pl-4">
                <div className="h-14 w-full flex items-center">
                    <p className="text-sm text-gray-400 font-semibold">Suggestions For You</p>
                </div>
                <div className="w-36">
                </div>
                <div className="h-4 w-full">
                    <p className="text-sm font-bold">See All</p>
                </div>
            </div>
            {
                listSidebar.map(items => {
                    return <div className="space-x-4 h-14  flex items-center justify-between pl-4">
                        <div className="h-8 w-20 bg-white rounded-full">
                        </div>
                        <div className="w-full ">
                            <p className="text-sm">Pakkapongs</p>
                            <p className="text-sm">Pakkapong Sittiporn</p>
                        </div>
                        <div className="h-4 w-full pl-4">
                            <p className="text-sky-600 text-sm font-bold">Follow</p>
                        </div>
                    </div>
                })
            }

        </div>
    </>
}