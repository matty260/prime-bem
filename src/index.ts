export const useBem = (block: string) => ({ e, m }: { e?: string; m?: string | string[] | Record<string, boolean> }) => {
    const elementClass = e ? `${block}__${e}` : block;
  
    const modifiersClasses = (typeof m === 'string' ? [m] : 
      Array.isArray(m) ? m : 
        m ? Object.entries(m).filter(([
          , value,
        ]) => value).map(([key]) => key) : [])
      .map(modifier => `${elementClass}--${modifier}`);
  
    return [
      elementClass,
      ...modifiersClasses,
    ].join(' ');
  };
  