import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
export default function Body() {
    let header = Array.from(Array(5).keys())
    return <div className="w-full flex-col mt-6 pl-4 pr-4 max-w-full space-y-6 flex  items-center">
        <div className="h-24 w-[36rem] max-w-full bg-black rounded-lg flex items-center space-x-4 overflow-auto border border-gray-500">
            {
                header.map(item => {
                    return <div className="flex-col pl-4 ">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-white"></div>
                        </div>
                        <p className="text-sm">pakkapons</p>
                    </div>
                })
            }
        </div>
        <div className="h-[42rem] w-[36rem] max-w-full bg-black rounded-lg flex-col overflow-auto border border-gray-500">
            <div className="flex items-center space-x-2 h-16  pl-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="h-8 w-8">
                        <img src='/Symbol-Lamborghini.jpg' alt="logo"
                            className="object-cover h-8 w-8 rounded-full " />
                    </div>
                </div>
                <p className="text-sm">lamborghini</p>
            </div>
            <div className="h-96">
                <Image src="/lamborghini-aventador-sv-black-darth-vader-2880x1800-1459.jpg" sizes="100vw" className="w-full h-full" width='0' height="0" alt="photo" />
            </div>
            <div className="pl-4 pr-4">
                <div className="h-12 w-full flex items-center space-x-4 text-2xl">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div className="flex space-x-1">
                    <p>Liked by</p>
                    <p className="font-semibold"> chorpaka.p </p>
                    <p>and</p>
                    <p className="font-semibold"> others </p>
                </div>
                <div className="h-24 break-all text-sm">
                    lamborghini We're always on the hunt for pure driving adrenaline. In real life and videogames alike.
                    <p className="truncate text-sm">
                        Check out this awesome Aventador SVJ captured by @geovaniiphotographer on @forzahorizonofficial.
                        This is what Game Reality is all about: take a photo of any of our models from Forza Horizon and share it on Instagram tagging us.
                        #Lamborghini #GameReality
                        __
                        Aventador SVJ: fuel consumption combined 18.0 l/100km; CO2-emissions combined 448 g/km (WLTP EU27)
                    </p>
                </div>
            </div>
            <div className="h-12 w-full flex justify-between border-t">
                <p className="h-8 w-1/6 rounded-full flex justify-center items-center text-3xl pt-4">
                    <FontAwesomeIcon icon={faFaceSmile} />
                </p>
                <input type="text" className="h-full w-full pl-4 bg-black outline-none" placeholder="Add Comments..." />
                <p className="w-1/6 flex items-center pl-4 text-blue-600 font-semibold">Post</p>
            </div>
        </div>
    </div>
}