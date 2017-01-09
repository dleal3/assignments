// [] - Create an article container
// [] - Add an image for the profile
// [] - Add profile name
// [] - Include article publish date
// [] - Include area for body text (content)


import React from 'react'

export default React.createClass({

  render() {
    return (
      <div className="div__container">
      <section className="post__container">
        <img src="https://avatars1.githubusercontent.com/u/23640802?v=3&s=40" className="profile__image"></img>
        <h2 className="post__title"> <a href=""> Instant Articles </a></h2>
        <h3 className="post__date"> May 13, 2015 </h3>
      <p className=""> Is it midterm already?? It feels like only yesterday we were learning about how to git r done!</p>
      <p> Checkout my progress at <a href=""> medium.com/@dleal3 </a> </p>
      <p className="post__likes"> 778 Likes  315 Comments  53 Shares </p>

      <form className="comment__form">
      <img className="comment__image"src="https://avatars1.githubusercontent.com/u/21375521?v=3&s=96"></img>
      <h2 className="comment__name"><a href="">Justin Strayhorn</a> Time flies when your having fun! </h2>
      <h3 className="post__date"> May 13, 2015 </h3>
      <img className="comment__image2" src="https://avatars1.githubusercontent.com/u/23609224?v=3&s=96"></img>
      <h2 className="comment__name2"><a href=""> Lucio Gutierrez</a> Thumbs up on your blog post! </h2>
      <h3 className="post__date2"> May 13, 2015 </h3>
      </form>
      </section>
      </div>
    )
  }
})
