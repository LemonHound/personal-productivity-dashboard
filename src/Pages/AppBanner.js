import { useUserContext } from '../Resources/UserContext.js'

function AppBanner() {

    const { userData } = useUserContext();
    const { displayName } = userData;

    return (
        <h3>Welcome, {displayName}!</h3>
    )
}

export default AppBanner