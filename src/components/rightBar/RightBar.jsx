import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <span>Jenny</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <span>Jenny</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
              <span>Jenny</span> changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
              <span>Jenny</span> liked a post.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
              <span>Jenny</span> liked a comment.
              </p>
              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
              <span>Jenny</span> posted.
              </p> 
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online"/>
              <span>Jenny</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online"/>
              <span>Jenny</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online"/>
              <span>Jenny</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online"/>
              <span>Jenny</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightBar
