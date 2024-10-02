"server only"

import { PinataSDK } from "pinata"

if (!process.env.PINATA_JWT || !process.env.NEXT_PUBLIC_GATEWAY_URL) {
  throw new Error("Missing env variables")
}

const pinata = new PinataSDK({
  pinataJwt: `${process.env.PINATA_JWT}`,
  pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`
});

export async function uploadFiles(files: File[]) {
  const data: { name: string, type: string, cid: string }[] = [];

  await Promise.all(
    files.map(async (file) => {
      const result = await pinata.upload.file(file);

      data.push({
        name: file.name,
        type: file.type,
        cid: result.cid
      });
    })
  )

  return data
}