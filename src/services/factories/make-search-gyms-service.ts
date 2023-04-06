import { SearchGymService } from '../search-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeSearchGymsService() {
  const gymsRepository = new PrismaGymsRepository()
  const service = new SearchGymService(gymsRepository)

  return service
}
