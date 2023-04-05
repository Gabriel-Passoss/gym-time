import { Gym } from '@prisma/client'

export interface GymsRepository {
  findById(data: string): Promise<Gym | null>
}
