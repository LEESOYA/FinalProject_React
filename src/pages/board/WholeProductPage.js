import React from 'react';

import { makeStyles } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  cateBtn: {
    flexDirection:"row-reverse"
  },
  cardRoot: {
    maxWidth: 300,
  },
  cardMedia: {
    height:140,
  }

}));

function WholeProductPage() {
  const classes = useStyles();

  return(
    <div>
      <div className={classes.root}>
        <div style={{marginRight: '50px'}}>
          <h1>전체상품</h1>
        </div>
        <div >
          <ButtonGroup
            variant="text"
            color="default"
            aria-label="text primary utton group"
            size="small"
          >
            <Button>판매자추천순</Button>
            <Button>인기도순</Button>
            <Button>평점높은순</Button>
            <Button>최신등록순</Button>
          </ButtonGroup>
        </div>
      </div>
 
      {/* <Card> 하나만 남기고 디비에서 5개씩 받아와? */}
      <div style={{display:"flex"}}>
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image="src\images\macaron.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="h2">
                케이크 캔들
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                가격 : 17000원
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              귀여운 도시락 케이크를 마카롱으로 만나볼 수 있는 제품입니다 ♡ 쫀득
                고소한 꼬끄와 고급스러운 맛의 크림의 조화.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              리뷰 6,048
            </Button>
            <Button size="small" color="primary">
            평점 4.5/5
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image="src\images\macaron.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="h2">
                케이크 캔들
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                가격 : 17000원
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              귀여운 도시락 케이크를 마카롱으로 만나볼 수 있는 제품입니다 ♡ 쫀득
                고소한 꼬끄와 고급스러운 맛의 크림의 조화.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              리뷰 6,048
            </Button>
            <Button size="small" color="primary">
            평점 4.5/5
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image="src\images\macaron.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="h2">
                케이크 캔들
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                가격 : 17000원
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              귀여운 도시락 케이크를 마카롱으로 만나볼 수 있는 제품입니다 ♡ 쫀득
                고소한 꼬끄와 고급스러운 맛의 크림의 조화.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              리뷰 6,048
            </Button>
            <Button size="small" color="primary">
            평점 4.5/5
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image="src\images\macaron.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="h2">
                케이크 캔들
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                가격 : 17000원
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              귀여운 도시락 케이크를 마카롱으로 만나볼 수 있는 제품입니다 ♡ 쫀득
                고소한 꼬끄와 고급스러운 맛의 크림의 조화.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              리뷰 6,048
            </Button>
            <Button size="small" color="primary">
            평점 4.5/5
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image="src\images\macaron.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="h2">
                케이크 캔들
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                가격 : 17000원
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              귀여운 도시락 케이크를 마카롱으로 만나볼 수 있는 제품입니다 ♡ 쫀득
                고소한 꼬끄와 고급스러운 맛의 크림의 조화.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              리뷰 6,048
            </Button>
            <Button size="small" color="primary">
            평점 4.5/5
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default WholeProductPage;