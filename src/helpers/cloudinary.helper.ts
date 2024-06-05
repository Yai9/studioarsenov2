export function optimizeCloudinaryImage(
  src: string,
  w: number | null = null,
  h: number | null = null
) {
  const width = w ? `w_${w},` : "";
  const height = h ? `h_${h},` : "";
  const crop = w || h ? "c_crop," : "";

  // get the file extension from src
  const ext = src.split(".").pop();

  const videoCrop = ext === "mp4" ? "c_pad" : "c_thumb";

  if (["jpg", "png"].indexOf(ext as string) !== -1) {
    src = src.replace(/\.[^/.]+$/, ".webp");
  }

  if (["mp4"].indexOf(ext as string) !== -1) {
    src = src.replace(/\.[^/.]+$/, ".mp4");
  }

  return src.replace(
    "upload/",
    `upload/${width}${height}${crop}q_auto:eco,${videoCrop},f_auto,dpr_auto/`
  );
}

export function cloudinarySrcSet(
  src: string,
  height: number | null = null,
  sizes = [960, 1280, 1920]
) {
  return {
    original: optimizeCloudinaryImage(src, sizes[sizes.length - 1], height),
    copies: sizes.map((size) => ({
      url: optimizeCloudinaryImage(src, size, height),
      size,
    })),
  };
}
