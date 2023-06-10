
const countries = {
  af: {
    code: 'af',
    name: { en: 'Afghanistan', fr: 'Afghanistan' },
    dial: '93',
    flag: { flag: '🇦🇫', name: 'Afghanistan', hex: 'U+1F1E6 U+1F1EB' }
  },
  al: {
    code: 'al',
    name: { en: 'Albania', fr: 'Albanie' },
    dial: '355',
    flag: { flag: '🇦🇱', name: 'Albania', hex: 'U+1F1E6 U+1F1F1' }
  },
  dz: {
    code: 'dz',
    name: { en: 'Algeria', fr: 'Algérie' },
    dial: '213',
    flag: { flag: '🇩🇿', name: 'Algeria', hex: 'U+1F1E9 U+1F1FF' }
  },
  as: {
    code: 'as',
    name: { en: 'American Samoa', fr: 'Samoa américaines' },
    dial: '1-684',
    flag: { flag: '🇦🇸', name: 'American Samoa', hex: 'U+1F1E6 U+1F1F8' }
  },
  ad: {
    code: 'ad',
    name: { en: 'Andorra', fr: 'Andorre' },
    dial: '376',
    flag: { flag: '🇦🇩', name: 'Andorra', hex: 'U+1F1E6 U+1F1E9' }
  },
  ao: {
    code: 'ao',
    name: { en: 'Angola', fr: 'Angola' },
    dial: '244',
    flag: { flag: '🇦🇴', name: 'Angola', hex: 'U+1F1E6 U+1F1F4' }
  },
  ai: {
    code: 'ai',
    name: { en: 'Anguilla', fr: 'Anguilla' },
    dial: '1-264',
    flag: { flag: '🇦🇮', name: 'Anguilla', hex: 'U+1F1E6 U+1F1EE' }
  },
  aq: {
    code: 'aq',
    name: { en: 'Antarctica', fr: 'Antarctique' },
    dial: '672',
    flag: { flag: '🇦🇶', name: 'Antarctica', hex: 'U+1F1E6 U+1F1F6' }
  },
  ag: {
    code: 'ag',
    name: { en: 'Antigua and Barbuda', fr: 'Antigua-et-Barbuda' },
    dial: '1-268',
    flag: undefined
  },
  ar: {
    code: 'ar',
    name: { en: 'Argentina', fr: 'Argentine' },
    dial: '54',
    flag: { flag: '🇦🇷', name: 'Argentina', hex: 'U+1F1E6 U+1F1F7' }
  },
  am: {
    code: 'am',
    name: { en: 'Armenia', fr: 'Arménie' },
    dial: '374',
    flag: { flag: '🇦🇲', name: 'Armenia', hex: 'U+1F1E6 U+1F1F2' }
  },
  aw: {
    code: 'aw',
    name: { en: 'Aruba', fr: 'Aruba' },
    dial: '297',
    flag: { flag: '🇦🇼', name: 'Aruba', hex: 'U+1F1E6 U+1F1FC' }
  },
  au: {
    code: 'au',
    name: { en: 'Australia', fr: 'Australie' },
    dial: '61',
    flag: { flag: '🇦🇺', name: 'Australia', hex: 'U+1F1E6 U+1F1FA' }
  },
  at: {
    code: 'at',
    name: { en: 'Austria', fr: 'Autriche' },
    dial: '43',
    flag: { flag: '🇦🇹', name: 'Austria', hex: 'U+1F1E6 U+1F1F9' }
  },
  az: {
    code: 'az',
    name: { en: 'Azerbaijan', fr: 'Azerbaïdjan' },
    dial: '994',
    flag: { flag: '🇦🇿', name: 'Azerbaijan', hex: 'U+1F1E6 U+1F1FF' }
  },
  bs: {
    code: 'bs',
    name: { en: 'Bahamas', fr: 'Bahamas' },
    dial: '1-242',
    flag: { flag: '🇧🇸', name: 'Bahamas', hex: 'U+1F1E7 U+1F1F8' }
  },
  bh: {
    code: 'bh',
    name: { en: 'Bahrain', fr: 'Bahreïn' },
    dial: '973',
    flag: { flag: '🇧🇭', name: 'Bahrain', hex: 'U+1F1E7 U+1F1ED' }
  },
  bd: {
    code: 'bd',
    name: { en: 'Bangladesh', fr: 'Bangladesh' },
    dial: '880',
    flag: { flag: '🇧🇩', name: 'Bangladesh', hex: 'U+1F1E7 U+1F1E9' }
  },
  bb: {
    code: 'bb',
    name: { en: 'Barbados', fr: 'Barbade' },
    dial: '1-246',
    flag: { flag: '🇧🇧', name: 'Barbados', hex: 'U+1F1E7 U+1F1E7' }
  },
  by: {
    code: 'by',
    name: { en: 'Belarus', fr: 'Bélarus' },
    dial: '375',
    flag: { flag: '🇧🇾', name: 'Belarus', hex: 'U+1F1E7 U+1F1FE' }
  },
  be: {
    code: 'be',
    name: { en: 'Belgium', fr: 'Belgique' },
    dial: '32',
    flag: { flag: '🇧🇪', name: 'Belgium', hex: 'U+1F1E7 U+1F1EA' }
  },
  bz: {
    code: 'bz',
    name: { en: 'Belize', fr: 'Belize' },
    dial: '501',
    flag: { flag: '🇧🇿', name: 'Belize', hex: 'U+1F1E7 U+1F1FF' }
  },
  bj: {
    code: 'bj',
    name: { en: 'Benin', fr: 'Bénin' },
    dial: '229',
    flag: { flag: '🇧🇯', name: 'Benin', hex: 'U+1F1E7 U+1F1EF' }
  },
  bm: {
    code: 'bm',
    name: { en: 'Bermuda', fr: 'Bermudes' },
    dial: '1-441',
    flag: { flag: '🇧🇲', name: 'Bermuda', hex: 'U+1F1E7 U+1F1F2' }
  },
  bt: {
    code: 'bt',
    name: { en: 'Bhutan', fr: 'Bhoutan' },
    dial: '975',
    flag: { flag: '🇧🇹', name: 'Bhutan', hex: 'U+1F1E7 U+1F1F9' }
  },
  bo: {
    code: 'bo',
    name: {
      en: 'Bolivia (Plurinational State of)',
      fr: 'Bolivie (État plurinational de)'
    },
    dial: '591',
    flag: { flag: '🇧🇴', name: 'Bolivia', hex: 'U+1F1E7 U+1F1F4' }
  },
  bq: {
    code: 'bq',
    name: {
      en: 'Bonaire, Sint Eustatius and Saba',
      fr: 'Bonaire, Saint-Eustache et Saba'
    },
    dial: '599',
    flag: undefined
  },
  ba: {
    code: 'ba',
    name: { en: 'Bosnia and Herzegovina', fr: 'Bosnie-Herzégovine' },
    dial: '387',
    flag: undefined
  },
  bw: {
    code: 'bw',
    name: { en: 'Botswana', fr: 'Botswana' },
    dial: '267',
    flag: { flag: '🇧🇼', name: 'Botswana', hex: 'U+1F1E7 U+1F1FC' }
  },
  bv: {
    code: 'bv',
    name: { en: 'Bouvet Island', fr: 'Île Bouvet' },
    dial: '47',
    flag: { flag: '🇧🇻', name: 'Bouvet Island', hex: 'U+1F1E7 U+1F1FB' }
  },
  br: {
    code: 'br',
    name: { en: 'Brazil', fr: 'Brésil' },
    dial: '55',
    flag: { flag: '🇧🇷', name: 'Brazil', hex: 'U+1F1E7 U+1F1F7' }
  },
  io: {
    code: 'io',
    name: {
      en: 'British Indian Ocean Territory',
      fr: "Territoire britannique de l'océan Indien"
    },
    dial: '246',
    flag: {
      flag: '🇮🇴',
      name: 'British Indian Ocean Territory',
      hex: 'U+1F1EE U+1F1F4'
    }
  },
  vg: {
    code: 'vg',
    name: { en: 'British Virgin Islands', fr: 'Îles Vierges britanniques' },
    dial: '1-284',
    flag: {
      flag: '🇻🇬',
      name: 'British Virgin Islands',
      hex: 'U+1F1FB U+1F1EC'
    }
  },
  bn: {
    code: 'bn',
    name: { en: 'Brunei Darussalam', fr: 'Brunéi Darussalam' },
    dial: '673',
    flag: { flag: '🇧🇳', name: 'Brunei', hex: 'U+1F1E7 U+1F1F3' }
  },
  bg: {
    code: 'bg',
    name: { en: 'Bulgaria', fr: 'Bulgarie' },
    dial: '359',
    flag: { flag: '🇧🇬', name: 'Bulgaria', hex: 'U+1F1E7 U+1F1EC' }
  },
  bf: {
    code: 'bf',
    name: { en: 'Burkina Faso', fr: 'Burkina Faso' },
    dial: '226',
    flag: { flag: '🇧🇫', name: 'Burkina Faso', hex: 'U+1F1E7 U+1F1EB' }
  },
  bi: {
    code: 'bi',
    name: { en: 'Burundi', fr: 'Burundi' },
    dial: '257',
    flag: { flag: '🇧🇮', name: 'Burundi', hex: 'U+1F1E7 U+1F1EE' }
  },
  cv: {
    code: 'cv',
    name: { en: 'Cape Verde', fr: 'Cabo Verde' },
    dial: '238',
    flag: { flag: '🇨🇻', name: 'Cape Verde', hex: 'U+1F1E8 U+1F1FB' }
  },
  kh: {
    code: 'kh',
    name: { en: 'Cambodia', fr: 'Cambodge' },
    dial: '855',
    flag: { flag: '🇰🇭', name: 'Cambodia', hex: 'U+1F1F0 U+1F1ED' }
  },
  cm: {
    code: 'cm',
    name: { en: 'Cameroon', fr: 'Cameroun' },
    dial: '237',
    flag: { flag: '🇨🇲', name: 'Cameroon', hex: 'U+1F1E8 U+1F1F2' }
  },
  ca: {
    code: 'ca',
    name: { en: 'Canada', fr: 'Canada' },
    dial: '1',
    flag: { flag: '🇨🇦', name: 'Canada', hex: 'U+1F1E8 U+1F1E6' }
  },
  ky: {
    code: 'ky',
    name: { en: 'Cayman Islands', fr: 'Îles Caïmanes' },
    dial: '1-345',
    flag: { flag: '🇰🇾', name: 'Cayman Islands', hex: 'U+1F1F0 U+1F1FE' }
  },
  cf: {
    code: 'cf',
    name: { en: 'Central African Republic', fr: 'République centrafricaine' },
    dial: '236',
    flag: {
      flag: '🇨🇫',
      name: 'Central African Republic',
      hex: 'U+1F1E8 U+1F1EB'
    }
  },
  td: {
    code: 'td',
    name: { en: 'Chad', fr: 'Tchad' },
    dial: '235',
    flag: { flag: '🇹🇩', name: 'Chad', hex: 'U+1F1F9 U+1F1E9' }
  },
  cl: {
    code: 'cl',
    name: { en: 'Chile', fr: 'Chili' },
    dial: '56',
    flag: { flag: '🇨🇱', name: 'Chile', hex: 'U+1F1E8 U+1F1F1' }
  },
  cn: {
    code: 'cn',
    name: { en: 'China', fr: 'Chine' },
    dial: '86',
    flag: { flag: '🇨🇳', name: 'China', hex: 'U+1F1E8 U+1F1F3' }
  },
  hk: {
    code: 'hk',
    name: {
      en: 'China, Hong Kong Special Administrative Region',
      fr: 'Chine, région administrative spéciale de Hong Kong'
    },
    dial: '852',
    flag: { flag: '🇭🇰', name: 'Hong Kong SAR China', hex: 'U+1F1ED U+1F1F0' }
  },
  mo: {
    code: 'mo',
    name: {
      en: 'China, Macao Special Administrative Region',
      fr: 'Chine, région administrative spéciale de Macao'
    },
    dial: '853',
    flag: { flag: '🇲🇴', name: 'Macao SAR China', hex: 'U+1F1F2 U+1F1F4' }
  },
  cx: {
    code: 'cx',
    name: { en: 'Christmas Island', fr: 'Île Christmas' },
    dial: '61',
    flag: { flag: '🇨🇽', name: 'Christmas Island', hex: 'U+1F1E8 U+1F1FD' }
  },
  cc: {
    code: 'cc',
    name: { en: 'Cocos (Keeling) Islands', fr: 'Îles des Cocos (Keeling)' },
    dial: '61',
    flag: {
      flag: '🇨🇨',
      name: 'Cocos (Keeling) Islands',
      hex: 'U+1F1E8 U+1F1E8'
    }
  },
  co: {
    code: 'co',
    name: { en: 'Colombia', fr: 'Colombie' },
    dial: '57',
    flag: { flag: '🇨🇴', name: 'Colombia', hex: 'U+1F1E8 U+1F1F4' }
  },
  km: {
    code: 'km',
    name: { en: 'Comoros', fr: 'Comores' },
    dial: '269',
    flag: { flag: '🇰🇲', name: 'Comoros', hex: 'U+1F1F0 U+1F1F2' }
  },
  cg: {
    code: 'cg',
    name: { en: 'Congo', fr: 'Congo' },
    dial: '242',
    flag: { flag: '🇨🇬', name: 'Congo - Brazzaville', hex: 'U+1F1E8 U+1F1EC' }
  },
  ck: {
    code: 'ck',
    name: { en: 'Cook Islands', fr: 'Îles Cook' },
    dial: '682',
    flag: { flag: '🇨🇰', name: 'Cook Islands', hex: 'U+1F1E8 U+1F1F0' }
  },
  cr: {
    code: 'cr',
    name: { en: 'Costa Rica', fr: 'Costa Rica' },
    dial: '506',
    flag: { flag: '🇨🇷', name: 'Costa Rica', hex: 'U+1F1E8 U+1F1F7' }
  },
  hr: {
    code: 'hr',
    name: { en: 'Croatia', fr: 'Croatie' },
    dial: '385',
    flag: { flag: '🇭🇷', name: 'Croatia', hex: 'U+1F1ED U+1F1F7' }
  },
  cu: {
    code: 'cu',
    name: { en: 'Cuba', fr: 'Cuba' },
    dial: '53',
    flag: { flag: '🇨🇺', name: 'Cuba', hex: 'U+1F1E8 U+1F1FA' }
  },
  cw: {
    code: 'cw',
    name: { en: 'Curaçao', fr: 'Curaçao' },
    dial: '599',
    flag: { flag: '🇨🇼', name: 'Curaçao', hex: 'U+1F1E8 U+1F1FC' }
  },
  cy: {
    code: 'cy',
    name: { en: 'Cyprus', fr: 'Chypre' },
    dial: '357',
    flag: { flag: '🇨🇾', name: 'Cyprus', hex: 'U+1F1E8 U+1F1FE' }
  },
  cz: {
    code: 'cz',
    name: { en: 'Czechia', fr: 'Tchéquie' },
    dial: '420',
    flag: { flag: '🇨🇿', name: 'Czechia', hex: 'U+1F1E8 U+1F1FF' }
  },
  ci: {
    code: 'ci',
    name: { en: "Côte d'Ivoire", fr: "Côte d'Ivoire" },
    dial: '225',
    flag: { flag: '🇨🇮', name: "Côte d'Ivoire", hex: 'U+1F1E8 U+1F1EE' }
  },
  kp: {
    code: 'kp',
    name: {
      en: 'South Korea',
      fr: 'Corée de Sud'
    },
    dial: '850',
    flag: { flag: '🇰🇷', name: 'South Korea', hex: 'U+1F1F0 U+1F1F7' }
  },
  cd: {
    code: 'cd',
    name: {
      en: 'Democratic Republic of the Congo',
      fr: 'République démocratique du Congo'
    },
    dial: '243',
    flag: { flag: '🇨🇩', name: 'Congo - Kinshasa', hex: 'U+1F1E8 U+1F1E9' }
  },
  dk: {
    code: 'dk',
    name: { en: 'Denmark', fr: 'Danemark' },
    dial: '45',
    flag: { flag: '🇩🇰', name: 'Denmark', hex: 'U+1F1E9 U+1F1F0' }
  },
  dj: {
    code: 'dj',
    name: { en: 'Djibouti', fr: 'Djibouti' },
    dial: '253',
    flag: { flag: '🇩🇯', name: 'Djibouti', hex: 'U+1F1E9 U+1F1EF' }
  },
  dm: {
    code: 'dm',
    name: { en: 'Dominica', fr: 'Dominique' },
    dial: '1-767',
    flag: { flag: '🇩🇲', name: 'Dominica', hex: 'U+1F1E9 U+1F1F2' }
  },
  do: {
    code: 'do',
    name: { en: 'Dominican Republic', fr: 'République dominicaine' },
    dial: '1-809,1-829,1-849',
    flag: {
      flag: '🇩🇴',
      name: 'Dominican Republic',
      hex: 'U+1F1E9 U+1F1F4'
    }
  },
  ec: {
    code: 'ec',
    name: { en: 'Ecuador', fr: 'Équateur' },
    dial: '593',
    flag: { flag: '🇪🇨', name: 'Ecuador', hex: 'U+1F1EA U+1F1E8' }
  },
  eg: {
    code: 'eg',
    name: { en: 'Egypt', fr: 'Égypte' },
    dial: '20',
    flag: { flag: '🇪🇬', name: 'Egypt', hex: 'U+1F1EA U+1F1EC' }
  },
  sv: {
    code: 'sv',
    name: { en: 'El Salvador', fr: 'El Salvador' },
    dial: '503',
    flag: { flag: '🇸🇻', name: 'El Salvador', hex: 'U+1F1F8 U+1F1FB' }
  },
  gq: {
    code: 'gq',
    name: { en: 'Equatorial Guinea', fr: 'Guinée équatoriale' },
    dial: '240',
    flag: { flag: '🇬🇶', name: 'Equatorial Guinea', hex: 'U+1F1EC U+1F1F6' }
  },
  er: {
    code: 'er',
    name: { en: 'Eritrea', fr: 'Érythrée' },
    dial: '291',
    flag: { flag: '🇪🇷', name: 'Eritrea', hex: 'U+1F1EA U+1F1F7' }
  },
  ee: {
    code: 'ee',
    name: { en: 'Estonia', fr: 'Estonie' },
    dial: '372',
    flag: { flag: '🇪🇪', name: 'Estonia', hex: 'U+1F1EA U+1F1EA' }
  },
  sz: {
    code: 'sz',
    name: { en: 'Eswatini', fr: 'Eswatini' },
    dial: '268',
    flag: { flag: '🇸🇿', name: 'Eswatini', hex: 'U+1F1F8 U+1F1FF' }
  },
  et: {
    code: 'et',
    name: { en: 'Ethiopia', fr: 'Éthiopie' },
    dial: '251',
    flag: { flag: '🇪🇹', name: 'Ethiopia', hex: 'U+1F1EA U+1F1F9' }
  },
  fk: {
    code: 'fk',
    name: {
      en: 'Falkland Islands (Malvinas)',
      fr: 'Îles Falkland (Malvinas)'
    },
    dial: '500',
    flag: { flag: '🇫🇰', name: 'Falkland Islands', hex: 'U+1F1EB U+1F1F0' }
  },
  fo: {
    code: 'fo',
    name: { en: 'Faroe Islands', fr: 'Îles Féroé' },
    dial: '298',
    flag: { flag: '🇫🇴', name: 'Faroe Islands', hex: 'U+1F1EB U+1F1F4' }
  },
  fj: {
    code: 'fj',
    name: { en: 'Fiji', fr: 'Fidji' },
    dial: '679',
    flag: { flag: '🇫🇯', name: 'Fiji', hex: 'U+1F1EB U+1F1EF' }
  },
  fi: {
    code: 'fi',
    name: { en: 'Finland', fr: 'Finlande' },
    dial: '358',
    flag: { flag: '🇫🇮', name: 'Finland', hex: 'U+1F1EB U+1F1EE' }
  },
  fr: {
    code: 'fr',
    name: { en: 'France', fr: 'France' },
    dial: '33',
    flag: { flag: '🇫🇷', name: 'France', hex: 'U+1F1EB U+1F1F7' }
  },
  gf: {
    code: 'gf',
    name: { en: 'French Guiana', fr: 'Guyane française' },
    dial: '594',
    flag: { flag: '🇬🇫', name: 'French Guiana', hex: 'U+1F1EC U+1F1EB' }
  },
  pf: {
    code: 'pf',
    name: { en: 'French Polynesia', fr: 'Polynésie française' },
    dial: '689',
    flag: { flag: '🇵🇫', name: 'French Polynesia', hex: 'U+1F1F5 U+1F1EB' }
  },
  tf: {
    code: 'tf',
    name: {
      en: 'French Southern Territories',
      fr: 'Terres australes françaises'
    },
    dial: '262',
    flag: {
      flag: '🇹🇫',
      name: 'French Southern Territories',
      hex: 'U+1F1F9 U+1F1EB'
    }
  },
  ga: {
    code: 'ga',
    name: { en: 'Gabon', fr: 'Gabon' },
    dial: '241',
    flag: { flag: '🇬🇦', name: 'Gabon', hex: 'U+1F1EC U+1F1E6' }
  },
  gm: {
    code: 'gm',
    name: { en: 'Gambia', fr: 'Gambie' },
    dial: '220',
    flag: { flag: '🇬🇲', name: 'Gambia', hex: 'U+1F1EC U+1F1F2' }
  },
  ge: {
    code: 'ge',
    name: { en: 'Georgia', fr: 'Géorgie' },
    dial: '995',
    flag: { flag: '🇬🇪', name: 'Georgia', hex: 'U+1F1EC U+1F1EA' }
  },
  de: {
    code: 'de',
    name: { en: 'Germany', fr: 'Allemagne' },
    dial: '49',
    flag: { flag: '🇩🇪', name: 'Germany', hex: 'U+1F1E9 U+1F1EA' }
  },
  gh: {
    code: 'gh',
    name: { en: 'Ghana', fr: 'Ghana' },
    dial: '233',
    flag: { flag: '🇬🇭', name: 'Ghana', hex: 'U+1F1EC U+1F1ED' }
  },
  gi: {
    code: 'gi',
    name: { en: 'Gibraltar', fr: 'Gibraltar' },
    dial: '350',
    flag: { flag: '🇬🇮', name: 'Gibraltar', hex: 'U+1F1EC U+1F1EE' }
  },
  gr: {
    code: 'gr',
    name: { en: 'Greece', fr: 'Grèce' },
    dial: '30',
    flag: { flag: '🇬🇷', name: 'Greece', hex: 'U+1F1EC U+1F1F7' }
  },
  gl: {
    code: 'gl',
    name: { en: 'Greenland', fr: 'Groenland' },
    dial: '299',
    flag: { flag: '🇬🇱', name: 'Greenland', hex: 'U+1F1EC U+1F1F1' }
  },
  gd: {
    code: 'gd',
    name: { en: 'Grenada', fr: 'Grenade' },
    dial: '1-473',
    flag: { flag: '🇬🇩', name: 'Grenada', hex: 'U+1F1EC U+1F1E9' }
  },
  gp: {
    code: 'gp',
    name: { en: 'Guadeloupe', fr: 'Guadeloupe' },
    dial: '590',
    flag: { flag: '🇬🇵', name: 'Guadeloupe', hex: 'U+1F1EC U+1F1F5' }
  },
  gu: {
    code: 'gu',
    name: { en: 'Guam', fr: 'Guam' },
    dial: '1-671',
    flag: { flag: '🇬🇺', name: 'Guam', hex: 'U+1F1EC U+1F1FA' }
  },
  gt: {
    code: 'gt',
    name: { en: 'Guatemala', fr: 'Guatemala' },
    dial: '502',
    flag: { flag: '🇬🇹', name: 'Guatemala', hex: 'U+1F1EC U+1F1F9' }
  },
  gg: {
    code: 'gg',
    name: { en: 'Guernsey', fr: 'Guernesey' },
    dial: '44',
    flag: { flag: '🇬🇬', name: 'Guernsey', hex: 'U+1F1EC U+1F1EC' }
  },
  gn: {
    code: 'gn',
    name: { en: 'Guinea', fr: 'Guinée' },
    dial: '224',
    flag: { flag: '🇬🇳', name: 'Guinea', hex: 'U+1F1EC U+1F1F3' }
  },
  gw: {
    code: 'gw',
    name: { en: 'Guinea-Bissau', fr: 'Guinée-Bissau' },
    dial: '245',
    flag: { flag: '🇬🇼', name: 'Guinea-Bissau', hex: 'U+1F1EC U+1F1FC' }
  },
  gy: {
    code: 'gy',
    name: { en: 'Guyana', fr: 'Guyana' },
    dial: '592',
    flag: { flag: '🇬🇾', name: 'Guyana', hex: 'U+1F1EC U+1F1FE' }
  },
  ht: {
    code: 'ht',
    name: { en: 'Haiti', fr: 'Haïti' },
    dial: '509',
    flag: { flag: '🇭🇹', name: 'Haiti', hex: 'U+1F1ED U+1F1F9' }
  },
  hm: {
    code: 'hm',
    name: {
      en: 'Heard Island and McDonald Islands',
      fr: 'Île Heard-et-Îles MacDonald'
    },
    dial: '672',
    flag: { flag: '🇭🇲', name: 'Heard & McDonald Islands', hex: 'U+1F1ED U+1F1F2' }
  },
  va: {
    code: 'va',
    name: { en: 'Holy See', fr: 'Saint-Siège' },
    dial: '39-06',
    flag: undefined
  },
  hn: {
    code: 'hn',
    name: { en: 'Honduras', fr: 'Honduras' },
    dial: '504',
    flag: { flag: '🇭🇳', name: 'Honduras', hex: 'U+1F1ED U+1F1F3' }
  },
  hu: {
    code: 'hu',
    name: { en: 'Hungary', fr: 'Hongrie' },
    dial: '36',
    flag: { flag: '🇭🇺', name: 'Hungary', hex: 'U+1F1ED U+1F1FA' }
  },
  is: {
    code: 'is',
    name: { en: 'Iceland', fr: 'Islande' },
    dial: '354',
    flag: { flag: '🇮🇸', name: 'Iceland', hex: 'U+1F1EE U+1F1F8' }
  },
  in: {
    code: 'in',
    name: { en: 'India', fr: 'Inde' },
    dial: '91',
    flag: { flag: '🇮🇳', name: 'India', hex: 'U+1F1EE U+1F1F3' }
  },
  id: {
    code: 'id',
    name: { en: 'Indonesia', fr: 'Indonésie' },
    dial: '62',
    flag: { flag: '🇮🇩', name: 'Indonesia', hex: 'U+1F1EE U+1F1E9' }
  },
  ir: {
    code: 'ir',
    name: {
      en: 'Iran (Islamic Republic of)',
      fr: "Iran (République islamique d')"
    },
    dial: '98',
    flag: { flag: '🇮🇷', name: 'Iran', hex: 'U+1F1EE U+1F1F7' }
  },
  iq: {
    code: 'iq',
    name: { en: 'Iraq', fr: 'Iraq' },
    dial: '964',
    flag: { flag: '🇮🇶', name: 'Iraq', hex: 'U+1F1EE U+1F1F6' }
  },
  ie: {
    code: 'ie',
    name: { en: 'Ireland', fr: 'Irlande' },
    dial: '353',
    flag: { flag: '🇮🇪', name: 'Ireland', hex: 'U+1F1EE U+1F1EA' }
  },
  im: {
    code: 'im',
    name: { en: 'Isle of Man', fr: 'Île de Man' },
    dial: '44',
    flag: { flag: '🇮🇲', name: 'Isle of Man', hex: 'U+1F1EE U+1F1F2' }
  },
  il: {
    code: 'il',
    name: { en: 'Israel', fr: 'Israël' },
    dial: '972',
    flag: { flag: '🇮🇱', name: 'Israel', hex: 'U+1F1EE U+1F1F1' }
  },
  it: {
    code: 'it',
    name: { en: 'Italy', fr: 'Italie' },
    dial: '39',
    flag: { flag: '🇮🇹', name: 'Italy', hex: 'U+1F1EE U+1F1F9' }
  },
  jm: {
    code: 'jm',
    name: { en: 'Jamaica', fr: 'Jamaïque' },
    dial: '1-876',
    flag: { flag: '🇯🇲', name: 'Jamaica', hex: 'U+1F1EF U+1F1F2' }
  },
  jp: {
    code: 'jp',
    name: { en: 'Japan', fr: 'Japon' },
    dial: '81',
    flag: { flag: '🇯🇵', name: 'Japan', hex: 'U+1F1EF U+1F1F5' }
  },
  je: {
    code: 'je',
    name: { en: 'Jersey', fr: 'Jersey' },
    dial: '44',
    flag: { flag: '🇯🇪', name: 'Jersey', hex: 'U+1F1EF U+1F1EA' }
  },
  jo: {
    code: 'jo',
    name: { en: 'Jordan', fr: 'Jordanie' },
    dial: '962',
    flag: { flag: '🇯🇴', name: 'Jordan', hex: 'U+1F1EF U+1F1F4' }
  },
  kz: {
    code: 'kz',
    name: { en: 'Kazakhstan', fr: 'Kazakhstan' },
    dial: '7',
    flag: { flag: '🇰🇿', name: 'Kazakhstan', hex: 'U+1F1F0 U+1F1FF' }
  },
  ke: {
    code: 'ke',
    name: { en: 'Kenya', fr: 'Kenya' },
    dial: '254',
    flag: { flag: '🇰🇪', name: 'Kenya', hex: 'U+1F1F0 U+1F1EA' }
  },
  ki: {
    code: 'ki',
    name: { en: 'Kiribati', fr: 'Kiribati' },
    dial: '686',
    flag: { flag: '🇰🇮', name: 'Kiribati', hex: 'U+1F1F0 U+1F1EE' }
  },
  kw: {
    code: 'kw',
    name: { en: 'Kuwait', fr: 'Koweït' },
    dial: '965',
    flag: { flag: '🇰🇼', name: 'Kuwait', hex: 'U+1F1F0 U+1F1FC' }
  },
  kg: {
    code: 'kg',
    name: { en: 'Kyrgyzstan', fr: 'Kirghizistan' },
    dial: '996',
    flag: { flag: '🇰🇬', name: 'Kyrgyzstan', hex: 'U+1F1F0 U+1F1EC' }
  },
  la: {
    code: 'la',
    name: {
      en: "Lao People's Democratic Republic",
      fr: 'République démocratique populaire lao'
    },
    dial: '856',
    flag: { flag: '🇱🇦', name: 'Laos', hex: 'U+1F1F1 U+1F1E6' }
  },
  lv: {
    code: 'lv',
    name: { en: 'Latvia', fr: 'Lettonie' },
    dial: '371',
    flag: { flag: '🇱🇻', name: 'Latvia', hex: 'U+1F1F1 U+1F1FB' }
  },
  lb: {
    code: 'lb',
    name: { en: 'Lebanon', fr: 'Liban' },
    dial: '961',
    flag: { flag: '🇱🇧', name: 'Lebanon', hex: 'U+1F1F1 U+1F1E7' }
  },
  ls: {
    code: 'ls',
    name: { en: 'Lesotho', fr: 'Lesotho' },
    dial: '266',
    flag: { flag: '🇱🇸', name: 'Lesotho', hex: 'U+1F1F1 U+1F1F8' }
  },
  lr: {
    code: 'lr',
    name: { en: 'Liberia', fr: 'Libéria' },
    dial: '231',
    flag: { flag: '🇱🇷', name: 'Liberia', hex: 'U+1F1F1 U+1F1F7' }
  },
  ly: {
    code: 'ly',
    name: { en: 'Libya', fr: 'Libye' },
    dial: '218',
    flag: { flag: '🇱🇾', name: 'Libya', hex: 'U+1F1F1 U+1F1FE' }
  },
  li: {
    code: 'li',
    name: { en: 'Liechtenstein', fr: 'Liechtenstein' },
    dial: '423',
    flag: { flag: '🇱🇮', name: 'Liechtenstein', hex: 'U+1F1F1 U+1F1EE' }
  },
  lt: {
    code: 'lt',
    name: { en: 'Lithuania', fr: 'Lituanie' },
    dial: '370',
    flag: { flag: '🇱🇹', name: 'Lithuania', hex: 'U+1F1F1 U+1F1F9' }
  },
  lu: {
    code: 'lu',
    name: { en: 'Luxembourg', fr: 'Luxembourg' },
    dial: '352',
    flag: { flag: '🇱🇺', name: 'Luxembourg', hex: 'U+1F1F1 U+1F1FA' }
  },
  mg: {
    code: 'mg',
    name: { en: 'Madagascar', fr: 'Madagascar' },
    dial: '261',
    flag: { flag: '🇲🇬', name: 'Madagascar', hex: 'U+1F1F2 U+1F1EC' }
  },
  mw: {
    code: 'mw',
    name: { en: 'Malawi', fr: 'Malawi' },
    dial: '265',
    flag: { flag: '🇲🇼', name: 'Malawi', hex: 'U+1F1F2 U+1F1FC' }
  },
  my: {
    code: 'my',
    name: { en: 'Malaysia', fr: 'Malaisie' },
    dial: '60',
    flag: { flag: '🇲🇾', name: 'Malaysia', hex: 'U+1F1F2 U+1F1FE' }
  },
  mv: {
    code: 'mv',
    name: { en: 'Maldives', fr: 'Maldives' },
    dial: '960',
    flag: { flag: '🇲🇻', name: 'Maldives', hex: 'U+1F1F2 U+1F1FB' }
  },
  ml: {
    code: 'ml',
    name: { en: 'Mali', fr: 'Mali' },
    dial: '223',
    flag: { flag: '🇲🇱', name: 'Mali', hex: 'U+1F1F2 U+1F1F1' }
  },
  mt: {
    code: 'mt',
    name: { en: 'Malta', fr: 'Malte' },
    dial: '356',
    flag: { flag: '🇲🇹', name: 'Malta', hex: 'U+1F1F2 U+1F1F9' }
  },
  mh: {
    code: 'mh',
    name: { en: 'Marshall Islands', fr: 'Îles Marshall' },
    dial: '692',
    flag: { flag: '🇲🇭', name: 'Marshall Islands', hex: 'U+1F1F2 U+1F1ED' }
  },
  mq: {
    code: 'mq',
    name: { en: 'Martinique', fr: 'Martinique' },
    dial: '596',
    flag: { flag: '🇲🇶', name: 'Martinique', hex: 'U+1F1F2 U+1F1F6' }
  },
  mr: {
    code: 'mr',
    name: { en: 'Mauritania', fr: 'Mauritanie' },
    dial: '222',
    flag: { flag: '🇲🇷', name: 'Mauritania', hex: 'U+1F1F2 U+1F1F7' }
  },
  mu: {
    code: 'mu',
    name: { en: 'Mauritius', fr: 'Maurice' },
    dial: '230',
    flag: { flag: '🇲🇺', name: 'Mauritius', hex: 'U+1F1F2 U+1F1FA' }
  },
  yt: {
    code: 'yt',
    name: { en: 'Mayotte', fr: 'Mayotte' },
    dial: '262',
    flag: { flag: '🇾🇹', name: 'Mayotte', hex: 'U+1F1FE U+1F1F9' }
  },
  mx: {
    code: 'mx',
    name: { en: 'Mexico', fr: 'Mexique' },
    dial: '52',
    flag: { flag: '🇲🇽', name: 'Mexico', hex: 'U+1F1F2 U+1F1FD' }
  },
  fm: {
    code: 'fm',
    name: {
      en: 'Micronesia (Federated States of)',
      fr: 'Micronésie (États fédérés de)'
    },
    dial: '691',
    flag: { flag: '🇫🇲', name: 'Micronesia', hex: 'U+1F1EB U+1F1F2' }
  },
  mc: {
    code: 'mc',
    name: { en: 'Monaco', fr: 'Monaco' },
    dial: '377',
    flag: { flag: '🇲🇨', name: 'Monaco', hex: 'U+1F1F2 U+1F1E8' }
  },
  mn: {
    code: 'mn',
    name: { en: 'Mongolia', fr: 'Mongolie' },
    dial: '976',
    flag: { flag: '🇲🇳', name: 'Mongolia', hex: 'U+1F1F2 U+1F1F3' }
  },
  me: {
    code: 'me',
    name: { en: 'Montenegro', fr: 'Monténégro' },
    dial: '382',
    flag: { flag: '🇲🇪', name: 'Montenegro', hex: 'U+1F1F2 U+1F1EA' }
  },
  ms: {
    code: 'ms',
    name: { en: 'Montserrat', fr: 'Montserrat' },
    dial: '1-664',
    flag: { flag: '🇲🇸', name: 'Montserrat', hex: 'U+1F1F2 U+1F1F8' }
  },
  ma: {
    code: 'ma',
    name: { en: 'Morocco', fr: 'Maroc' },
    dial: '212',
    flag: { flag: '🇲🇦', name: 'Morocco', hex: 'U+1F1F2 U+1F1E6' }
  },
  mz: {
    code: 'mz',
    name: { en: 'Mozambique', fr: 'Mozambique' },
    dial: '258',
    flag: { flag: '🇲🇿', name: 'Mozambique', hex: 'U+1F1F2 U+1F1FF' }
  },
  mm: {
    code: 'mm',
    name: { en: 'Myanmar', fr: 'Myanmar' },
    dial: '95',
    flag: { flag: '🇲🇲', name: 'Myanmar (Burma)', hex: 'U+1F1F2 U+1F1F2' }
  },
  na: {
    code: 'na',
    name: { en: 'Namibia', fr: 'Namibie' },
    dial: '264',
    flag: { flag: '🇳🇦', name: 'Namibia', hex: 'U+1F1F3 U+1F1E6' }
  },
  nr: {
    code: 'nr',
    name: { en: 'Nauru', fr: 'Nauru' },
    dial: '674',
    flag: { flag: '🇳🇷', name: 'Nauru', hex: 'U+1F1F3 U+1F1F7' }
  },
  np: {
    code: 'np',
    name: { en: 'Nepal', fr: 'Népal' },
    dial: '977',
    flag: { flag: '🇳🇵', name: 'Nepal', hex: 'U+1F1F3 U+1F1F5' }
  },
  nl: {
    code: 'nl',
    name: { en: 'Netherlands', fr: 'Pays-Bas' },
    dial: '31',
    flag: { flag: '🇳🇱', name: 'Netherlands', hex: 'U+1F1F3 U+1F1F1' }
  },
  nc: {
    code: 'nc',
    name: { en: 'New Caledonia', fr: 'Nouvelle-Calédonie' },
    dial: '687',
    flag: { flag: '🇳🇨', name: 'New Caledonia', hex: 'U+1F1F3 U+1F1E8' }
  },
  nz: {
    code: 'nz',
    name: { en: 'New Zealand', fr: 'Nouvelle-Zélande' },
    dial: '64',
    flag: { flag: '🇳🇿', name: 'New Zealand', hex: 'U+1F1F3 U+1F1FF' }
  },
  ni: {
    code: 'ni',
    name: { en: 'Nicaragua', fr: 'Nicaragua' },
    dial: '505',
    flag: { flag: '🇳🇮', name: 'Nicaragua', hex: 'U+1F1F3 U+1F1EE' }
  },
  ne: {
    code: 'ne',
    name: { en: 'Niger', fr: 'Niger' },
    dial: '227',
    flag: { flag: '🇳🇪', name: 'Niger', hex: 'U+1F1F3 U+1F1EA' }
  },
  ng: {
    code: 'ng',
    name: { en: 'Nigeria', fr: 'Nigéria' },
    dial: '234',
    flag: { flag: '🇳🇬', name: 'Nigeria', hex: 'U+1F1F3 U+1F1EC' }
  },
  nu: {
    code: 'nu',
    name: { en: 'Niue', fr: 'Nioué' },
    dial: '683',
    flag: { flag: '🇳🇺', name: 'Niue', hex: 'U+1F1F3 U+1F1FA' }
  },
  nf: {
    code: 'nf',
    name: { en: 'Norfolk Island', fr: 'Île Norfolk' },
    dial: '672',
    flag: { flag: '🇳🇫', name: 'Norfolk Island', hex: 'U+1F1F3 U+1F1EB' }
  },
  mp: {
    code: 'mp',
    name: { en: 'Northern Mariana Islands', fr: 'Îles Mariannes du Nord' },
    dial: '1-670',
    flag: {
      flag: '🇲🇵',
      name: 'Northern Mariana Islands',
      hex: 'U+1F1F2 U+1F1F5'
    }
  },
  no: {
    code: 'no',
    name: { en: 'Norway', fr: 'Norvège' },
    dial: '47',
    flag: { flag: '🇳🇴', name: 'Norway', hex: 'U+1F1F3 U+1F1F4' }
  },
  om: {
    code: 'om',
    name: { en: 'Oman', fr: 'Oman' },
    dial: '968',
    flag: { flag: '🇴🇲', name: 'Oman', hex: 'U+1F1F4 U+1F1F2' }
  },
  pk: {
    code: 'pk',
    name: { en: 'Pakistan', fr: 'Pakistan' },
    dial: '92',
    flag: { flag: '🇵🇰', name: 'Pakistan', hex: 'U+1F1F5 U+1F1F0' }
  },
  pw: {
    code: 'pw',
    name: { en: 'Palau', fr: 'Palaos' },
    dial: '680',
    flag: { flag: '🇵🇼', name: 'Palau', hex: 'U+1F1F5 U+1F1FC' }
  },
  pa: {
    code: 'pa',
    name: { en: 'Panama', fr: 'Panama' },
    dial: '507',
    flag: { flag: '🇵🇦', name: 'Panama', hex: 'U+1F1F5 U+1F1E6' }
  },
  pg: {
    code: 'pg',
    name: { en: 'Papua New Guinea', fr: 'Papouasie-Nouvelle-Guinée' },
    dial: '675',
    flag: { flag: '🇵🇬', name: 'Papua New Guinea', hex: 'U+1F1F5 U+1F1EC' }
  },
  py: {
    code: 'py',
    name: { en: 'Paraguay', fr: 'Paraguay' },
    dial: '595',
    flag: { flag: '🇵🇾', name: 'Paraguay', hex: 'U+1F1F5 U+1F1FE' }
  },
  pe: {
    code: 'pe',
    name: { en: 'Peru', fr: 'Pérou' },
    dial: '51',
    flag: { flag: '🇵🇪', name: 'Peru', hex: 'U+1F1F5 U+1F1EA' }
  },
  ph: {
    code: 'ph',
    name: { en: 'Philippines', fr: 'Philippines' },
    dial: '63',
    flag: { flag: '🇵🇭', name: 'Philippines', hex: 'U+1F1F5 U+1F1ED' }
  },
  pn: {
    code: 'pn',
    name: { en: 'Pitcairn', fr: 'Pitcairn' },
    dial: '870',
    flag: undefined
  },
  pl: {
    code: 'pl',
    name: { en: 'Poland', fr: 'Pologne' },
    dial: '48',
    flag: { flag: '🇵🇱', name: 'Poland', hex: 'U+1F1F5 U+1F1F1' }
  },
  pt: {
    code: 'pt',
    name: { en: 'Portugal', fr: 'Portugal' },
    dial: '351',
    flag: { flag: '🇵🇹', name: 'Portugal', hex: 'U+1F1F5 U+1F1F9' }
  },
  pr: {
    code: 'pr',
    name: { en: 'Puerto Rico', fr: 'Porto Rico' },
    dial: '1',
    flag: { flag: '🇵🇷', name: 'Puerto Rico', hex: 'U+1F1F5 U+1F1F7' }
  },
  qa: {
    code: 'qa',
    name: { en: 'Qatar', fr: 'Qatar' },
    dial: '974',
    flag: { flag: '🇶🇦', name: 'Qatar', hex: 'U+1F1F6 U+1F1E6' }
  },
  kr: {
    code: 'kr',
    name: { en: 'North Korea', fr: 'Corée de Nord' },
    dial: '82',
    flag: { flag: '🇰🇵', name: 'North Korea', hex: 'U+1F1F0 U+1F1F5' }
  },
  md: {
    code: 'md',
    name: { en: 'Republic of Moldova', fr: 'République de Moldova' },
    dial: '373',
    flag: { flag: '🇲🇩', name: 'Moldova', hex: 'U+1F1F2 U+1F1E9' }
  },
  ro: {
    code: 'ro',
    name: { en: 'Romania', fr: 'Roumanie' },
    dial: '40',
    flag: { flag: '🇷🇴', name: 'Romania', hex: 'U+1F1F7 U+1F1F4' }
  },
  ru: {
    code: 'ru',
    name: { en: 'Russian Federation', fr: 'Fédération de Russie' },
    dial: '7',
    flag: { flag: '🇷🇺', name: 'Russia', hex: 'U+1F1F7 U+1F1FA' }
  },
  rw: {
    code: 'rw',
    name: { en: 'Rwanda', fr: 'Rwanda' },
    dial: '250',
    flag: { flag: '🇷🇼', name: 'Rwanda', hex: 'U+1F1F7 U+1F1FC' }
  },
  re: {
    code: 're',
    name: { en: 'Réunion', fr: 'Réunion' },
    dial: '262',
    flag: { flag: '🇷🇪', name: 'Réunion', hex: 'U+1F1F7 U+1F1EA' }
  },
  bl: {
    code: 'bl',
    name: { en: 'Saint Barthélemy', fr: 'Saint-Barthélemy' },
    dial: '590',
    flag: { flag: '🇧🇱', name: 'St. Barthélemy', hex: 'U+1F1E7 U+1F1F1' }
  },
  sh: {
    code: 'sh',
    name: { en: 'Saint Helena', fr: 'Sainte-Hélène' },
    dial: '290',
    flag: { flag: '🇸🇭', name: 'St. Helena', hex: 'U+1F1F8 U+1F1ED' }
  },
  kn: {
    code: 'kn',
    name: { en: 'Saint Kitts and Nevis', fr: 'Saint-Kitts-et-Nevis' },
    dial: '1-869',
    flag: { flag: '🇰🇳', name: 'St. Kitts & Nevis', hex: 'U+1F1F0 U+1F1F3' }
  },
  lc: {
    code: 'lc',
    name: { en: 'Saint Lucia', fr: 'Sainte-Lucie' },
    dial: '1-758',
    flag: { flag: '🇱🇨', name: 'St. Lucia', hex: 'U+1F1F1 U+1F1E8' }
  },
  mf: {
    code: 'mf',
    name: {
      en: 'Saint Martin (French Part)',
      fr: 'Saint-Martin (partie française)'
    },
    dial: '590',
    flag: { flag: '🇲🇫', name: 'St. Martin', hex: 'U+1F1F2 U+1F1EB' }
  },
  pm: {
    code: 'pm',
    name: { en: 'Saint Pierre and Miquelon', fr: 'Saint-Pierre-et-Miquelon' },
    dial: '508',
    flag: { flag: '🇵🇲', name: 'St. Pierre & Miquelon', hex: 'U+1F1F5 U+1F1F2' }
  },
  vc: {
    code: 'vc',
    name: {
      en: 'Saint Vincent and the Grenadines',
      fr: 'Saint-Vincent-et-les Grenadines'
    },
    dial: '1-784',
    flag: { flag: '🇻🇨', name: 'St. Vincent & Grenadines', hex: 'U+1F1FB U+1F1E8' }
  },
  ws: {
    code: 'ws',
    name: { en: 'Samoa', fr: 'Samoa' },
    dial: '685',
    flag: { flag: '🇼🇸', name: 'Samoa', hex: 'U+1F1FC U+1F1F8' }
  },
  sm: {
    code: 'sm',
    name: { en: 'San Marino', fr: 'Saint-Marin' },
    dial: '378',
    flag: { flag: '🇸🇲', name: 'San Marino', hex: 'U+1F1F8 U+1F1F2' }
  },
  st: {
    code: 'st',
    name: { en: 'Sao Tome and Principe', fr: 'Sao Tomé-et-Principe' },
    dial: '239',
    flag: { flag: '🇸🇹', name: 'São Tomé & Príncipe', hex: 'U+1F1F8 U+1F1F9' }
  },
  sark: {
    code: 'sark',
    name: { en: 'Sark', fr: 'Sercq' },
    dial: '',
    flag: undefined
  },
  sa: {
    code: 'sa',
    name: { en: 'Saudi Arabia', fr: 'Arabie saoudite' },
    dial: '966',
    flag: { flag: '🇸🇦', name: 'Saudi Arabia', hex: 'U+1F1F8 U+1F1E6' }
  },
  sn: {
    code: 'sn',
    name: { en: 'Senegal', fr: 'Sénégal' },
    dial: '221',
    flag: { flag: '🇸🇳', name: 'Senegal', hex: 'U+1F1F8 U+1F1F3' }
  },
  rs: {
    code: 'rs',
    name: { en: 'Serbia', fr: 'Serbie' },
    dial: '381',
    flag: { flag: '🇷🇸', name: 'Serbia', hex: 'U+1F1F7 U+1F1F8' }
  },
  sc: {
    code: 'sc',
    name: { en: 'Seychelles', fr: 'Seychelles' },
    dial: '248',
    flag: { flag: '🇸🇨', name: 'Seychelles', hex: 'U+1F1F8 U+1F1E8' }
  },
  sl: {
    code: 'sl',
    name: { en: 'Sierra Leone', fr: 'Sierra Leone' },
    dial: '232',
    flag: { flag: '🇸🇱', name: 'Sierra Leone', hex: 'U+1F1F8 U+1F1F1' }
  },
  sg: {
    code: 'sg',
    name: { en: 'Singapore', fr: 'Singapour' },
    dial: '65',
    flag: { flag: '🇸🇬', name: 'Singapore', hex: 'U+1F1F8 U+1F1EC' }
  },
  sx: {
    code: 'sx',
    name: {
      en: 'Sint Maarten (Dutch part)',
      fr: 'Saint-Martin (partie néerlandaise)'
    },
    dial: '1-721',
    flag: { flag: '🇸🇽', name: 'Sint Maarten', hex: 'U+1F1F8 U+1F1FD' }
  },
  sk: {
    code: 'sk',
    name: { en: 'Slovakia', fr: 'Slovaquie' },
    dial: '421',
    flag: { flag: '🇸🇰', name: 'Slovakia', hex: 'U+1F1F8 U+1F1F0' }
  },
  si: {
    code: 'si',
    name: { en: 'Slovenia', fr: 'Slovénie' },
    dial: '386',
    flag: { flag: '🇸🇮', name: 'Slovenia', hex: 'U+1F1F8 U+1F1EE' }
  },
  sb: {
    code: 'sb',
    name: { en: 'Solomon Islands', fr: 'Îles Salomon' },
    dial: '677',
    flag: { flag: '🇸🇧', name: 'Solomon Islands', hex: 'U+1F1F8 U+1F1E7' }
  },
  so: {
    code: 'so',
    name: { en: 'Somalia', fr: 'Somalie' },
    dial: '252',
    flag: { flag: '🇸🇴', name: 'Somalia', hex: 'U+1F1F8 U+1F1F4' }
  },
  za: {
    code: 'za',
    name: { en: 'South Africa', fr: 'Afrique du Sud' },
    dial: '27',
    flag: { flag: '🇿🇦', name: 'South Africa', hex: 'U+1F1FF U+1F1E6' }
  },
  gs: {
    code: 'gs',
    name: {
      en: 'South Georgia and the South Sandwich Islands',
      fr: 'Géorgie du Sud-et-les Îles Sandwich du Sud'
    },
    dial: '500',
    flag: { flag: '🇬🇸', name: 'South Georgia & South Sandwich Islands', hex: 'U+1F1EC U+1F1F8' }
  },
  ss: {
    code: 'ss',
    name: { en: 'South Sudan', fr: 'Soudan du Sud' },
    dial: '211',
    flag: { flag: '🇸🇸', name: 'South Sudan', hex: 'U+1F1F8 U+1F1F8' }
  },
  es: {
    code: 'es',
    name: { en: 'Spain', fr: 'Espagne' },
    dial: '34',
    flag: { flag: '🇪🇸', name: 'Spain', hex: 'U+1F1EA U+1F1F8' }
  },
  lk: {
    code: 'lk',
    name: { en: 'Sri Lanka', fr: 'Sri Lanka' },
    dial: '94',
    flag: { flag: '🇱🇰', name: 'Sri Lanka', hex: 'U+1F1F1 U+1F1F0' }
  },
  ps: {
    code: 'ps',
    name: { en: 'State of Palestine', fr: 'État de Palestine' },
    dial: '970',
    flag: { flag: '🇵🇸', name: 'Palestinian Territories', hex: 'U+1F1F5 U+1F1F8' }
  },
  sd: {
    code: 'sd',
    name: { en: 'Sudan', fr: 'Soudan' },
    dial: '249',
    flag: { flag: '🇸🇩', name: 'Sudan', hex: 'U+1F1F8 U+1F1E9' }
  },
  sr: {
    code: 'sr',
    name: { en: 'Suriname', fr: 'Suriname' },
    dial: '597',
    flag: { flag: '🇸🇷', name: 'Suriname', hex: 'U+1F1F8 U+1F1F7' }
  },
  sj: {
    code: 'sj',
    name: {
      en: 'Svalbard and Jan Mayen Islands',
      fr: 'Îles Svalbard-et-Jan Mayen'
    },
    dial: '47',
    flag: { flag: '🇸🇯', name: 'Svalbard & Jan Mayen', hex: 'U+1F1F8 U+1F1EF' }
  },
  se: {
    code: 'se',
    name: { en: 'Sweden', fr: 'Suède' },
    dial: '46',
    flag: { flag: '🇸🇪', name: 'Sweden', hex: 'U+1F1F8 U+1F1EA' }
  },
  ch: {
    code: 'ch',
    name: { en: 'Switzerland', fr: 'Suisse' },
    dial: '41',
    flag: { flag: '🇨🇭', name: 'Switzerland', hex: 'U+1F1E8 U+1F1ED' }
  },
  sy: {
    code: 'sy',
    name: { en: 'Syrian Arab Republic', fr: 'République arabe syrienne' },
    dial: '963',
    flag: { flag: '🇸🇾', name: 'Syria', hex: 'U+1F1F8 U+1F1FE' }
  },
  tj: {
    code: 'tj',
    name: { en: 'Tajikistan', fr: 'Tadjikistan' },
    dial: '992',
    flag: { flag: '🇹🇯', name: 'Tajikistan', hex: 'U+1F1F9 U+1F1EF' }
  },
  th: {
    code: 'th',
    name: { en: 'Thailand', fr: 'Thaïlande' },
    dial: '66',
    flag: { flag: '🇹🇭', name: 'Thailand', hex: 'U+1F1F9 U+1F1ED' }
  },
  mk: {
    code: 'mk',
    name: {
      en: 'The former Yugoslav Republic of Macedonia',
      fr: 'ex-République yougoslave de Macédoine'
    },
    dial: '389',
    flag: { flag: '🇲🇰', name: 'Macedonia', hex: 'U+1F1F2 U+1F1F0' }
  },
  tl: {
    code: 'tl',
    name: { en: 'Timor-Leste', fr: 'Timor-Leste' },
    dial: '670',
    flag: { flag: '🇹🇱', name: 'Timor-Leste', hex: 'U+1F1F9 U+1F1F1' }
  },
  tg: {
    code: 'tg',
    name: { en: 'Togo', fr: 'Togo' },
    dial: '228',
    flag: { flag: '🇹🇬', name: 'Togo', hex: 'U+1F1F9 U+1F1EC' }
  },
  tk: {
    code: 'tk',
    name: { en: 'Tokelau', fr: 'Tokélaou' },
    dial: '690',
    flag: { flag: '🇹🇰', name: 'Tokelau', hex: 'U+1F1F9 U+1F1F0' }
  },
  to: {
    code: 'to',
    name: { en: 'Tonga', fr: 'Tonga' },
    dial: '676',
    flag: { flag: '🇹🇴', name: 'Tonga', hex: 'U+1F1F9 U+1F1F4' }
  },
  tt: {
    code: 'tt',
    name: { en: 'Trinidad and Tobago', fr: 'Trinité-et-Tobago' },
    dial: '1-868',
    flag: { flag: '🇹🇹', name: 'Trinidad & Tobago', hex: 'U+1F1F9 U+1F1F9' }
  },
  tn: {
    code: 'tn',
    name: { en: 'Tunisia', fr: 'Tunisie' },
    dial: '216',
    flag: { flag: '🇹🇳', name: 'Tunisia', hex: 'U+1F1F9 U+1F1F3' }
  },
  tr: {
    code: 'tr',
    name: { en: 'Turkey', fr: 'Turquie' },
    dial: '90',
    flag: { flag: '🇹🇷', name: 'Turkey', hex: 'U+1F1F9 U+1F1F7' }
  },
  tm: {
    code: 'tm',
    name: { en: 'Turkmenistan', fr: 'Turkménistan' },
    dial: '993',
    flag: { flag: '🇹🇲', name: 'Turkmenistan', hex: 'U+1F1F9 U+1F1F2' }
  },
  tc: {
    code: 'tc',
    name: { en: 'Turks and Caicos Islands', fr: 'Îles Turques-et-Caïques' },
    dial: '1-649',
    flag: { flag: '🇹🇨', name: 'Turks & Caicos Islands', hex: 'U+1F1F9 U+1F1E8' }
  },
  tv: {
    code: 'tv',
    name: { en: 'Tuvalu', fr: 'Tuvalu' },
    dial: '688',
    flag: { flag: '🇹🇻', name: 'Tuvalu', hex: 'U+1F1F9 U+1F1FB' }
  },
  ug: {
    code: 'ug',
    name: { en: 'Uganda', fr: 'Ouganda' },
    dial: '256',
    flag: { flag: '🇺🇬', name: 'Uganda', hex: 'U+1F1FA U+1F1EC' }
  },
  ua: {
    code: 'ua',
    name: { en: 'Ukraine', fr: 'Ukraine' },
    dial: '380',
    flag: { flag: '🇺🇦', name: 'Ukraine', hex: 'U+1F1FA U+1F1E6' }
  },
  ae: {
    code: 'ae',
    name: { en: 'United Arab Emirates', fr: 'Émirats arabes unis' },
    dial: '971',
    flag: {
      flag: '🇦🇪',
      name: 'United Arab Emirates',
      hex: 'U+1F1E6 U+1F1EA'
    }
  },
  gb: {
    code: 'gb',
    name: {
      en: 'United Kingdom of Great Britain and Northern Ireland',
      fr: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord"
    },
    dial: '44',
    flag: { flag: '🇬🇧', name: 'United Kingdom', hex: 'U+1F1EC U+1F1E7' }
  },
  tz: {
    code: 'tz',
    name: {
      en: 'United Republic of Tanzania',
      fr: 'République-Unie de Tanzanie'
    },
    dial: '255',
    flag: { flag: '🇹🇿', name: 'Tanzania', hex: 'U+1F1F9 U+1F1FF' }
  },
  um: {
    code: 'um',
    name: {
      en: 'United States Minor Outlying Islands',
      fr: 'Îles mineures éloignées des États-Unis'
    },
    dial: '',
    flag: { flag: '🇺🇲', name: 'U.S. Outlying Islands', hex: 'U+1F1FA U+1F1F2' }
  },
  vi: {
    code: 'vi',
    name: {
      en: 'United States Virgin Islands',
      fr: 'Îles Vierges américaines'
    },
    dial: '1-340',
    flag: { flag: '🇻🇮', name: 'U.S. Virgin Islands', hex: 'U+1F1FB U+1F1EE' }
  },
  us: {
    code: 'us',
    name: { en: 'United States of America', fr: "États-Unis d'Amérique" },
    dial: '1',
    flag: { flag: '🇺🇸', name: 'United States', hex: 'U+1F1FA U+1F1F8' }
  },
  uy: {
    code: 'uy',
    name: { en: 'Uruguay', fr: 'Uruguay' },
    dial: '598',
    flag: { flag: '🇺🇾', name: 'Uruguay', hex: 'U+1F1FA U+1F1FE' }
  },
  uz: {
    code: 'uz',
    name: { en: 'Uzbekistan', fr: 'Ouzbékistan' },
    dial: '998',
    flag: { flag: '🇺🇿', name: 'Uzbekistan', hex: 'U+1F1FA U+1F1FF' }
  },
  vu: {
    code: 'vu',
    name: { en: 'Vanuatu', fr: 'Vanuatu' },
    dial: '678',
    flag: { flag: '🇻🇺', name: 'Vanuatu', hex: 'U+1F1FB U+1F1FA' }
  },
  ve: {
    code: 've',
    name: {
      en: 'Venezuela (Bolivarian Republic of)',
      fr: 'Venezuela (République bolivarienne du)'
    },
    dial: '58',
    flag: { flag: '🇻🇪', name: 'Venezuela', hex: 'U+1F1FB U+1F1EA' }
  },
  vn: {
    code: 'vn',
    name: { en: 'Viet Nam', fr: 'Viet Nam' },
    dial: '84',
    flag: { flag: '🇻🇳', name: 'Vietnam', hex: 'U+1F1FB U+1F1F3' }
  },
  wf: {
    code: 'wf',
    name: { en: 'Wallis and Futuna Islands', fr: 'Îles Wallis-et-Futuna' },
    dial: '681',
    flag: { flag: '🇼🇫', name: 'Wallis & Futuna', hex: 'U+1F1FC U+1F1EB' }
  },
  eh: {
    code: 'eh',
    name: { en: 'Western Sahara', fr: 'Sahara occidental' },
    dial: '212',
    flag: { flag: '🇪🇭', name: 'Western Sahara', hex: 'U+1F1EA U+1F1ED' }
  },
  ye: {
    code: 'ye',
    name: { en: 'Yemen', fr: 'Yémen' },
    dial: '967',
    flag: { flag: '🇾🇪', name: 'Yemen', hex: 'U+1F1FE U+1F1EA' }
  },
  zm: {
    code: 'zm',
    name: { en: 'Zambia', fr: 'Zambie' },
    dial: '260',
    flag: { flag: '🇿🇲', name: 'Zambia', hex: 'U+1F1FF U+1F1F2' }
  },
  zw: {
    code: 'zw',
    name: { en: 'Zimbabwe', fr: 'Zimbabwe' },
    dial: '263',
    flag: { flag: '🇿🇼', name: 'Zimbabwe', hex: 'U+1F1FF U+1F1FC' }
  },
  ax: {
    code: 'ax',
    name: { en: 'Åland Islands', fr: "Îles d'Åland" },
    dial: '358',
    flag: { flag: '🇦🇽', name: 'Åland Islands', hex: 'U+1F1E6 U+1F1FD' }
  }
} as const;

export type CountryCode = keyof typeof countries;
export interface CountrySelection {
  code: CountryCode
  name: Record<'en' | 'fr', string>
  dial: string
  flag?: Record<'flag' | 'name' | 'hex', string>
}
export default countries;
