const appConfig = {
  shield: {
    server_url: 'https://mshield.herokuapp.com'
  },
  t54: {
    server_url: 'https://terre54.herokuapp.com' // 'http://localhost:8080'// Window.location.origin,
  },
  file_uploads: {
    server_url: 'https://learnerlabs-media-admin-idalvb67pq-uc.a.run.app' // 'http://localhost:3200',
  },
  google: {
    client_id: '140540602699-cqf6ii68ea0po5i3kvsf8a9oppvsp1al.apps.googleusercontent.com',
    project_id: 'mungwin-shield-328508',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    control_server_url: 'https://accounts.google.com/gsi/client',
    places: {
      url: 'https://maps.google.com/maps/api/js',
      key: 'AIzaSyCB7oOwl8jHK6TZ1bwNFuUU9m-zyDlrYZI'
    }
  },
  facebook: {
    sdk_url: 'https://connect.facebook.net/en_US/sdk.js',
    app_id: '709776036651690'
  }
}

export const serverConfig = {
  t54: {
    id: '62923c46873f99cd13cfd5ba',
    key: '65d48bc8c2524c6b843637e9e0b7ff1d',
    secret: 'learnercollab12345678@1'
  },
  fileUploads: {
    id: 'MG_CONSTEST_2021',
    key: 'YnzwScfjCoRWVPpzLIYldDhQnK9pJDOz'
  }
}

export const appName = 'T54'

export default appConfig
