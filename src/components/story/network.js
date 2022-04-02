import { Router } from "express";
import * as Controller from "./controller";

const storyRouter = Router();

storyRouter.route("/").get(Controller.list);
storyRouter.route("/").post(Controller.store);
storyRouter.route("/:id").put(Controller.update);
storyRouter.route("/:id").delete(Controller.destroy);

export default storyRouter;
