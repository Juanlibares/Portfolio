# 🚀 Portfolio Personal - Juan

Un portfolio moderno, elegante y profesional desarrollado con React, Vite, Tailwind CSS y Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## ✨ Características

- **Diseño Moderno**: Interfaz elegante con gradientes y animaciones fluidas
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Modo Oscuro**: Soporte automático para tema claro/oscuro
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Navegación Inteligente**: Scroll spy y navegación suave entre secciones
- **Formulario de Contacto**: Funcional con validación y estados de carga
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Optimizado para velocidad de carga

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, Vite
- **Estilos**: Tailwind CSS, CSS Custom Properties
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Tipografías**: Inter, Cal Sans (Google Fonts)
- **Build Tools**: Vite, PostCSS, Autoprefixer

## 🎨 Secciones del Portfolio

### 🏠 Hero Section
- Introducción personal con avatar
- Call-to-actions principales
- Enlaces a redes sociales
- Animaciones de entrada impactantes

### 👨‍💻 Sobre Mí
- Información personal y profesional
- Skills organizados por categorías
- Timeline de experiencia
- Estadísticas de proyectos

### 💼 Proyectos
- Grid de proyectos con filtros por categoría
- Proyectos destacados en formato especial
- Links a demos y repositorios
- Tecnologías utilizadas en cada proyecto

### 📧 Contacto
- Formulario funcional de contacto
- Información de contacto
- Enlaces a redes sociales
- Mapa de ubicación (opcional)

## 📋 Proyectos Destacados

1. **TodoSuma - Sistema de Inventario**
   - Sistema completo con React, Node.js, Express, MySQL
   - Gestión de productos, ventas y reportes

2. **App Municipal Navarro**
   - Aplicación móvil con React Native
   - Geolocalización y notificaciones push

3. **Sistema de Cine**
   - Plataforma web con Laravel y MySQL
   - Reserva de entradas y gestión de cartelera

4. **Quebrados - App Educativa**
   - App móvil educativa para matemáticas
   - Animaciones interactivas

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Deploy a GitHub Pages
npm run deploy
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.jsx      # Navegación y menú móvil
│   ├── HeroSection.jsx     # Sección hero principal
│   ├── AboutSection.jsx    # Información personal
│   ├── ProjectsSection.jsx # Portfolio de proyectos
│   ├── ContactSection.jsx  # Formulario de contacto
│   └── Footer.jsx          # Pie de página
├── assets/                 # Recursos estáticos
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
├── App.css                # Estilos específicos
└── index.css              # Estilos globales Tailwind
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary': { ... },    // Color primario
      'accent': { ... },     // Color de acento
    }
  }
}
```

### Contenido
- Editar información personal en cada componente
- Actualizar proyectos en `ProjectsSection.jsx`
- Modificar skills en `AboutSection.jsx`
- Cambiar información de contacto en `ContactSection.jsx`

### Imágenes
- Agregar foto de perfil en `public/profile-avatar.svg`
- Añadir imágenes de proyectos en `public/`

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1920px+
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🌐 Deploy

### GitHub Pages
```bash
npm run deploy
```

### Netlify/Vercel
Simplemente conecta tu repositorio y usa el build command:
```bash
npm run build
```

## 📈 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Bundle Size**: < 500KB gzipped
- **First Paint**: < 1s
- **Lazy Loading**: Imágenes optimizadas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

- **Email**: juan@email.com
- **LinkedIn**: [linkedin.com/in/juan](https://linkedin.com/in/juan)
- **GitHub**: [github.com/juan](https://github.com/juan)
- **Portfolio**: [juan-portfolio.com](https://juan-portfolio.com)

---

⭐ ¡Dale una estrella si este proyecto te ayudó!

Desarrollado con ❤️ por Juan
