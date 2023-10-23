const koa=require('koa');
const Router=require('koa-router');
const mysql=require('mysql');
const wrapper=require('co-mysql');

//
let server=new koa();
server.listen(8080);

//
let conn=mysql.createConnection({host: '123.57.217.169', user: 'root', password: '123456', database: 'test'});
let db=wrapper(conn);
server.context.db=db;

//
let router=new Router();
router.get('*', async (ctx, next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');

  try{
    await next();
  }catch(e){
    ctx.status=500;
    ctx.body={error: 1, msg: 'server internal error'};
  }
});

router.get('/list', async ctx=>{
  console.log('list接口');
  let rows=await ctx.db.query("SELECT * FROM good");

  ctx.body={
    error: 0,
    data: rows
  };
});

router.get('/add/:name/:price/:count', async ctx=>{
  let {name, price, count}=ctx.params;

  let {insertId}=await ctx.db.query("INSERT INTO good (name, price, count) VALUES(?, ?, ?)", [name, price, count]);

  ctx.body={
    error: 0,
    data: {
      ID: insertId,
      name, price, count
    }
  };
});

router.get('/del/:id', async ctx=>{
  let {id}=ctx.params;

  let data=await ctx.db.query("DELETE FROM good WHERE ID=?", [id]);

  if(data.affectedRows){
    ctx.body={error: 0, msg: 'success'};
  }else{
    ctx.body={error: 1, msg: 'no this data'};
  }
});

server.use(router.routes());
