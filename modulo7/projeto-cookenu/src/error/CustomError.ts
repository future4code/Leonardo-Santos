export class CustomError extends Error {
  constructor(public statusCode: number, message: string){
      super(message)
  }
}

export class InvalidEmail extends CustomError{ 
  constructor(){
      super(400, "Email inválido")
  }
}

export class InvalidPassword extends CustomError{ 
  constructor(){
      super(400, "Senha inválida")
  }
}

export class UserNotFound extends CustomError{ 
  constructor(){
      super(404, "Usuário não encontrado")
  }
}

export class Unauthorized extends CustomError{ 
  constructor(){
      super(401, "Usuário não autorizado")
  }
}

export class invalidAuthenticatorData extends CustomError {
  constructor() {
      super(400, "Usuário não autorizado")
  }
}

export class invalidToken extends CustomError {
  constructor() {
      super(400, "O token precisa ser passado no header")
  }
}

export class invalidRecipe extends CustomError {
  constructor() {
      super(404, "Não existem receitas")
  }
}