import { PostCardProps } from "../../interfaces/IPost";

const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className="card" style={{ flex: '1 1 100%' }}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{post.body}</p>
                </blockquote>
            </div>
        </div>
    )
}

export default PostCard;