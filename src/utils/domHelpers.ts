export function checkChildNodes (node1: HTMLElement | ChildNode, node2: HTMLElement | ChildNode) {
  if (node1 === node2) {
    return true
  }

  let isChild = false
  try {
    if (node1.childNodes && node1.childNodes.length > 0) {
      node1.childNodes.forEach(
        n => {
          if (isChild) {
            throw new Error('childnode')
          }

          isChild = checkChildNodes(n, node2)
        }
      )
    }
  } catch (e: any) {
    if (e.message === 'childnode') {
      return true
    }

    return false
  }

  return isChild
}

export const loadScriptSync = async (src: string, id: string):
Promise<boolean | string> => await new Promise(resolve => {
  const script = document.createElement('script')
  script.onload = () => {
    resolve('script loaded')
  }

  script.src = src
  if (id) {
    script.id = id
  }

  script.type = 'text/javascript'
  script.async = false
  document.getElementsByTagName('body')[0].appendChild(script)
})

export const removeElementById = async (id: string) => await new Promise((resolve, reject) => {
  const el = document.getElementById(id)
  if (el != null) {
    const parentEl = el.parentNode
    if (parentEl != null) {
      parentEl.removeChild(el)
      resolve(`removed ${id}`)
    } else {
      reject(new Error(`cannot remove ${id}: its the root`))
    }
  } else {
    reject(new Error(`cannot remove ${id}: not found in the DOM`))
  }
})

export const getBlobUrl = (code: string, type: string): string => {
  const blob = new Blob([code], { type })
  return URL.createObjectURL(blob)
}

export const getHtmlDocumentUrl = ({ html, css, js }: {
  html: string
  css: string
  js: string
}): string => {
  const _css = css || ''
  const _js = js || ''
  const cssUrl = getBlobUrl(_css, 'text/css')
  const jsUrl = getBlobUrl(_js, 'text/javascript')
  const src = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${_css && `<link rel="stylesheet" type="text/css" href="${cssUrl}" />`}
      </head>
      <body>
        ${html || ''}
        ${_js && `<script src="${jsUrl}"></script>`}
      </body>
    </html>
  `
  return getBlobUrl(src, 'text/html')
}

export const isInViewPort = (el: HTMLElement) => {
  if (el?.getBoundingClientRect) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  return false
}

export const scrollToId = (id: string) => {
  const doc = document
  const el = doc.getElementById(id)
  if (el != null) {
    const top = el.scrollTop
    doc.body.scrollTo({ top, behavior: 'smooth' })
  }
}

export const getCurrentUserPosition = async () => await new Promise(
  (resolve, reject) => {
    const { navigator: { geolocation } } = window
    if (geolocation) {
      geolocation.getCurrentPosition(
        position => {
          resolve(position)
        },
        err => {
          reject(err)
        }
      )
    } else {
      reject(Error('Geolocation is not supported by this browser.'))
    }
  }
)
