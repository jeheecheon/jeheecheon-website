import { Comment } from '@/common/components/post/Comment';
import CommentWriteArea from './CommentWriteArea';
import CommentInfo from '@/common/types/CommentInfo';
import { PromiseAwaiter } from '@/common/utils/promiseWrapper';
import { convertStringDateIntoDate, sortComments } from '@/common/utils/comment';

interface CommentsProps {
  className?: string;
  id: string;
  commentsAwaiter: PromiseAwaiter;
  setCommentsAwaiter: React.Dispatch<React.SetStateAction<PromiseAwaiter>>;
}

const Comments: React.FC<CommentsProps> = ({ className, id, commentsAwaiter, setCommentsAwaiter }) => {
  const comments: CommentInfo[] = commentsAwaiter.Await() as CommentInfo[];

  convertStringDateIntoDate(comments);
  const sortedComments = sortComments(comments);

  return (
    <div className={`max-w-5xl w-full
    ${className}`}>
      {
        sortedComments.map(
          (comment, idx) =>
            <Comment
              key={idx}
              comment={comment}
              setCommentsAwaiter={setCommentsAwaiter}
            />
        )
      }

      <CommentWriteArea
        postId={id}
        setCommentsAwaiter={setCommentsAwaiter}
      />
    </div>
  )
}

export default Comments;