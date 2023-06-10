import { loadScriptSync } from './domHelpers'

export interface GoogleConfig {
  config: { url: string, client_id: string, [key: string]: any }
  onGoogleAuth: (auth: { credential: any, [key: string]: any }) => void
  googleBtnId: string
}
export interface PlaceConfig {
  config: { url: string, key: string },
  onLoad: () => void,
  onError?: (e: unknown) => void,
}
export const initGoogle = ({ config, onGoogleAuth, googleBtnId }: GoogleConfig) => {
  const scriptId = 'google-gsi-btn-script-5221';
  void loadScriptSync(config.url, scriptId).then(
    () => {
      window?.google.accounts.id.initialize({
        client_id: config.client_id,
        callback: onGoogleAuth
      })
      window?.google.accounts.id.renderButton(
        document.getElementById(googleBtnId),
        {
          theme: 'filled_blue',
          logo_alignment: 'left',
          size: 'large',
          shape: 'rectangular',
          width: 240,
          type: 'standard'
        }
      )
      window?.google.accounts.id.prompt()
    }
  )
}

export const initPlaces = ({ config, onLoad, onError }: PlaceConfig) => {
  const scriptId = 'google-places-script-21-02-23';
  void loadScriptSync(`${config.url}?key=${config.key}&libraries=places`, scriptId)
    .then(onLoad)
    .catch(e => { if (onError) onError(e); });
}
