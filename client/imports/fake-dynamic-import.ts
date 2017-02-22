export default function fakeDynamicImport(what): () => Promise<any> {
  return () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(what);
    }, 5000);
  });
}
