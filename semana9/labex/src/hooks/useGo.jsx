import { useHistory } from 'react-router-dom'

const useGo = () => {
  const router = useHistory()

  const home = () => router.push('/')
  const biscoito = () => router.push('/biscoito')

  return {
    home,
    biscoito,
  }
}

export default useGo
