import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    display: "flex"
  },
  button: {
    marginRight: 100,
    width: 130
  },
  orderInfo: {
    width: 250,
    height: 280,
    margin: 10,
    float: "left"
  },
 
});

function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5">
                사이트
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.button} size="small" color="primary">
              상품Q&A 10건
            </Button>
            <Button className={classes.button} size="small" color="primary">
              등록상품수 3건
            </Button>
            <Button className={classes.button} size="small" color="primary">
              등록전시수 1건
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card className={classes.orderInfo} variant="outlined">
          <CardContent>
            <Typography variant="h5">
              주문/발송현황
            </Typography>
            <List>
              <ListItem>
                <ListItemText>입금대기 10건</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>입금완료 100건</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>배송준비 500건</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>배송완료 32건</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
     </div>
      <div>
        <Card className={classes.orderInfo} variant="outlined">
          <CardContent>
            <Typography variant="h5">
              취소/교환/반품
            </Typography>
            <List>
              <ListItem>
                <ListItemText>취소신청 10건</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>반품신청 100건</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>교환신청 500건</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default HomePage;