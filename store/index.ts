import { Sesión } from '@/util/definitions';
import { create } from 'zustand';

export const useSesion = create<Sesión>((set) => ({
  sesionUsuario: null,
  setSession: ({ sesionUsuario }) => set({ sesionUsuario }),
}));