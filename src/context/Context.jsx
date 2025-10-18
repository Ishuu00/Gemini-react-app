import React, { createContext, useState } from 'react'
import main from '../config/Gemini'

export const UserContext = createContext()

const Context = (props) => {
    const [input, setInput] = useState()
    const [lastPrompt, setLastPrompt] = useState('') // added to keep last sent prompt
    const [showResult, SetShowResult] = useState(false)  //switch between gemini intro and response area
    const [resultData, setResultData] = useState('') //shows the acutal response of ai
    const [loader, setLoader] = useState(true)
    const onSent = async () => {
        SetShowResult(true)
        setLoader(false)
        setInput('') // clear textarea only
        setLastPrompt(input) // save current input for display
        const response = await main(input)
        setLoader(true)
        setResultData(response)
    }

    const contextValue = {
        input,
        setInput,
        lastPrompt, // expose lastPrompt
        onSent,
        showResult,
        SetShowResult,
        resultData,
        loader,
        setLoader,
    }
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Context
