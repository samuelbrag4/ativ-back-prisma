import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const personagensRouter = express.Router();

// ---------- Rotas de Personagens ----------

// GET -> /api/personagens - Listar todos os personagens
personagensRouter.get("/", PersonagemController.getAllPersonagens);

// GET -> /api/personagens/:id - Obter um Personagem pelo ID
personagensRouter.get("/:id", PersonagemController.getPersonagemById);

// POST -> /api/personagens - Criar um novo Personagem
personagensRouter.post("/", PersonagemController.createPersonagem);

// PUT -> /api/personagens/:id - Atualizar um Personagem
personagensRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE -> /api/personagens/:id - Remover um Personagem
personagensRouter.delete("/:id", PersonagemController.deletePersonagem);

export default personagensRouter;
