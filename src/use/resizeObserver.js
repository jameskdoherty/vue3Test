import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

export const useResizeObserver = () => {
  const resizeRef = ref();
  const resizeState = reactive({
    dimensions: {}
  });

  const observer = new ResizeObserver(entries => {
  console.log("TCL: useResizeObserver -> entries", entries)
    entries.forEach(entry => {
    console.log("TCL: useResizeObserver -> entry", entry)
      resizeState.dimensions = entry.contentRect;
    });
  });

  onMounted(() => {
    // set initial dimensions right before observing: Element.getBoundingClientRect()
    resizeState.dimensions = resizeRef.value.getBoundingClientRect();
    console.log("TCL: useResizeObserver -> resizeRef.value", resizeRef.value)
    console.log("TCL: useResizeObserver -> resizeState.dimensions", resizeState.dimensions)
    observer.observe(resizeRef.value);
  });

  onBeforeUnmount(() => {
    observer.unobserve(resizeRef.value);
  });

  return { resizeState, resizeRef };
};

export default useResizeObserver;