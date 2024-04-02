import { useImmerReducer } from "use-immer"

// app initial state
import { state as initialState } from "./state.jsx"

// reducer
import reducer from "./reducer.js"

// context
import StateContext from "./context/StateContext.js"
import DispatchContext from "./context/DispatchContext.js"

// components
import Sidebar from "./components/sidebar/Sidebar.jsx"
import StepsForm from "./components/steps-form/StepsForm.jsx"

function App() {
  // state
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <main className="m-auto w-full max-w-md desktop:flex desktop:max-w-[940px] desktop:p-[1rem] desktop:bg-white desktop:rounded-xl desktop:shadow-lg">
          <Sidebar steps={state.steps} />
          <StepsForm steps={state.steps} />
        </main>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
