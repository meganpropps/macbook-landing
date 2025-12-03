import React from 'react'
import { navLinks } from '../constants'

export const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple Logo" />
            
            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                   ))
                }
            </ul>

            <div className="flex-center gap-3">
                <button className="bg-transparent border-none outline-none cursor-pointer">
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}
