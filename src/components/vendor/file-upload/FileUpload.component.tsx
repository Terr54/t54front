import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Progressbar from '../../progress-bar/Progressbar.component';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import { Container, Span, Content, fileUploadProps, InfoSize, StyledContent } from './FileUpload.styles';
import { useTranslation } from 'react-i18next';

const FileUpload = ({ onChange, accept = '/image*', type = 'file', filename, size, height = '130px', width = '220px', margin = '8px 0px 14px', uploading }: fileUploadProps) => {
  const { t } = useTranslation();
  return (
    <>
      {
        uploading
          ? (<Container height={height} margin={margin} width={width}>
            <label htmlFor='upload' style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
            <input
              type={type}
              id='upload'
              onChange={onChange}
              accept={accept}
            />
              <ImageOutlinedIcon style={{ color: '#F08D6B' }} />
              <Content>
                <InfoSize>
                    <Span>{t('uploading')} {filename}</Span>
                    <Span color='#666666' style={{ textAlign: 'right' }}>{size}</Span>
                </InfoSize>
                <Progressbar />
                <Span style={{ color: '#F08D6B', fontSize: '10px' }}>
                    {t('cancel')}
                </Span>
              </Content>
            </label>
          </Container>)
          : (
          <Container height={height} margin={margin} width={width}>
              <label htmlFor='upload' style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                  type={type}
                  id='upload'
                  onChange={onChange}
                  accept={accept}
                />
                <CloudUploadOutlinedIcon style={{ color: '#E63F07', marginBottom: '6px' }} />
                <StyledContent>
                  <Span>
                     {t('drag-&-drop')} <Span color='#E63F07'>{t('click-to-upload')}</Span>
                  </Span>
                  <Span color='rgba(0,0,0,0.4)'>SVG, PNG or JPG (max 5mb)</Span>
                </StyledContent>
              </label>
          </Container>
            )
          }
    </>
  );
};

export default FileUpload;
