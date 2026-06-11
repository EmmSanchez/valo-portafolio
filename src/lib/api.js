// src/lib/api.js
export async function submitContactForm(formtype, data) {
  const response = await fetch(
    "https://valo-backend-sand.vercel.app/api/contact",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formtype, ...data }),
    },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al enviar el formulario");
  }

  return response.json();
}
