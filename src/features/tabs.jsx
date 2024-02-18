import { createSlice } from "@reduxjs/toolkit"
import { html, css, js } from '../assets/index'

const initialState = [
    {
        id : 1,
        lang : "html",
        imgUrl : html,
        buttonContent : "HTML",
        code : `<div>
        <h1>Editeur de code avec React (Redux)</h1>
        <p>Coder directement sur votre navigateur</p>
        </div>`
    },
    {
        id : 2,
        lang : "css",
        imgUrl : css,
        buttonContent : "CSS",
        code : `body {
            font-family: Roboto, sans-serif;
            padding: 25px;
            color: #111;
            background-color: #f1f1f1;
        }`
    },
    {
        id : 3,
        lang : "javascript",
        imgUrl : js,
        buttonContent : "Javascript",
        code : `console.log("Hello editeur Js")`
    }
]

export const codeUpdater = createSlice({
    name : "Code-Updater",
    initialState,
    reducers: {
        updateCode: (state, action) => {
            state.find(obj => obj.id === action.payload.id).code = action.payload.code.value;
        }
    }
})

export const { updateCode } = codeUpdater.actions
export default codeUpdater.reducer
