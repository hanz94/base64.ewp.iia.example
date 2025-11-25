import { ModalContextProvider } from './contexts/ModalContext'
import { ModuleCsvContextProvider } from './contexts/ModuleCsvContext'
import ModuleCsv from './components/ModuleCsv'
import ModalWindow from './components/ModalWindow'

function App() {

  return (
    <>
      <ModalContextProvider>
        <ModuleCsvContextProvider>
          <ModuleCsv />
        </ModuleCsvContextProvider>
        <ModalWindow />
      </ModalContextProvider>
    </>
  )
}

export default App
