import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//////////////////////////////// 목현 추가  ////////////////////////////////
import axios from 'axios';
//////////////////////////////// 목현 추가  ////////////////////////////////


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

//////////////////////////////// 목현 추가  ////////////////////////////////
    //새롭게 추가된 순 리스트
    const [newproduct, setNewproduct] = React.useState([]);
    //가격 높은 순 리스트
    const [productPriceUp, setProductPriceUp] = React.useState([]);
    //가격 낮은 순 리스트
    const [productPriceDown, setproductPriceDown] = React.useState([]);
    //판매량 높은 순 리스트
    const [productCount, setProductCount] = React.useState([]);
    //리뷰 많은 순 리스트
    const [countReview, setCountReview] = React.useState([]);

    useEffect(()=>{
        //최신순 리스트 뽑아오기 
        let url_newproduct = "http://localhost:9003/acorn/product/newList";
        axios.get(url_newproduct)
        .then((ResponseData)=>{
            setNewproduct(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //가격 높은순 리스트 뽑아오기 
        let url_ProductPriceUp = "http://localhost:9003/acorn/product/priceUpList";
        axios.get(url_ProductPriceUp)
        .then((ResponseData)=>{
            setProductPriceUp(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //가격 낮은순 리스트 뽑아오기 
        let url_ProductPriceDown = "http://localhost:9003/acorn/product/priceDownList";
        axios.get(url_ProductPriceDown)
        .then((ResponseData)=>{
            setproductPriceDown(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //판매량 높은순 리스트 뽑아오기 
        let url_ProductCount = "http://localhost:9003/acorn/product/countList";
        axios.get(url_ProductCount)
        .then((ResponseData)=>{
            setProductCount(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //리뷰 많은순 리스트 뽑아오기 
        let url_ProductPriceCount = "http://localhost:9003/acorn/product/countReview";
        axios.get(url_ProductPriceCount)
        .then((ResponseData)=>{
            setCountReview(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });
    },[])
/////////////////////////////// 목현 추가  ////////////////////////////////




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


<br/><br/>
 

{/* ===========================================목현 추가 ===========================================*/}
{/* 상품 리스트 세로버전 !! */}
<table>
    <thead>
        <td>넘버</td><td>상품번호</td><td>상품명</td><td>설명</td><td>가격</td><td>사진</td><td>리뷰수</td><td>조회수</td>
    </thead>
    <tbody>
        {
            // 최신순         ?.map     ? 안에 newproduct
            // 가격 높은 순   ?.map     ? 안에 productPriceUp
            // 가격 낮은 순   ?.map     ? 안에 productPriceDown
            // 판매량 높은 순 ?.map     ? 안에 productCount
            // 리뷰 많은 순   ?.map     ? 안에 countReview
            //slice(0, 리스트 전체 배열 중 뽑아낼 테이터 숫자 )
            newproduct.slice(0,5).map((row,idx)=>
                (
                    <tr>
                            <td>{idx+1}</td>
                            <td>{row.product_id}</td>
                            <td>{row.product_name}</td>
                            <td>{row.product_text}</td>
                            <td>{row.product_price}</td>
                            <td><img src={"http://localhost:8080/acorn/image/productImage/"+row.product_img} /></td>
                            <td>{row.review_count}</td>
                            <td>{row.review_avg_star}</td>
                    </tr>
                )
            )
        }
    </tbody>
</table>
<br/><br/>


{/* 상품 리스트 가로버전 !! */}
<table>
{
            // 최신순         ?.map     ? 안에 newproduct
            // 가격 높은 순   ?.map     ? 안에 productPriceUp
            // 가격 낮은 순   ?.map     ? 안에 productPriceDown
            // 판매량 높은 순 ?.map     ? 안에 productCount
            // 리뷰 많은 순   ?.map     ? 안에 countReview
            //slice(0, 리스트 전체 배열 중 뽑아낼 테이터 숫자 )
            newproduct.slice(0,5).map((row,idx)=> 
                (
                            <td>
                                {idx+1}<br/>
                                {row.product_id}<br/>
                                <img src={"http://localhost:9003/acorn/image/productImage/"+row.product_img}/>
                                {row.product_name}<br/>
                                {row.product_text}<br/>
                                {row.product_price}<br/>
                                {row.review_count}<br/>
                                {row.review_avg_star}
                            </td>
                )
            )
        }
</table>
{/* ===========================================목현 추가 ===========================================*/}

<br/><br/>
    </div>
  );
}

export default WholeProductPage;