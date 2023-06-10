
export function parse (_queryStr: string) {
  let queryStr = _queryStr
  if (queryStr.length === 0) {
    return null
  }

  // Remove starting ? if any
  if (queryStr.startsWith('?')) {
    queryStr = queryStr.substring(1)
  }

  // Split by & separator
  try {
    const queryArr = queryStr.split('&')
    const queryObj: Record<string, any> = {}
    queryArr.forEach(
      query => {
        const arr = query.split('=')
        if (arr.length > 2) {
          // Add back all =
          queryObj[arr[0]] = arr[1] + arr.reduce((acc, a) => {
            if (a === '') {
              return `${acc}=`
            }

            return ''
          })
        } else {
          [, queryObj[arr[0]]] = arr
        }
      }
    )
    return queryObj
  } catch (e: unknown) {
    console.log(e)
    return null
  }
}

export function decode (str: string) {
  try {
    return atob(str)
  } catch (e: unknown) {
    return undefined
  }
}

const search = window?.location ? window?.location.search : ''
const params = parse(search)
export default {
  parse,
  decode,
  params,
  search
}
