import prisma from "../../prisma/client.js";

class PersonagemModel {
  // Obter todos os personagens
  async findAll() {
    return await prisma.personagem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // Obter um personagem pelo ID
  async findById(id) {
    return await prisma.personagem.findUnique({
      where: { id: Number(id) },
    });
  }

  // Criar um novo personagem
  async create(data) {
    return await prisma.personagem.create({
      data,
    });
  }

  // Atualizar um personagem
  async update(id, updates) {
    return await prisma.personagem.update({
      where: { id: Number(id) },
      data: updates,
    });
  }

  // Remover um personagem
  async delete(id) {
    return await prisma.personagem.delete({
      where: { id: Number(id) },
    });
  }
}

export default new PersonagemModel();