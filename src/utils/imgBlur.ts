import sharp from "sharp";

const imageFormats = ["image/jpeg", "image/png", "image/webp"];

export async function blurFile(file: File): Promise<string> {
    const fileText = file.type;
    if (!imageFormats.includes(fileText)) {
        return "-";
    }

    const outputImg = await sharp(await file.arrayBuffer())
        .resize({ width: 32, height: 32 })
        .png()
        .toBuffer();
    return `data:image/png;base64,${outputImg.toString("base64")}`;
}