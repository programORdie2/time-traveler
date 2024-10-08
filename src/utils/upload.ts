"server only"

import { PinataSDK } from "pinata"
import { blurFile } from "./imgBlur";

if (!process.env.PINATA_JWT || !process.env.NEXT_PUBLIC_GATEWAY_URL) {
  throw new Error("Missing env variables")
}

const pinata = new PinataSDK({
  pinataJwt: `${process.env.PINATA_JWT}`,
  pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`
});

export async function uploadFiles(files: File[]) {
  const data: { name: string, type: string, cid: string, id: string, blurred: string }[] = [];

  await Promise.all(
    files.map(async (file) => {
      const result = await pinata.upload.file(file);
      const blurred = await blurFile(file);

      data.push({
        name: file.name,
        type: file.type,
        cid: result.cid,
        id: result.id,
        blurred: blurred
      });
    })
  )

  return data
}

export async function deleteFiles(ids: string[]) {
  await pinata.files.delete(ids);
}

export async function getFiles(cids: string[]) {
  const urls: { [key: string]: string } = {};

  await Promise.all(
    cids.map(async (cid) => {
      const result = await pinata.gateways.createSignedURL({
        cid,
        expires: 60
      });

      urls[cid] = result
    })
  )

  return urls
}