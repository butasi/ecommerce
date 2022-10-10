import React from "react"
import { NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar(){
   return (
    <header className="bg-red-600">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink 
                to="/" 
                exact
                activeClassName="text-white"
                className="inflex-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                    The Cooperative Marketplace
                </NavLink>
                <NavLink to="/post"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-blue-700">
                    Items Available
                </NavLink>
                <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-blue-700">
                    All Items
                </NavLink>
                <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-blue-700">
                   About Us
                </NavLink>
            </nav>
            <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://github.com/butasi" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://facebook.com/100069757576039" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://twitter.com/butasi_" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://whatsapp.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://youtube.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://linkedin.com/in/rodgers-butasi-a8b15b11b" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>

            </div>
        </div>
    </header>
   )
}