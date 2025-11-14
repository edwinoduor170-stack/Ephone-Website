import Navbar from "./Navbar";
import { FaMobileAlt } from 'react-icons/fa';


const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaMobileAlt className="text-6xl text-violet-700"/>
                    <h1 className=" font-bold text-violet-700">ePhon</h1>
                </div>

                {/* Navigation */}

                <Navbar />

            </div>
        </header>
    );
};

export default Header;
