import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsThunk } from "../../redux/postReducer/postThunks";

function Home() {


    const { posts } = useSelector(state => state.posts);
    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPostsThunk());
    }, [dispatch]);




    console.log(posts)
    return (
        <div className="page-container">
            You are HOME ! {user?.email}

            <div>
                <h1>posts</h1>
                {posts ? posts.map((post) => {

                    return (
                        <div key={post.id} style={{ marginTop: '2rem', border: '1px solid black' }}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <p>{post.userName}</p>

                        </div>
                    )
                }) : <h2>Loading posts...</h2>}
            </div>
        </div >
    )
}

export default Home
