import React from 'react'
export default function ServiceCard({title, desc}){
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="text-sm text-slate-600">{desc}</div>
    </div>
  )
}