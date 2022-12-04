import React from 'react'

const Header = ({ page, children }) => {
  return (
    <header className={`common__header ${page}__header`}>
        <h1>{children}</h1>
    </header>
  )
}

export default Header
