import PersonagemModel from "../models/personagemModel.js";

class PersonagemController {
  // GET /api/personagens
  async getAllPersonagens(req, res) {
    try {
      const personagens = await PersonagemModel.findAll();
      res.json(personagens);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
      res.status(500).json({ error: "Erro ao buscar personagens" });
    }
  }

  // GET /api/personagens/:id
  async getPersonagemById(req, res) {
    try {
      const { id } = req.params;
  
      // Busca o personagem pelo ID usando o Prisma
      const personagem = await PersonagemModel.findById(id);
  
      if (!personagem) {
        return res.status(404).json({ error: "personagem não encontrado" });
      }
  
      res.json(personagem);
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      res.status(500).json({ error: "Erro ao buscar personagem" });
    }
  }

  // POST /api/personagens
  async createPersonagens(req, res) {
    try {
      const data = req.body;
  
      // Validação básica
      if (
        !data.title ||
        !data.description ||
        !data.episodes ||
        !data.releaseYear ||
        !data.studio ||
        !data.genres ||
        !data.rating ||
        !data.imageUrl
      ) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }
  
      const newpersonagem = await PersonagemModel.create(data);
      res.status(201).json(newpersonagem);
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
      res.status(500).json({ error: "Erro ao criar personagem" });
    }
  }

  // PUT /api/personagens/:id
  async updatePersonagem(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
  
      // Atualizar o personagem
      const updatedpersonagem = await PersonagemModel.update(id, updates);
  
      if (!updatedpersonagem) {
        return res.status(404).json({ error: "personagem não encontrado" });
      }
  
      res.json(updatedpersonagem);
    } catch (error) {
      console.error("Erro ao atualizar personagem:", error);
      res.status(500).json({ error: "Erro ao atualizar personagem" });
    }
  }

  // DELETE /api/personagens/:id
  async deletePersonagem(req, res) {
    try {
      const { id } = req.params;
  
      // Remover o personagem
      const deletedpersonagem = await PersonagemModel.delete(id);
  
      if (!deletedpersonagem) {
        return res.status(404).json({ error: "personagem não encontrado" });
      }
  
      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover personagem:", error);
      res.status(500).json({ error: "Erro ao remover personagem" });
    }
  }
}

export default new PersonagemController();
