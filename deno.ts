import { Application, Router } 
//membuatServerSederhana dari Module Oak.
from "https://deno.land/x/oak/mod.ts"; 
//Untuk AmbilData dari Bahasa->resource.ts tersebut.
import {bahasa} from "./resource.ts";

  const app = new Application();
  const router = new Router();

 //Router=>localhost:8000/bahasa
  app.use(router.routes());
  app.use(router.allowedMethods())

  router.get("/bahasa", ctx => {
      ctx.response.body = Array.from (bahasa.values());
  })
  
  router.get("/bahasa/:id", ctx => {
      if(ctx.params && ctx.params.id && bahasa.has(ctx.params.id)){
        ctx.response.body = bahasa.get(ctx.params.id);
      }
  })

  console.log("http://localhost:8000/");
 app.listen({ port: 8000 });
