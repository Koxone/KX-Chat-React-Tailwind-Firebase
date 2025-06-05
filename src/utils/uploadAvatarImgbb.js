export async function uploadAvatarImgbb(file) {
  const apiKey = import.meta.env.VITE_IMGBB_KEY;

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("imgbb-upload-failed");

  const data = await res.json();
  return data.data.url; // URL final de la imagen
}
