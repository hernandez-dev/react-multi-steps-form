// app state
import state from "./state.jsx"

// context
import StateContext from "./context/StateContext.js"
import DispatchContext from "./context/DispatchContext.js"

// components
import Sidebar from "./components/sidebar/Sidebar.jsx"
import StepsForm from "./components/steps-form/StepsForm.jsx"

function App() {
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={1}>
        <main className="flex space-x-1 m-auto w-full max-w-6xl p-4 bg-white rounded-xl shadow-lg">
          <Sidebar steps={state.steps} />
          <StepsForm steps={state.steps} />
        </main>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
