import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    return (
      <React.Fragment>

	<h1>Listing articles</h1>

	<table>
	 <thead>
  		  <tr>
		    <th>Title</th>
		    <th>Text</th>
		    <th></th>
		  </tr>
	 </thead>
	 <tbody>


	          {this.props.articles.map(article => (
		  <tr key={article.id}>
        	    <td>{`${article.title}`}</td>
        	    <td>{`${article.text}`}</td>
		  </tr>
	          ))}

	 </tbody>
	</table>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  articles: PropTypes.array
};
export default Article
