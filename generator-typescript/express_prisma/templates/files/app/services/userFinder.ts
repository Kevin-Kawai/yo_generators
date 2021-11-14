import { PrismaClient } from '@prisma/client'

const allUser = async () => {
  const prisma = new PrismaClient()

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    }
  })

  return(allUsers)
}

export { allUser }
