import create from "zustand";

interface SampleState {
  sampleNumber: number;
  increaseSampleNumber: () => void;
  sampleString: string;
  setSampleString: (content: string) => void;
}

const useStore = create<SampleState>((set) => ({
  // === Sample Number ===
  sampleNumber: 0, // Init value
  increaseSampleNumber: () => {
    // ▼ Modify sampleNumber using 기존값(state.sampleNumber)
    set((state) => ({ sampleNumber: state.sampleNumber + 1 }));
  },

  // === Sample String ===
  sampleString: "샘플", // Init content
  setSampleString: (arg: string) => {
    // ▼ Modify sampleString using 외부 입력값(▲ arg)
    set((state) => ({ sampleString: arg }));
  },
}));

export default useStore;
