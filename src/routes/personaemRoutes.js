import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const personagensRouter = express.Router();

// ---------- Rotas de Personagens ----------

// GET -> /api/personagens - Listar todos os personagens
personagensRouter.get("/", AnimeController.getAllPersonagens);

// GET -> /api/personagens/:id - Obter um anime pelo ID
personagensRouter.get("/:id", AnimeController.getPersonagemById);

// POST -> /api/personagens - Criar um novo anime
personagensRouter.post("/", AnimeController.createPersonagem);

// PUT -> /api/personagens/:id - Atualizar um anime
personagensRouter.put("/:id", AnimeController.updatePersonagem);

// DELETE -> /api/personagens/:id - Remover um anime
personagensRouter.delete("/:id", AnimeController.deletePersonagem);

export default personagensRouter;
