import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "./users/userSlice";
import { postAdded } from "./postSlice";

const AddpostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUSerId] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUSerId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle("");
            setContent("");
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
            <form className="space-y-4">
                <label htmlFor="postTitle" className="block text-sm font-semibold text-gray-600">
                    Post Title:
                </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />

                <label htmlFor="postAuthor" className="block text-sm font-semibold text-gray-600">
                    Author:
                </label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value=""></option>
                    {userOptions}
                </select>

                <label htmlFor="postContent" className="block text-sm font-semibold text-gray-600">
                    Content:
                </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>

                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                    className="w-full p-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                >
                    Save Post
                </button>
            </form>
        </div>
    );
};

export default AddpostForm;
