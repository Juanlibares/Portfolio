// Función para obtener la ruta correcta de las imágenes
export const getImageUrl = (imagePath) => {
  // En desarrollo, las imágenes están en /Portfolio/imagePath
  // En producción, estarán en el base configurado
  const baseUrl = import.meta.env.DEV ? '/Portfolio' : '';
  return `${baseUrl}${imagePath}`;
};
