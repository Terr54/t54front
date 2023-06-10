import { protectedBucket, publicBucket } from '../../../api'

export const uploadPublicFile = async (file: File, path?: string) => await publicBucket(file, path)
export const uploadProtectedFile = async (file: File, path?: string) => await protectedBucket(file, path)
