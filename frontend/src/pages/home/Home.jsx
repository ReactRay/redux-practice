import { useSelector } from "react-redux"

function Home() {


    const { user } = useSelector(state => state.auth);

    if (!user) {
        return <h1>Please login to view this page</h1>
    }
    return (
        <div className="page-container">
            You are HOME ! {user?.email}
        </div>
    )
}

export default Home
