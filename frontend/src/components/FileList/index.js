import React from 'react';
import { Container, FileInfo, Preview } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md';

const percentage = 66;
const FileList = () => (
  
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://upimagekd.s3.amazonaws.com/8a26980ff4f032bfb42316d4d6a9d615-b.jpg" />
        <div>
          <strong>profile.png</strong>
          <span>
            64kb 
            <button onClick={() => {}}>Ecluir</button>
          </span>
        </div>
      </FileInfo>
      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: '#7159c1' }
          }}
          strokeWidth={10}
          percentage={60}
          value={percentage} 
          text={`${percentage}%`}
        />

        <a 
          href="https://upimagekd.s3.amazonaws.com/8a26980ff4f032bfb42316d4d6a9d615-b.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222"/>
        </a>

        <MdCheckCircle size={24} color="#78e5d5" />
        <MdError size={24} color="#e57878" />
      </div>
    </li>
  </Container>
);

export default FileList;
