import { NextFunction, Request, Response, Router } from "express";
import { User } from "./entities/user.entity";
import OrmConnection from "./mikro-connection";
import { RequestContext } from "@mikro-orm/core";

const router: Router = Router();

// router.use(async (req: Request, _res: Response, next: NextFunction) => {
//   const orm = await OrmConnection.getConnection();
//   RequestContext.create(orm.em, next);
// });

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const orm = await OrmConnection.getConnection();
  const user = await orm.em.fork().findOne(User, { name: "AT" });
  res.status(200).send(user);
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const orm = await OrmConnection.getConnection();
  const { name, address, phone } = req.body as User;
  const payload = new User({ name, address, phone } as User);
  console.log(payload);

  await orm.em.fork().persistAndFlush(payload);
  const user = await orm.em.fork().findOne(User, { id: payload.id });
  res.status(200).send(user);
});

export const UserController: Router = router;
