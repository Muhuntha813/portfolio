# Muhuntha Vel - Ultra-Modern Developer Portfolio

This is a high-performance, animated developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** React Three Fiber / Three.js
- **Icons:** Lucide React

## 🛠️ Setup & Installation

1.  **Navigate to the project directory:**
    ```bash
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install --legacy-peer-deps
    ```
    *Note: `--legacy-peer-deps` is required due to React 19 peer dependency conflicts with some 3D libraries. This project uses Next.js 14.*

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Visit `http://localhost:3000`

## 📦 Building for Production

```bash
npm run build
```

## 🎨 Customization

### Personal Details
Update the content in the component files located in `components/`:
- `Hero.tsx`: Name, Role, Hero Text
- `About.tsx`: Bio
- `Skills.tsx`: Skill levels and categories
- `Projects.tsx`: Project details and links
- `Hackathons.tsx`: Achievements and certificates
- `Contact.tsx`: Contact info and social links

### Images
Place your personal image in `public/assets/me/`.
Update `components/Hero.tsx` to uncomment the `Image` component and point to your file (e.g., `/assets/me/photo.jpg`).

### Colors & Theme
Theme colors (Neon Cyan/Magenta) are defined in `tailwind.config.ts`.
Global styles are in `app/globals.css`.

## 📁 Folder Structure

- `app/`: Next.js App Router pages and layout
- `components/`: Reusable UI sections and components
- `lib/`: Utility functions
- `public/`: Static assets
