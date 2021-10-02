import "./post.css";

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 Hour Ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque porro similique quae ut tenetur deleniti illum qui odio maxime? Saepe perferendis, blanditiis non ut id sint dolorem at cum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor impedit doloribus sed tempore adipisci voluptatum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, voluptatibus. Laborum earum perferendis tempore consequatur error repellendus iste fuga, soluta repudiandae. Natus dolorem cum rerum, quo quia earum dignissimos quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maiores magni nostrum illo dolores tempora nesciunt reprehenderit suscipit explicabo quam sequi tenetur ducimus exercitationem, at consequatur iste possimus, molestias dignissimos? Voluptate, deleniti aut? Cumque tenetur amet ea ipsum nisi perspiciatis culpa eaque quis odio repellendus!

            </p>
        </div>
    );
};

export default Post;