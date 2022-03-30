enum ROLE {
  ADMIN = "admin",
  USER = "user"
}

type usuarios = {
  name: string;
  email: string;
  role: ROLE;
};

const listaUsuarios: usuarios[] = [
  { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
  { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
  { name: "Aline", email: "aline@email.com", role: ROLE.USER },
  { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
  { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
  { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];

const funcao5 = (list: usuarios[]): string[] => {
  const emailsList: string[] = list
    .filter((usuarios) => usuarios.role === ROLE.ADMIN)
    .map((usuarios) => usuarios.email);
  return emailsList;
};

console.log(funcao5(listaUsuarios))