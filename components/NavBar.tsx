import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiAddCircleLine, RiArrowGoBackLine } from 'react-icons/ri'

const NavBar = () => {

  const { pathname } = useRouter()

  return (
    <div className="flex flex-row items-center justify-between w-full p-5 rounded-xl bg-custom-black-secondary">
      <div className="inline-flex space-x-2 font-bold text-lg">
        <span>Contzx</span>
        <span className="font-light text-neutral-400">
          {pathname === '/' && ''}
          {pathname === '/new' && '| New Contact'}
          {pathname === '/edit/[id]' && '| Edit Contact'}
        </span>
      </div>
      {pathname === '/' && (
        <Link href="/new">
          <a
            type="button"
            className="outline-none transition ease-in-out duration-200 transform hover:scale-95"
          >
            <RiAddCircleLine className="w-8 h-8" />
          </a>
        </Link>
      )}
      {pathname !== '/' && (
        <Link href="/">
          <a
            type="button"
            className="outline-none transition ease-in-out duration-200 transform hover:scale-95"
          >
            <RiArrowGoBackLine className="w-8 h-8" />
          </a>
        </Link>
      )}
    </div>
  )
}

export default NavBar