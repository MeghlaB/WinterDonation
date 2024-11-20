import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider'
import CompaingsCard from '../Pages/CompaingsCard'

export default function Compaings() {
    const {clothes} = useContext(AuthContext)
  console.log(clothes)
  const activeCompaigns = clothes.filter(comapign => comapign.status === "Active")
  console.log(activeCompaigns)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            activeCompaigns.map((cloth)=> <CompaingsCard key={cloth.id} cloth={cloth}></CompaingsCard>)
        }
    </div>
  )
}
