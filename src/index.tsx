import { createRoot } from 'react-dom/client'
import { App } from '@components/App'
// Other imports
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)

// Register the service worker
serviceWorkerRegistration.register()
