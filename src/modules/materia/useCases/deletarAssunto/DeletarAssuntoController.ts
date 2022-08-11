import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeletarAssuntoUseCase } from "./DeletarAssuntoUseCase";

class DeletarAssuntoController {
  async handle(request: Request, response: Response) {
    const { titulo } = request.body;

    const deletarAssuntoUseCase = container.resolve(DeletarAssuntoUseCase);

    const apagar = await deletarAssuntoUseCase.execute({ titulo });

    if (apagar) {
      return response.status(200).send();
    }
    else {
      return response.status(404).json({ error: "Assunto não encontrado" });
    }
  }
}

export { DeletarAssuntoController };