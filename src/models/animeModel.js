import prisma from "../../prisma/client.js";

class AnimeModel {
  // Obter todos os animes
  async findAll() {
    return await prisma.anime.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // Obter um anime pelo ID
  async findById(id) {
    return await prisma.anime.findUnique({
      where: { id: Number(id) },
    });
  }

  // Criar um novo anime
  async create(data) {
    return await prisma.anime.create({
      data,
    });
  }

  // Atualizar um anime
  async update(id, updates) {
    return await prisma.anime.update({
      where: { id: Number(id) },
      data: updates,
    });
  }

  // Remover um anime
  async delete(id) {
    return await prisma.anime.delete({
      where: { id: Number(id) },
    });
  }
}

export default new AnimeModel();