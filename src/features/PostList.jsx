import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import TimeAgo from "./TimeAgo";

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-semibold mb-4">Posts</h2>
            {orderedPosts.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-md shadow-md mb-4">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    <div className="flex items-center">
                        <PostAuthor userId={post.userId} />
                        <span className="text-gray-500 mx-2">•</span>
                        <TimeAgo timestamp={post.date} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
