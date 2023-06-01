import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './hooks/useTranslation.tsx'
import Owner from './Owner.tsx'
import { SessionProvider } from './utils/supabase.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SessionProvider>
		<LanguageProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/owner' element={<Owner />} />
					<Route path='/' element={<App />} />
				</Routes>
			</BrowserRouter>
		</LanguageProvider>
		</SessionProvider>
	</React.StrictMode>,
)
