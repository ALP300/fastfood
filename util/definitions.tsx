export type Usuario = {
  cliente: string;
  id_login: number;
  id_perfil: number;
  status: string;
  fk_rol?: number;
};

export type Sesión = {
  sesionUsuario: Usuario | null;
  setSession: ({ sesionUsuario }: { sesionUsuario: Usuario | null }) => void;
};