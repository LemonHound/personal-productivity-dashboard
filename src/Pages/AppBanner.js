import { useUserContext } from '../Resources/UserContext.js'

function AppBanner() {

    const { userData } = useUserContext();
    const { displayName } = userData;

    return (
        <h1>Welcome, {displayName}!</h1>
    )
}

export default AppBanner