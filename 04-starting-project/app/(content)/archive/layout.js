import React from 'react'

export default function ArchiveMain({archive, latest}) {
  return (
    <div>
        <h1>Archive</h1>
        <section id='archive-filter'>
            {archive}
        </section>
        <section id='archive-latest'>
            {latest}
        </section>
    </div>
  )
}
