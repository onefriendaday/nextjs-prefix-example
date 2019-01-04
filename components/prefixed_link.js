import React from 'react'
import Link from 'next/link'

const PrefixedLink = props => (
  <Link href={'/blog' + props.href}>
    <a>{props.label}</a>
  </Link>
)

export default PrefixedLink
