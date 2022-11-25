export const getImageLink = async (formData) => {
  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );
    const image = await res.json()
    return image;
};
