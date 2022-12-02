const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const loginSession = require('./config/session.js');

app.use(cors());
app.use(loginSession);
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server on : http://localhost:${PORT}`);
});

//홀수열 제품 불러오기
app.get('/product/odd', (req, res) => {
  const data = req.query;
  const params = data.subCate;

  db.query(
    'select * from product where prodnum % 2 = 1 and subcate = ?',
    [params],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.send(data);
      }
    }
  );
});

//짝수열 제품 불러오기
app.get('/product/even', (req, res) => {
  const data = req.query;
  const params = data.subCate;

  db.query(
    'select * from product where prodnum % 2 = 0 and subcate = ?',
    [params],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.send(data);
      }
    }
  );
});

//coupon불러오기
app.get('/loadCoupon', (req, res) => {
  const data = req.query;
  const params = data.userId;
  db.query(
    'select users_id, coupname, pinnumber, saleprice, status, coupnum from user_coupon as uc left outer join users as u on uc.users_id = u.id left outer join coupon as c on uc.coupon_coupnum = c.coupnum where users_id = ?',
    [params],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.send(data);
      }
    }
  );
});

//wish리스트 불러오기
app.get('/loadWishProduct', (req, res) => {
  const data = req.query;
  const params = data.userId;
  db.query(
    'select prodnum, prodname, prodprice, mainimage, subimage from wish as w left outer join product as p on w.product_prodnum = p.prodnum where users_id = ?',
    [params],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.send(data);
      }
    }
  );
});

//Cart리스트 불러오기
app.get('/loadCartProduct', (req, res) => {
  const data = req.query;
  const params = data.userId;
  db.query(
    'select amount, prodnum, prodname, prodprice, mainimage, subimage, color, size from cart as c left outer join detail as d on c.detail_detailnum = d.detailnum left outer join product as p on c.product_prodnum = p.prodnum where users_id = ?',
    [params],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.send(data);
      }
    }
  );
});

//review리스트 불러오기
app.get('/loadReview', (req, res) => {
  const data = req.query;
  const prodNum = data.prodNum;
  db.query(
    'select * from review where product_prodnum = ?',
    [prodNum],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.send(data);
      }
    }
  );
});

//UserReview리스트 불러오기
app.get('/loadUserReview', (req, res) => {
  const data = req.query;
  const userId = data.userId;
  db.query(
    'select users_id, contents, prodname from review as r left outer join product as p on r.product_prodnum = p.prodnum where users_id = ?',
    [userId],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.send(data);
      }
    }
  );
});

//coupon확인하고 있으면 user_coupon에 추가하기
app.post('/chCoupon', (req, res) => {
  const data = req.body.params;
  const couponPin = data.couponPin;
  const userId = data.userId;
  console.log(couponPin);
  db.query(
    'select coupnum from coupon where pinnumber = ?',
    [couponPin],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
        res.send({ success: false });
      } else {
        db.query(
          'insert into user_coupon (users_id, coupon_coupnum, status) values (?, ?, "y")',
          [userId, data[0].coupnum],
          function (err, data, fields) {
            if (err) {
              console.log('db저장실패');
            } else {
              console.log('db저장성공');
            }
          }
        );
        res.send(data);
      }
    }
  );
});

//user쿠폰 삭제
app.post('/deleteCoupon', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const couponNum = data.couponNum;

  db.query(
    'delete from user_coupon where users_id = ? and coupon_coupnum = ?',
    [userId, couponNum],
    function (err, data, fields) {
      if (err) {
        console.log('coupon삭제 실패');
      } else {
        console.log('coupon삭제 완료');
        res.send({ success: true });
      }
    }
  );
});

//리뷰 추가
app.post('/addReview', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const prodNum = data.prodNum;
  const review = data.review;

  db.query(
    'insert review (users_id, product_prodnum, contents) values (?, ?, ?)',
    [userId, prodNum, review],
    function (err, data, fields) {
      if (err) {
        console.log('review저장 실패');
      } else {
        console.log('review저장 성공');
        res.send({ success: true });
      }
    }
  );
});

