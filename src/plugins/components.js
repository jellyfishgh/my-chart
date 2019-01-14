import { getFileName } from '@/utils/file'

export default require
  .context('@/components/', false, /.vue$/)
  .keys()
  .map(getFileName)
