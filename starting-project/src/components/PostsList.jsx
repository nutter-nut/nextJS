import Post from './Post';
import classes from './PostsList.module.css'

function PostsList(){
    return (
        <ul className={classes.posts}>
            <Post author="Maximilion" body="React.js is awesome!" name="test" />
            <Post author="Manuel" body="Check out the full course!" name="test2" />
        </ul>
    );
}

export default PostsList;