import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import { UploadRequestOption, RcFile } from "rc-upload/lib/interface";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface.d";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./index.less";

type UploadFunc = (params: {
  file: File;
  needSuffix: boolean;
}) => Promise<{ fid: string; fileUrl: string }>;

interface PropsType {
  uploadFile?: UploadFunc;
  value?: UploadFile[];
  onChange?: (files: UploadFile[]) => void;
  maxCount?: number;
  maxSize?: number;
  title?: string;
  buttonText?: string;
  disabled?: boolean;
}

function FileUpload({
  uploadFile,
  value,
  onChange,
  maxCount,
  maxSize,
  title,
  buttonText,
  disabled,
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
        file.status = "success";
      }
      return file;
    });
    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    // newFileList = newFileList.slice(-5);

    if (onChange) {
      onChange(newFileList);
    } else {
      setFileList(newFileList);
    }
  };

  const uploadByApi = ({
    file,
    onSuccess,
    onError,
    onProgress,
  }: UploadRequestOption) => {
    if (!file) return;
    const _file: RcFile = file as RcFile;
    const M = _file.size / (1024 * 1024);
    if (maxSize && M > maxSize) {
      message.error(`文件【${_file.name}】大小超过${maxSize}M,无法上传`);
      if (onError) {
        onError(new Error(`文件【${_file.name}】大小超过${maxSize}M,无法上传`));
      }
      return;
    }
    if (uploadFile) {
      uploadFile({
        file: _file,
        needSuffix: true,
      })
        .then((res) => {
          if (onProgress) onProgress({ percent: 1 });
          const newFile = {
            ...res,
            uid: res.fid,
            url: res.fileUrl,
            name: _file.name,
            size: _file.size,
          };
          if (onSuccess) onSuccess(newFile);
        })
        .catch(onError);
    } else {
      setTimeout(function () {
        if (onProgress) onProgress({ percent: 1 });
        if (onSuccess) onSuccess(_file);
      }, 3000);
    }
  };

  return (
    <div className="file-upload-self">
      <div className="message-title">{title}</div>
      {maxCount || maxSize ? (
        <div className="message-size">
          {maxCount ? `上传限${maxCount}个文件 ` : null}{" "}
          {maxSize ? `最大${maxSize}MB/个` : null}
        </div>
      ) : null}
      <Upload
        customRequest={uploadByApi}
        maxCount={maxCount}
        onChange={handleChange}
        fileList={fileList}
        disabled={disabled}
      >
        <Button disabled={disabled} icon={<UploadOutlined />}>
          {buttonText}
        </Button>
      </Upload>
    </div>
  );
}

FileUpload.propTypes = {
  uploadFile: PropTypes.func,
  value: PropTypes.array,
  onChange: PropTypes.func,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number, // 单个文件大小限制（M）
  title: PropTypes.string,
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
};

FileUpload.defaultProps = {
  buttonText: "文件上传",
};

// function mapDispatch(dispatch: any) {
//   return {
//     uploadFile: dispatch?.common?.uploadFile,
//   };
// }

// export default connect(null, mapDispatch)(FileUpload);
export default FileUpload;
