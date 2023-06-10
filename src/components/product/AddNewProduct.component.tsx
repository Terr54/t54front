import { InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../store';
import { createProductAction } from '../../store/features/slices/product';

import countries from '../../utils/contrycodes';
import Button from '../commons/controls/button/Button.component';
import Input from '../commons/input/Input.component';

interface AddProductProp {
  onDismiss: () => void;
}
export const AddNewProduct = ({ onDismiss }: AddProductProp) => {
  const categories = useSelector(state => state.categories.payload);
  const [category, setCategory] = useState('product.ginger');
  const [name, setName] = useState('');
  const [countryId, setCountryId] = useState('ng');
  const [localCountries, setLocalCountries] = useState(Object.values(countries));
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const handleCreate = () => {
    dispatch(createProductAction({
      category,
      countryId,
      name,
      terreBasic: false
    })).unwrap().then(() => {
      onDismiss();
      toast.success('product created successfully');
    });
  }

  const filterLocalCountries = (_search: string) => {
    const search = _search?.toLowerCase().trim();
    console.log(search);
    if (search) {
      const lc = localCountries?.filter((localCountry) => (
        localCountry.code?.toLocaleLowerCase().includes(search) ||
          (localCountry.flag?.name ??
              localCountry.name?.en
          )?.toLocaleLowerCase().includes(search) ||
          localCountry.dial.includes(search)
      ));
      if (lc?.length > 0) {
        setLocalCountries(lc);
      } else {
        setLocalCountries(Object.values(countries));
      }
    } else {
      setLocalCountries(Object.values(countries));
    }
  };

  return (
        <div>
            <h3>{t('edit-product')}</h3>
            <Input autoFocus value={name} label={t('product-name')} onChange={(e) => setName(e?.target?.value)} />
            <div style={{ width: '100%' }}>
                <InputLabel id="select-product-category">{t('select-product-category')}</InputLabel>
                <Select
                    style={{ width: '100%', textTransform: 'capitalize' }}
                    label={t('select-product-category')}
                    value={category}
                    onChange={(e) => setCategory(e?.target?.value)}
                    labelId="select-product-category"
                >
                    {
                        categories?.map(item => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.id?.substring('product.'.length) ?? item.id}
                            </MenuItem>
                        ))
                    }
                </Select>
            </div>
            <div style={{ width: '100%' }}>
                <InputLabel id="select-origin-country">{t('select-origin-country')}</InputLabel>
                <Select
                    style={{ width: '100%', textTransform: 'capitalize' }}
                    label={t('select-origin-country')}
                    value={countryId}
                    onChange={(e) => setCountryId(e?.target?.value)}
                    labelId="select-origin-country"
                >
                <div style={{ margin: 15 }}>
                    <Input placeholder={t('search-country')} onChange={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setCountryId('');
                      filterLocalCountries(e?.target?.value);
                    }} />
                </div>
                    {
                        localCountries?.map(item => (
                            <MenuItem key={item.code} value={item.code}>
                                <span>{item.flag?.flag}</span><span>{item.name.en}</span>
                            </MenuItem>
                        ))
                    }
                </Select>
            </div>
            <div style={{ margin: '15px 0' }}>
              <Button style={{ minWidth: 80 }} bgColor='rgba(134, 184, 23, 1)' onClick={handleCreate}>
                  { t('add')}
              </Button>
            </div>
        </div>
  );
}
