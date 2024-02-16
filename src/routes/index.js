import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Página de Inicio" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Acerca de ..." });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Página de Contacto" });
});

export default router;
