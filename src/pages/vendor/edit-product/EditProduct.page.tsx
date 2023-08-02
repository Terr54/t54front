import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../../components/admin/wrapper/Wrapper.component';
import Button from '../../../components/commons/controls/button/Button.component';
import Input from '../../../components/commons/input/Input.component';
import TextArea from '../../../components/commons/input/TextArea';
import FileUpload from '../../../components/vendor/file-upload/FileUpload.component';
import InfoBlock from '../info-block/InfoBlock.component';
import classes from './EditProduct.module.css';
import { useParams } from 'react-router-dom';
import { getById, publishProductInventory } from '../../../api/product';
import {
  ProductDetails,
  ProductResponse,
  ProductStock,
} from '../../../domain/domain';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from '../../../store';
import {
  addProductDetailsAction,
  addProductInventoryAction,
  addProductMediaAction,
  publishProductInventoryAction,
  updateProduct,
  updateProductStock,
} from '../../../store/features/slices/product';
import ProductSpecifications from '../../../components/product-specifications/ProductSpecifications.component';

const EditProduct = () => {
  const { t } = useTranslation();
  const [scientificName, setScientificName] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [productionMode, setProductionMode] = useState<string>('');
  const [cropYear, setCropYear] = useState(String(new Date().getFullYear()));
  const [productVariety, setProductVariety] = useState<string>('');
  const [genetics, setGenetics] = useState<string>('');
  const [moisture, setMoisture] = useState('');
  const [currency, setCurrency] = useState<string>('xaf');
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitMeasure, setUnitMeasure] = useState<string>('kg');
  const [productState, setProductState] = useState<Partial<ProductResponse>>();
  const [productId, setProductId] = useState<string>('');
  const [specsVisible, setSpecsVisible] = useState<boolean>(false);

  const products = useSelector((state) => state.products.payload);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files != null) {
      dispatch(addProductMediaAction({ id: productId, media: files[0] }))
        .unwrap()
        .then(() => {
          toast.success(t('media-add-success'));
        });
    }
  };

  const effectRef = useRef(false);

  const { id } = useParams();

  const setProductDetails = (productDetails: Partial<ProductDetails>) => {
    setDetails(productDetails.details ?? '');
    setCropYear(String(productDetails.cropYear ?? new Date().getFullYear()));
    setMoisture(String(productDetails.moisture ?? 0.5));
    setProductionMode(productDetails.productionMode ?? '');
    setProductVariety(productDetails.productVariety ?? '');
    setScientificName(productDetails.scientificName ?? '');
    setGenetics(productDetails.genetics ?? '');
  };
  const resetStockValues = () => {
    setCurrency('xaf');
    setUnitMeasure('kg');
    setUnitPrice('');
    setQuantity('');
  };
  useEffect(() => {
    if (!effectRef.current) {
      getById(String(id)).then((res) => {
        const { data } = res;
        const { id } = data.content.product;
        setProductId(id);
        dispatch(updateProduct(data.content));
      });
    }
  }, []);
  useEffect(() => {
    const product = products?.products?.find((p) => p.id === productId);
    const productDetails = products?.productDetails?.[productId];
    const productStocks = products?.productStocks?.[productId];
    const mediaSlots = products?.mediaSlots?.[productId];
    if (product) {
      setProductState({
        product,
        productDetails,
        productStocks,
        mediaSlots,
      });
      if (productDetails) {
        setProductDetails(productDetails);
      }
    }
  }, [productId, products]);

  const handleAddDetails = () => {
    const productDetails: Partial<ProductDetails> = {
      details,
      productionMode,
      productId: String(id),
      productVariety,
      genetics,
      scientificName,
      moisture: Number(moisture),
      cropYear: Number(cropYear),
    };
    dispatch(addProductDetailsAction(productDetails))
      .unwrap()
      .then(() => {
        toast.success(t('product-details-saved'));
      });
  };

  const handleAdd = () => {
    handleAddDetails();
  };

  const handleSaveStock = () => {
    const productStock: Partial<ProductStock> = {
      productId: String(id),
      unitPrice: Number(unitPrice),
      currency,
      quantity: Number(quantity),
      unitMeasure,
    };
    dispatch(addProductInventoryAction(productStock))
      .unwrap()
      .then(() => {
        toast.success(t('stock-added-successfully'));
        resetStockValues();
      });
  };

  const handlePublishStock = (stock: ProductStock) => {
    dispatch(publishProductInventoryAction(stock.id))
      .unwrap()
      .then(() => {
        toast.success(t('stock-published-under-review'));
      });
  };

  const renderUploadSlots = (count: number) => {
    return Array(4 - count < 0 ? 1 : 4 - count)
      .fill(0)
      .map((v) => (
        <FileUpload key={`${v} + ${Math.random()}`} onChange={handleChange} />
      ));
  };

  return (
    <Wrapper
      heading={`${t('edit-product')} ${productState?.product?.name ?? ''}`}
      pathName={`${t('products')} / ${t('edit')} ${t('product')}`}
      contentColor='transparent'
      renderButton={() => (
        <div className={classes.actionButtons}>
          <Button
            bgColor='transparent'
            text={t('discard')}
            padding='12px'
            boxShadow='none'
            color='#E63F07'
            margin='0px 10px 0px 0px'
          />
          <Button
            bgColor='#E63F07'
            text={t('save')}
            iconAfter
            padding='12px'
            onClick={handleAdd}
          />
        </div>
      )}
    >
      <InfoBlock heading={t('upload-product-image')}>
        <div className={classes.fileUpload}>
          {productState?.mediaSlots?.map((m) => (
            <label
              htmlFor='upload'
              key={m.fileName}
              className={classes.preview}
            >
              <input
                type='file'
                id='upload'
                onChange={handleChange}
                accept='/image*'
              />
              <img
                src={m.src}
                alt={m.fileName}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                }}
              />
            </label>
          ))}
          {renderUploadSlots(productState?.mediaSlots?.length ?? 0)}
        </div>
      </InfoBlock>
      <div className={classes.splitInputs}>
        <InfoBlock heading={t('product-information')} width='100%'>
          <div className={classes.inputs}>
            <Input
              placeholder={t('scientific-name')}
              label={t('scientific-name')}
              value={scientificName}
              onChange={(e) => setScientificName(e?.target?.value)}
            />
            <Input
              placeholder={t('production-mode')}
              label={t('production-mode')}
              value={productionMode}
              onChange={(e) => setProductionMode(e?.target?.value)}
            />
            <Input
              placeholder={t('crop-year')}
              label={t('crop-year')}
              value={cropYear}
              type='number'
              onChange={(e) =>
                setCropYear(
                  String(e?.target?.value || new Date().getFullYear())
                )
              }
            />
            <Input
              placeholder={t('product-variety')}
              label={t('product-variety')}
              value={productVariety}
              onChange={(e) => setProductVariety(e?.target?.value)}
            />
            <Input
              placeholder={t('genetics')}
              label={t('genetics')}
              value={genetics}
              onChange={(e) => setGenetics(e?.target?.value)}
            />
            <Input
              placeholder={t('moisture')}
              label={t('moisture')}
              value={moisture}
              onChange={(e) => setMoisture(e?.target?.value)}
              type='number'
              step={0.1}
            />
            <TextArea
              placeholder={t('product-details')}
              label={t('product-details')}
              value={details}
              onChange={(e) => setDetails(e?.target?.value)}
            />
            <Button
              bgColor='#86b817'
              text='Add Product Specifications'
              iconAfter
              padding='12px'
              width='40%'
              margin='16px 0 0'
              style={{ justifySelf: 'flex-start' }}
              onClick={() => setSpecsVisible(true)}
            />
          </div>
        </InfoBlock>
        <div className={classes.rightBlock}>
          {productState?.productStocks?.map((stock) => (
            <InfoBlock
              key={stock.id}
              heading={`${t('stock')} ${
                stock.publishedAt != null && stock.verifiedAt == null
                  ? `${t('published-at')}: ${new Date(
                      stock.publishedAt
                    ).toLocaleDateString()} ${t('under-review')}`
                  : ''
              } ${stock.verifiedAt != null ? t('verified') : ''}`}
            >
              <div className={classes.inputs}>
                <Input
                  placeholder='00'
                  label={t('quantity')}
                  value={stock.quantity}
                  type='number'
                />
                <Input
                  placeholder='00'
                  label={t('unit-measure')}
                  value={stock.unitMeasure}
                />
                <Input
                  placeholder='00'
                  label={t('unit-price')}
                  value={stock.unitPrice}
                  type='number'
                />
                <Input
                  placeholder='XAF'
                  label={t('currency')}
                  value={stock.currency}
                />
                <Button
                  bgColor='#86b817'
                  text={`${t('publish')} ${t('stock')}`}
                  iconAfter
                  padding='12px'
                  onClick={() => handlePublishStock(stock)}
                  width='100%'
                  margin='16px 0 0'
                />
              </div>
            </InfoBlock>
          ))}
          <InfoBlock heading={t('stock')}>
            <div className={classes.inputs}>
              <Input
                placeholder='00'
                label={t('quantity')}
                value={quantity}
                onChange={(e) => setQuantity(e?.target?.value)}
                type='number'
              />
              <Input
                placeholder='00'
                label={t('unit-measure')}
                value={unitMeasure}
                onChange={(e) => setUnitMeasure(e?.target?.value)}
              />
              <Input
                placeholder='00'
                label={t('unit-price')}
                value={unitPrice}
                onChange={(e) => setUnitPrice(e?.target?.value)}
                type='number'
              />
              <Input
                placeholder='XAF'
                label={t('currency')}
                value={currency}
                onChange={(e) => setCurrency(e?.target?.value)}
              />
              <Button
                bgColor='#E63F07'
                text={`${t('save')} stock`}
                iconAfter
                padding='12px'
                onClick={handleSaveStock}
                width='100%'
                margin='16px 0 0'
              />
            </div>
          </InfoBlock>
        </div>
      </div>
      <ProductSpecifications
        showModal={specsVisible}
        onClose={() => setSpecsVisible(false)}
      />
    </Wrapper>
  );
};

export default EditProduct;
