import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import Progressbar from '../progress-bar/Progressbar.component';

import { Container, Span, Content, fileUploadProps, InfoSize, StyledContent } from './FileUpload.styles';

const FileUpload = ({ onChange, accept, type = 'file', filename, size, height = '14vh', value, margin = '8px 0px 14px', uploading, label }: fileUploadProps) => {
  return (
    <>
      <Span>
       {label}
      </Span>
      {
        uploading
          ? (<Container height={height} margin={margin}>
            <input
              type={type}
              id='upload'
              onChange={onChange}
              value={value}
              accept={accept}
            />
            <label htmlFor='upload'>
              <ImageOutlinedIcon style={{ color: '#F08D6B' }} />
              <Content>
                <InfoSize>
                    <Span>Uploading {filename}</Span>
                    <Span color='#666666' style={{ textAlign: 'right' }}>{size}</Span>
                </InfoSize>
                <Progressbar />
                <Span style={{ color: '#F08D6B', fontSize: '10px' }}>
                    Cancel
                </Span>
              </Content>
            </label>
          </Container>)
          : (<Container height={height} margin={margin}>
            <input
              type={type}
              id='upload'
              onChange={onChange}
              value={value}
              accept={accept}
            />
            <label htmlFor='upload'>
          <UploadFileOutlinedIcon style={{ color: '#D1D1D1' }} />
          <StyledContent>
            <Span color='#F08D6B'>
                Click to upload <Span color='rgba(0,0,0,0.4)'>or drag and drop</Span>
            </Span>
            <Span color='rgba(0,0,0,0.4)'>SVG, PNG or JPG (max 5mb)</Span>
          </StyledContent>
        </label>
      </Container>)
      }
    </>
  );
};

export default FileUpload;
