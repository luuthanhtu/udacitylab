export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_UDACITY_PROFILE,
    "aws_media_bucket": process.env.AWS_UDACITY_MEDIA_BUCKET
  },
  "aws": {
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_UDACITY_PROFILE,
    "aws_media_bucket": process.env.AWS_UDACITY_MEDIA_BUCKET
  },
  "jwt": {
    "secret": process.env.JWT_TOKEN
  }
}
// export const config = {
//   "dev": {
//     "username": "udacitydatabase",
//     "password": "udacitydatabase",
//     "database": "udacitydatabase",
//     "host": "udacitydatabase.cof7g5qbwlgx.us-east-1.rds.amazonaws.com",
//     "dialect": "postgres",
//     "aws_region": "us-east-1",
//     "aws_profile": "udacityprofile",
//     "aws_media_bucket": "udacitylab-tult13-bucket"
//   },
//   "jwt": {
//     "secret": "Test"
//   }
// }
