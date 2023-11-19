import { NextResponse } from "next/server";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const GET = withApiAuthRequired(async (request) => {
  const fileName = request.nextUrl.searchParams.get('file')

  if (!fileName) {
    return NextResponse.json({error: 'No file name provided'}, { status: 400 })
  }

  try {
    const s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_KEY!,
      }
    })

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
    return NextResponse.json({url})

  } catch (error) {
    return NextResponse.json({error}, { status: 500 })
  }
})
