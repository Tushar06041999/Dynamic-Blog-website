import "./singlePost.css";

const SinglePost = () => {
    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
               <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

               <h1 className="singlePostTitle">Lorem ipsum dolor sit amet

               <div className="singlePostEdit">
               <i className="singlePostIcon far fa-edit"></i>
               <i className="singlePostIcon far fa-trash-alt"></i>
               </div>
               
               </h1>
               <div className="singlePostInfo">
                   <span className="singlePostAuthor">Author:<b>Tushar Chandra Mohanto</b></span>

                   <span className="singlePostDate">1 Hour ago</span>
                   
                   
               </div>
               <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque expedita molestiae nisi porro eligendi voluptate vitae. Consequatur voluptatem voluptas iste aliquam! Deleniti, totam. Voluptatum earum deleniti officiis qui recusandae unde quibusdam aliquid veniam illo quasi asperiores nisi soluta dolores, excepturi tempora ex error! Quibusdam architecto perferendis ipsam asperiores, nulla odio. Dolor quibusdam blanditiis quos voluptas cupiditate laborum officia veritatis laboriosam maxime at molestias voluptatibus, perferendis sit atque exercitationem ipsa quo consequuntur sequi dolorum. Recusandae nam aspernatur facere enim, laudantium sequi accusantium voluptatem harum eius asperiores porro cum at ipsum ipsa minima nostrum a maiores illum voluptatibus vitae eaque aut deserunt corrupti eum! Ex sed recusandae temporibus a saepe totam animi, sit nobis maiores deserunt perferendis reiciendis, soluta nesciunt doloribus quo fugiat, et eveniet obcaecati. Ratione quisquam sint omnis reprehenderit minima provident distinctio quidem, earum quis, eius laboriosam nam qui doloribus eaque id labore impedit. Ut velit sapiente cupiditate, dolorum distinctio eligendi eius dolores dignissimos mollitia atque, quasi suscipit unde perferendis expedita repellat, magni assumenda similique sint animi omnis? Officia modi earum velit quisquam facere explicabo minima id deleniti reiciendis consectetur sequi perferendis perspiciatis iste aspernatur odit, voluptates sunt veritatis odio sed laudantium accusantium molestiae. Quam officia aliquid nam eius libero!</p>
           </div>
        </div>
    );
};

export default SinglePost;