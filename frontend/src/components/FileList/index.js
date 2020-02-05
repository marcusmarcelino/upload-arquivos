import React from 'react';
import { Container, FileInfo, Preview } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md';

const FileList = ({ files }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview}/>
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize} 
              { !!uploadedFile.url && (
                <button onClick={() => {}}>Ecluir</button>
              )}
            </span>
          </div>
        </FileInfo>
        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: '#7159c1' }
              }}
              strokeWidth={10}
              percentage={uploadedFile.progress}
              value={uploadedFile.progress} 
              text={`${uploadedFile.progress}%`}
            />
          )}

          {uploadedFile.url && (
            <a 
              href="https://upimagekd.s3.amazonaws.com/8a26980ff4f032bfb42316d4d6a9d615-b.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222"/>
            </a>
          )}

          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}

          {uploadedFile.error && <MdError size={24} color="#e57878" />}
        </div>
      </li>
    ) )}
  </Container>
);

export default FileList;