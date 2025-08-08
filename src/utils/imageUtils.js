// Función para obtener la ruta correcta de las imágenes
export const getImageUrl = (imagePath) => {
  // Para GitHub Pages, siempre necesitamos el base /Portfolio
  const baseUrl = '/Portfolio';
  return `${baseUrl}${imagePath}`;
};
