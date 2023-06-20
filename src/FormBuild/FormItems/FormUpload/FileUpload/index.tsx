import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import {
  UploadFile,
  UploadChangeParam,
  HttpRequestHeader,
} from "antd/lib/upload/interface.d";
import PropTypes from "prop-types";

import "./index.less";

interface PropsType {
  action?: string;
  headers?: HttpRequestHeader;
  value?: UploadFile[];
  onChange?: (files: UploadFile[]) => void;
  maxCount?: number;
  maxSize?: number;
  title?: string;
  buttonText?: string;
  disabled?: boolean;
  defaultFileList?: UploadFile[];
}

function FileUpload({
  action,
  headers,
  value,
  onChange,
  maxCount,
  maxSize,
  title,
  buttonText,
  disabled,
  defaultFileList,
}: PropsType) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  useEffect(() => {
    console.log(value);
    if (Array.isArray(value)) {
      setFileList(value);
    }
  }, [value]);
  const handleChange = (info: UploadChangeParam) => {
    let newFileList = [...info.fileList];
    console.log("newFileList", newFileList);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    if (onChange) {
      onChange(newFileList);
    } else {
      setFileList(newFileList);
    }
  };

  return (
    <div className="file-upload-self">
      <div className="message-title">{title}</div>
      <div className="message-size">
        上传限{maxCount}个文件，最大{maxSize}MB/个
      </div>
      <Upload
        action={action}
        headers={headers}
        maxCount={maxCount}
        onChange={handleChange}
        multiple
        fileList={fileList}
        disabled={disabled}
        defaultFileList={defaultFileList}
      >
        <Button icon={<UploadOutlined />} disabled={disabled}>
          {buttonText}
        </Button>
      </Upload>
    </div>
  );
}

FileUpload.propTypes = {
  action: PropTypes.string,
  header: PropTypes.object,
  value: PropTypes.array,
  onChange: PropTypes.func,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number, // 单个文件大小限制（M）
  title: PropTypes.string,
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
  defaultFileList: PropTypes.array,
};

FileUpload.defaultProps = {
  maxCount: 30,
  maxSize: 500,
  buttonText: "文件上传",
};

export default FileUpload;
