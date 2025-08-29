// src/components/ExportDbButton.jsx
import { exportDbFile } from "../db";

export default function ExportDbButton() {
  async function handleExport() {
    try {
      const file = await exportDbFile(); // obtiene el File desde OPFS
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name; // "tasks.sqlite"
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error exportando BD:", err);
      alert("No se pudo exportar la base de datos.");
    }
  }

  return (
    <button type="button" onClick={handleExport}>
      💾 Exportar BD
    </button>
  );
}
