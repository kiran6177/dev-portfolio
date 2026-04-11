import React from 'react'

function CommandStart() {
  return (
    <div className="h-6 flex gap-3">
      <span className="inline-block font-terminal text-primary-900 border border-dashed border-primary-900">
        ?
      </span>
      <span className="inline-block ">~</span>
    </div>
  )
}

export default CommandStart
