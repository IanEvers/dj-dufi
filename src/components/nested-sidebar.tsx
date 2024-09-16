'use client'

import { cn } from "@/lib/utils"
import { Check, Circle } from 'lucide-react'

export function NestedSidebar({ items, onItemClick, activeItem}) {
  return (
    <div className=" bg-white shadow-md">
      <nav className="py-4">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button
                className={cn(
                  "w-full px-6 py-2 flex items-center text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
                  activeItem === item.id && "bg-gray-100 font-medium"
                )}
                onClick={() => onItemClick(item.id)}
              >
                {item.complete ? <Check className="w-5 h-5 mr-2 text-green-500" /> : <Circle className="w-5 h-5 mr-2 text-blue-500" />}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}