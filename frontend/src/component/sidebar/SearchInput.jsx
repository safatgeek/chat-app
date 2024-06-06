// @ts-nocheck
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import useConversation from '../../zustand/useConversation';
import useGetConversations from './../../hooks/useGetConversations';

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const { setSelectedtedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long")
    }

    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()))

    if (conversation) {
      setSelectedtedConversation(conversation)
      setSearch("")
    } else toast.error("No such user found !")
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full ' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <FaSearch className='h-6 w-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput