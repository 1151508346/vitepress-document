# react 打开docx文件
## 方案1
> 下载docx-preview
```bash
npm install docx-preview
```

```tsx
import React, { useEffect, useRef, useState } from "react";
import * as docx from "docx-preview";

export interface Props {
  fileInfo: string;
}

const DocxView = (props: Props) => {
  const { fileInfo } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const docxContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fileInfo);
        const data = await response.blob();
        const containerElement = docxContainerRef.current;
        if (containerElement) {
          docx.renderAsync(data, containerElement).then(() => {
            console.info("docx: finished");
            setIsLoading(false);
          });
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching or rendering document:", error);
      }
    };

    fetchData();
  }, [fileInfo]);

  return (
    <div className="relative h-full" style={{ width: "900px",margin:"auto",backgroundColor: "grey",height: '100%'}}>
      <div ref={docxContainerRef} className="h-full" />
      {isLoading ? <>加载中...</> : null}
    </div>
  );
};

export default DocxView;
```
## 方案2
```tsx
import React from "react";
//  支持 pdf word excel 图片

class FilePreview extends React.Component {
  render() {
    let { fileUrl, fileType } = this.props;
    fileUrl =
      "https://gitee.com/tmmaiyatang/pdf-view-in-file/raw/master/docx/王国晗-简历.docx";
    fileType = "word";

    // fileUrl = 'https://gitee.com/tmmaiyatang/pdf-view-in-file/raw/master/pdf/vite3-vue3工程化实战.pdf'
    // fileType = 'pdf'
    if (fileType === "image") {
      return <img src={fileUrl} alt="预览" />;
    }

    if (fileType === "pdf") {
      return (
        <embed
          src={fileUrl}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      );
    }

    if (fileType === "excel" || fileType === "word") {
      return (
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${fileUrl}`}
          width="100%"
          height="600px"
          frameBorder="0"
        />
      );
    }

    return null;
  }
}

export default FilePreview;
```