import { EToolType } from "@/services/prompt/enum";
import { create, StateCreator } from "zustand";

interface PromptState {
  selectedTool: EToolType | null;
  setSelectedTool: (tool: EToolType) => void;
  resetTool: () => void;
}

const store: StateCreator<PromptState> = (set) => ({
  selectedTool: null,
  setSelectedTool: (tool: EToolType) => set((state) => ({ ...state, selectedTool: tool })),
  resetTool: () => set((state) => ({ ...state, selectedTool: null })),
});

const usePromptStore = create(store);

export default usePromptStore;
