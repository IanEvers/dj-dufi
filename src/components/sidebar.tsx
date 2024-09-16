'use client'
import { Check, Circle } from 'lucide-react'
import { cn } from "@/lib/utils"

export function Sidebar({ items, onItemClick, activeItem }) {
  return (
    <div className="w-full bg-white shadow-md p-2">
      <nav className="">
        <ul className="flex gap-2 flex-wrap">
          {items.map((item) => (
            <li key={item.id}>
              <button
                className={cn(
                  "w-full pl-3  py-2 flex items-center text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
                  activeItem === item.id && "bg-gray-100 font-medium"
                )}
                onClick={() => onItemClick(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.complete ? <Check className="w-5 h-5 mx-2 text-green-500" /> : <Circle className="w-5 h-5 mx-2 text-blue-500" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}