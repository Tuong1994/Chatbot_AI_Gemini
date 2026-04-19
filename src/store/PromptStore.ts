import { EToolType } from "@/services/prompt/enum";
import { create, StateCreator } from "zustand";

interface PromptState {
  prompt: string;
  selectedTool: EToolType | null;
  aiResponse: string;
  isLoading: boolean;
  isError: boolean;
  setPrompt: (prompt: string) => void;
  setSelectedTool: (tool: EToolType) => void;
  setAiResponse: (chunk: string) => void;
  setIsLoading: (status: boolean) => void;
  setIsError: (status: boolean) => void;
  resetPrompt: () => void;
  resetTool: () => void;
  resetAiResponse: () => void;
}

const store: StateCreator<PromptState> = (set) => ({
  prompt: "",
  selectedTool: null,
  aiResponse: "",
  isLoading: false,
  isError: false,
  setPrompt: (prompt: string) => set((state) => ({ ...state, prompt })),
  setSelectedTool: (tool: EToolType) => set((state) => ({ ...state, selectedTool: tool })),
  setAiResponse: (chunk: string) => set((state) => ({ ...state, aiResponse: state.aiResponse + chunk })),
  setIsLoading: (status: boolean) => set((state) => ({ ...state, isLoading: status })),
  setIsError: (status: boolean) => set((state) => ({ ...state, isError: status })),
  resetPrompt: () => set((state) => ({ ...state, prompt: "" })),
  resetTool: () => set((state) => ({ ...state, selectedTool: null })),
  resetAiResponse: () => set((state) => ({ ...state, aiResponse: "" })),
});

const usePromptStore = create(store);

export default usePromptStore;
