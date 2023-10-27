"use client"

import { useAuth } from "@/contexts/AuthContext"

export default function Homepage() {

  const {currentUser} = useAuth()

  return <>
    <h1>Homepage</h1>

    <br></br>
    <br></br>
    <br></br>

    <p>{currentUser && JSON.stringify(currentUser)}</p>
    {/* <p>{currentUser && currentUser.uid}</p> */}

  </>
}
