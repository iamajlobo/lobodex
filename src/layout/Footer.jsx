import { Copyright } from "lucide-react";


const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <h1 className="w-full flex gap-2 items-center justify-center py-5">
                <Copyright size={20} opacity={0.8} color="white"/> 2026 All rights reserved. || iamajlobo
            </h1>
        </footer>
    ); 
}

export default Footer;