import React from 'react'
export default function TestimonialCard({name, text}){
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="text-sm">“{text}”</div>
      <div className="mt-3 font-semibold">— {name}</div>
    </div>
  )
}