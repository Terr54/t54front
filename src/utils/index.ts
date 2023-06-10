export const CamelCase = {
  fromSnakeCase (snakeCaseStr: string) {
    if (snakeCaseStr) {
      return snakeCaseStr
        ?.split('_')
        .map((match, i) => {
          if (i > 0) {
            if (match?.length > 1) {
              return `${match[0].toUpperCase()}${match.substring(1)}`
            }

            if (match?.length === 0) {
              return match?.toUpperCase()
            }

            return match
          }

          return match
        })
        .join('')
    }

    return snakeCaseStr
  },
  toSnakeCase (camelCaseStr: string) {
    if (camelCaseStr) {
      return `${camelCaseStr[0]}${camelCaseStr
				?.substring(1)
				.replace(/[A-Z]/g, match => `_${match?.toLowerCase()}`)}`
    }

    return camelCaseStr
  },
  valueOf (str: string, delimiter: string) {
    if (str) {
      return str
        ?.split(delimiter ?? '_')
        .map((match, i) => {
          if (i > 0) {
            if (match?.length > 1) {
              return `${match[0].toUpperCase()}${match.substring(1)}`
            }

            if (match?.length === 0) {
              return match?.toUpperCase()
            }

            return match
          }

          return match
        })
        .join('')
    }

    return str
  }
}

export const KeyCodes = {
  comma: 188,
  enter: 13,
  simicolon: 186
};
