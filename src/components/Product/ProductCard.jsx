import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Category.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Link from '@material-ui/core/Link';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';

const useStyles = makeStyles((theme) => ({
  root: { marginRight: '2%' },
  comment: {
    color: blue[600],
  },
  media: {
    height: 250,
    paddingTop: '56.25%', // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
  likeButton: {
    color: red[800],
  },
}));

const ProductCard = ({ item }) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <>
      <div>
        <motion.div className="item">
          <Card className={classes.root} width={1}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                >
                  R
                </Avatar>
              }
              action={
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <PersonAddOutlinedIcon fontSize="large" />
                </IconButton>
              }
              //subheader={item.name.substring(0, 20)}
            />
            <Link href={item.urls.thumb} key={item.id}>
              <CardMedia
                className={classes.media}
                image={item.urls.thumb}
                title={item.name}
                width="10"
                height="500"
              />
            </Link>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {/* {item.description.substring(0, 200)} */}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={handleLikeClick}
              >
                <FavoriteIcon
                  className={liked ? classes.likeButton : ''}
                />
              </IconButton>
              <IconButton>
                <ChatRoundedIcon className={classes.comment} />
              </IconButton>
            </CardActions>
          </Card>
        </motion.div>
      </div>
    </>
  );
};
export default ProductCard;
