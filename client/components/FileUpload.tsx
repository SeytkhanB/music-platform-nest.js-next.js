import { useRef } from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  return (
    <div onClick={() => ref.current.click()}>
      <input
        onChange={onChange}
        type="file"
        accept={accept}
        ref={ref}
        style={{ display: "none" }}
      />
      {children}
    </div>
  );
};

export default FileUpload;
