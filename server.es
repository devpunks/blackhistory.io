const
  server = (new (require ('koa')))
, port   = process.env.PORT || 80

  server

    .use ( require ('koa-static') (__dirname + './') )

    .listen ( port )
