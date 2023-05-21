import { Request, Response, Router } from "express";
import { Project } from "../../models";
const router: Router = Router();

// creating a project
router.post("/api/v1/project/add", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const project = await Project.create({ ...data });
    return res.status(201).json(project);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server error.",
    });
  }
});
// getting projects
router.get("/api/v1/projects", async (_req: Request, res: Response) => {
  try {
    const projects = await Project.find({});
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server error.",
    });
  }
});
// updating projects
router.put("/api/v1/project/:id", async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    return res.status(204).json(project);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server error.",
    });
  }
});

// deleting projects

router.delete("/api/v1/project/:id", async (req: Request, res: Response) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    return res.status(200).json(true);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server error.",
    });
  }
});
// getting a single project

router.get("/api/v1/project/:id", async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server error.",
    });
  }
});

export default router;
