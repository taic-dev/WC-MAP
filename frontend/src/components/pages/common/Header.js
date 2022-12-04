import React from 'react'

const Header = ({ page, children }) => {
  return (
    <header className={`common__header ${page}__header`}>
      <div className="common__filter">
        <h1>{children}</h1>
      </div>
    </header>
  )
}

export default Header
