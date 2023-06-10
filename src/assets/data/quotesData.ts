import camer from '../pictures/CameroonFlag.svg'
import niger from '../pictures/NigerianFlag.svg'
import p1 from '../pictures/product-item.jpg'

export const quotesData = [
  {
    id: 0,
    quoteID: 'RF/Gin101-12/12',
    date: '12/12/2022',
    product: 'Dried Cameroonian Ginger',
    incoterm: 'DDP',
    status: 'Open',
    countryFlag: camer,
    productImage: p1
  },
  {
    id: 1,
    quoteID: 'RF/Gin101-12/12',
    date: '12/12/2022',
    product: 'Dried Nigerian Ginger',
    incoterm: 'FOB',
    status: 'Draft',
    countryFlag: niger,
    productImage: p1
  },
  {
    id: 2,
    quoteID: 'RF/Gin101-12/12',
    date: '12/12/2022',
    product: 'Dried Cameroonian Ginger',
    incoterm: 'CIF',
    status: 'Accepted',
    countryFlag: camer,
    productImage: p1
  },
  {
    id: 3,
    quoteID: 'RF/Gin101-12/12',
    date: '12/12/2022',
    product: 'Dried Nigerian Ginger',
    incoterm: 'EXW',
    status: 'Open',
    countryFlag: niger,
    productImage: p1
  }
]
