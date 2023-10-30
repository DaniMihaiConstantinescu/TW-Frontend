"use client"

import { useContext, useState } from "react"
import { createContext } from "react"

const StackContext = createContext()

export function useStack(){
    return useContext(StackContext)
}

export function StackProvider({children}) {

    const [currentStack, setCurrentStack] = useState(null)

    function changeStack(stack){
        setCurrentStack(stack)
    }

    const value = {
        currentStack,
        changeStack
    }

    return <StackContext.Provider value={value}>{children}</StackContext.Provider>

}