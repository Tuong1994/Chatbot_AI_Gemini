import { create, StateCreator } from "zustand";

interface PromptState {
  selectedTool: string;
  setSelectedTool: (tool: string) => void;
  resetTool: () => void;
}

const store: StateCreator<PromptState> = (set) => ({
  selectedTool: "",
  setSelectedTool: (tool: string) => set((state) => ({ ...state, selectedTool: tool })),
  resetTool: () => set((state) => ({ ...state, selectedTool: "" })),
});

const usePromptStore = create(store);

export default usePromptStore;