//리뷰 삭제
app.post('/deleteReview', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const review = data.review;

  db.query(
    'delete from review where users_id = ? and contents = ?',
    [userId, review],
    function (err, data, fields) {
      if (err) {
        console.log('review삭제 실패');
      } else {
        console.log('review삭제 성공');
        res.send({ success: true });
      }
    }
  );
});

//wish추가
app.post('/addWish', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const prodNum = data.productData;

  db.query(
    'insert into wish (users_id, product_prodnum, wishyn) values (?, ?, "y")',
    [userId, prodNum],
    function (err, data, fields) {
      if (err) {
        console.log('Wish저장실패');
      } else {
        console.log('Wish저장성공');
        res.send({ success: true });
      }
    }
  );
});

//wish삭제
app.post('/deleteWish', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const prodNum = data.prodNum;

  db.query(
    'delete from wish where users_id = ? and product_prodnum = ?',
    [userId, prodNum],
    function (err, data, fields) {
      if (err) {
        console.log('Wish삭제 실패');
      } else {
        console.log('Wish삭제 성공');
        res.send({ success: true });
      }
    }
  );
});

//Cart추가
app.post('/addCart', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const prodNum = data.productData;
  const color = data.color;
  const size = data.size;

  db.query(
    'select detailnum from detail where color = ? and size = ? and product_prodnum = ?',
    [color, size, prodNum],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        db.query(
          'insert into cart (users_id, product_prodnum, amount, detail_detailnum) values (?, ?, 1, ?)',
          [userId, prodNum, data[0].detailnum],
          function (err, data, fields) {
            if (err) {
              console.log('Cart저장실패');
            } else {
              console.log('Cart저장성공');
            }
          }
        );
        res.send(data);
      }
    }
  );
});

//Cart삭제
app.post('/deleteCart', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const prodNum = data.prodNum;

  db.query(
    'delete from cart where users_id = ? and product_prodnum = ?',
    [userId, prodNum],
    function (err, data, fields) {
      if (err) {
        console.log('Cart삭제 실패');
      } else {
        console.log('Cart삭제 성공');
        res.send({ success: true });
      }
    }
  );
});

//CartAmout수정
app.post('/changeCartAmount', (req, res) => {
  const data = req.body.params;
  const userId = data.userId;
  const prodNum = data.prodNum;
  const amount = data.amount;

  db.query(
    'update cart set amount = ? where users_id = ? and product_prodnum = ?',
    [amount, userId, prodNum],
    function (err, data, fields) {
      if (err) {
        console.log('amount수정 실패');
      } else {
        console.log('amount수정 성공');
        res.send({ success: true });
      }
    }
  );
});
//로그인
app.post('/signin', (req, res) => {
  const signin = req.body.signin;
  const id = signin.id;
  const password = signin.password;
  db.query(
    `SELECT id FROM users WHERE id =? AND pw =?`,
    [id, password],
    function (err, data, fields) {
      console.log(data[0]);
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        if (data.length > 0) {
          req.session.login = data[0];
          req.session.save((error) => {
            if (error) console.log(error);
          });
          console.log('id데이터 확인');
          console.log(req.session.login);
          res.json(data[0]);
          return;
        } else {
          console.log('id데이터 없음');
          res.json(null);
          return;
        }
      }
    }
  );
});
//회원가입
app.post('/signup', (req, res) => {
  const signup = req.body.signup;
  const id = signup.id;
  const name = signup.name;
  const password = signup.password;
  const phone = signup.phone;
  const passwordConfirm = signup.passwordConfirm;
  db.query(
    `INSERT INTO users(id, pw, username, phonenum, email, join_date, gender) VALUES (?, ?, ?, ?, '이메일 직접 입력' ,NOW(), 'M')`,
    [id, name, password, phone, passwordConfirm],
    function (err, data, fields) {
      if (err) {
        console.log('데이터 가져오기 실패');
      } else {
        res.json(data);
        console.log('데이터 보내기 성공');
      }
    }
  );
});
