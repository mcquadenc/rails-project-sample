import React from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));


class Article extends React.Component {
  render() {

    return (
      <React.Fragment>
        {/* Material App Bar */}
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={{flex: 1}}>
              Listing articles
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

	    <div >
	      <Paper >
	        <Table  size="small" aria-label="a dense table">
	          <TableHead>
	            <TableRow>
	              <TableCell align="right">Título</TableCell>
	              <TableCell align="right">Texto</TableCell>
	            </TableRow>
	          </TableHead>
	          <TableBody>
	            {this.props.articles.map(article => (
	              <TableRow key={article.id}>
	                <TableCell align="right">{`${article.title}`}</TableCell>
	                <TableCell align="right">{`${article.text}`}</TableCell>
	              </TableRow>
	            ))}
	          </TableBody>
	        </Table>
	      </Paper>
	    </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  articles: PropTypes.array
};


export default Article;