import React from 'react'
import MainApp from './components/09-useContext/MainApp'
import TodoApp from './components/08-useReducer/TodoApp'
import { Padre } from './components/07-tarea-memo/Padre'
import CallbackHook from './components/06-memos/CallbackHook'
import MemoHook from './components/06-memos/MemoHook'
import Memorize from './components/06-memos/Memorize'
import Layout from './components/05-useLayoutEffect/Layout'
import RealExampleRef from './components/04-useRef/RealExampleRef'
import FocusScreen from './components/04-useRef/FocusScreen'
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import CounterApp from './components/01-useState/CounterApp'
import CustomCounterHook from './components/01-useState/CustomCounterHook'
import SimpleForm from './components/02-useEffect/SimpleForm'

const HookApp = () => {
    return (
        <div>
            <CounterApp />
            <CustomCounterHook />
            <SimpleForm />
            <FormWithCustomHook />
            <MultipleCustomHooks />
            <FocusScreen />
            <RealExampleRef />
            <Layout />
            <Memorize />
            <MemoHook />
            <CallbackHook />
            <Padre />
            <TodoApp />
            <MainApp />
            {/* <h1>Hola Mundo!</h1> */}
        </div>
    )
}

export default HookApp
