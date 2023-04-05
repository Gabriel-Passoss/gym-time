import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GerUserMetricsServiceRequest {
  userId: string
}

interface GerUserMetricsServiceResponse {
  checkInsCount: number
}

export class GerUserMetricsService {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GerUserMetricsServiceRequest): Promise<GerUserMetricsServiceResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
