'use strict';

require('../css/style.css');

 
var Item = require('../components/item/index');
 
 
 var React = require('react');

  var App = React.createClass({
  
   
   
  render: function() {

 var response={"ThematicList":[{"ThematicTitle":"A Merry Coasting Party","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/12/21file/01_A_Merry_Coasting_Party.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":15,"Id":200},{"ThematicTitle":"Dolly and Dan and the Dimpledees","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/12/21file/01_Dolly_and_Dan_and_the_Dimpledees.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":4,"Id":199},{"ThematicTitle":"绘本里的动物画像","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/18file/warriorrabbitadjusted2.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":42,"Id":197},{"ThematicTitle":"Sunshine ABC 字母表","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/18file/1_Sunshine_ABC.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":29,"Id":196},{"ThematicTitle":"可爱的小兔子《About Bunnies》绘本精读","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/10file/bunnies01.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":2,"FavoriteNumber":43,"Id":194},{"ThematicTitle":"我被1939年出版的《1-2-3 picture book》的宝宝识字书美呆了","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/10file/01_1-2-3_Picture_Book.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":2,"FavoriteNumber":42,"Id":193},{"ThematicTitle":"适合2岁小朋友的“奇怪的蛋”《The odd egg》绘本精读","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/09file/41S1ME868jL._SY400_.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":72,"Id":192},{"ThematicTitle":"跟着绘本学英语——一起感受“下雪天”","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/08file/ccc1 (1).jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":60,"Id":186},{"ThematicTitle":"跟着绘本学英语——吉普车里的小羊","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/08file/aaass.png","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":2,"FavoriteNumber":5,"Id":184},{"ThematicTitle":"《粉红猪小妹Peppa Pig》Snow下雪了绘本精读","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/07file/s1 12 Snow[00_00_19][20151107-125624-0].JPG","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":69,"Id":183},{"ThematicTitle":"纪念北京2015的美丽的第一场雪——跟孩子一起玩雪吧","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/06file/d439b6003af33a87c28d1ab5c55c10385243b5b8.jpg","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":101,"Id":181},{"ThematicTitle":"与孩子一起进入“神奇瓶子”的亲情之旅吧！","CoverImage":"http://7xjfls.com2.z0.glb.qiniucdn.com/Thematic/2015/11/05file/1.png","ThematicTypeId":1,"ThematicTypeName":"动物","ThematicTypeLogo":"http://7xjfls.com2.z0.glb.qiniucdn.com/ThematicType/2015/11/18file/comma.jpg","ThematicTypeDesc":"Animals","CommentNumber":0,"FavoriteNumber":2,"Id":179}],"ResultNo":0,"ResultMsg":null}
 console.log(response.ThematicList);
     return (
         <div className="index-bd pb5 min-h142">
<Item source={response.ThematicList}></Item>
         </div>
    );
  }
});

      React.render(
          <App/>,
        document.body
      );

   