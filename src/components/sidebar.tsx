'use client'

import { cn } from "@/lib/utils"

export function Sidebar({ items, onItemClick, activeItem }) {
  return (
    <div className="w-64 bg-white shadow-md">
      <nav className="py-4">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button
                className={cn(
                  "w-full px-6 py-2 flex items-center text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
                  activeItem === item.id && "bg-gray-100 font-semibold"
                )}
                onClick={() => onItemClick(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}