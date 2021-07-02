import { useEffect, useContext } from "react";
import { userContext, itemContext, resultContext, inputContext } from '../../Context'
import { signOut } from '../../services/users'
import { useHistory } from 'react-router-dom'

const SignOut = (props) => {
  const [user, setUser] = useContext(userContext)
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push('/')
    }
    signOutUser()
  }, [history, setUser])

  return ''
}

export default SignOut