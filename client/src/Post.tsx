import React from 'react'

const Post = () => {
    return (
        <div className="post">
            <div className="image">
              <img src="https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg" alt="" />
            </div>
            <div className="texts">
              <h2>Full-house battery backup coming later this year</h2>
              <p className="info">
                  <a className="author">Dawid Paszko</a>
                  <time>2024-02-12 17:13</time>
              </p>
              <p className="summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    )
}


export default Post;