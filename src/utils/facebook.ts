export const initFB = async (appId: string, version = 'v2.4') => await new Promise(resolve => {
  window.fbAsyncInit = function initialize () {
    window.FB.init({
      appId,
      cookie: true,
      xfbml: true,
      version
    })
    window.FB.AppEvents.logPageView()
    resolve(window.FB)
  };

  (function doFB (d, s, id) {
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id) != null) {
      return
    }

    const js = d.createElement(s) as HTMLScriptElement; js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'
    fjs?.parentNode?.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')
})
