import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome, faSearch, faCompass, faVideo, faPaperPlane, faAdd, faUser } from '@fortawesome/free-solid-svg-icons'
export default function Sidebar() {
    let listSidebar = [{ name: 'Home', icon: faHome },
    { name: 'Search', icon: faSearch },
    { name: 'Explore', icon: faCompass },
    { name: 'Reels', icon: faVideo },
    { name: 'Messages', icon: faPaperPlane },
    { name: 'Notifications', icon: faHeart },
    { name: 'Create', icon: faAdd },
    { name: 'Profile', icon: faUser }] as any
    return <>
        <div className="bg-black w-full h-screen border-r border-gray-400">
            <div className="flex-col items-center">
                <div className="h-24  flex items-center justify-start pl-4">
                    <h1>Instagram</h1>
                </div>
            </div>
            {
                listSidebar.map((item: any) => {
                    return <div className=" h-14 flex items-center justify-start pl-4 space-x-3 text-lg">
                        <FontAwesomeIcon icon={item.icon} />
                        <p>{item.name}</p>
                    </div>
                })
            }
        </div>
    </>
}