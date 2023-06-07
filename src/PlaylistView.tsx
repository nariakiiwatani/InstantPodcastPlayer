import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { playlist_rss_url } from './components/playlist'

const PlaylistView = () => {
	const navigate = useNavigate()
	const {id} = useParams()
	useEffect(() => {
		if(id) {
			const rss_url = playlist_rss_url(id)
			navigate(`/?channel=${rss_url}`)
		}
	},[])
	return <>not found</>
}

export default PlaylistView