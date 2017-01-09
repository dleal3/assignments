// [] - Create an article container
// [] - Add an image for the profile
// [] - Add profile name
// [] - Include article publish date
// [] - Include area for body text (content)


import React from 'react'

export default React.createClass({

  render() {
    return (
      <section className="post__container">
        <img src="https://avatars1.githubusercontent.com/u/23640802?v=3&s=40" className="profile__image"></img>
        <h2 className="post__title"> <a href=""> Instant Articles </a></h2>
        <h3 className="post__date"> May 13, 2015 </h3>
      <p className=""> LOREM IPSUM </p>
      </section>
    )
  }
})
