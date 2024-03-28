// components
import Sidebar from "./components/sidebar/Sidebar.jsx"
import StepsForm from "./components/steps-form/StepsForm.jsx"

function App() {
  return (
    <main className="flex space-x-1 m-auto w-full h-full p-1 bg-white rounded font-bold text-sky-600">
      <Sidebar />
      <StepsForm />
    </main>
  )
}

export default App
