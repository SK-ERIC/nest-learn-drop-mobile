import { useMutation } from '@apollo/client';
import { Button, Form, ImageUploader, Input } from 'antd-mobile';

import { UPDATE } from './graphql/demo';
import { useUpLoadOSS } from './hooks/useUploadOSS';

function App() {
  const uploadHandler = useUpLoadOSS();

  const [update, { loading }] = useMutation(UPDATE);

  const onClickHandler = (v: any) => {
    update({
      variables: {
        id: '19e31439-c069-4e38-9f5c-bec57d0084d7',
        params: {
          ...v,
        },
      },
    });
  };

  return (
    <div>
      <Form
        layout="horizontal"
        onFinish={onClickHandler}
        footer={
          <Button block type="submit" color="primary" size="large" loading={loading}>
            提交
          </Button>
        }
      >
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="描述" name="desc">
          <Input />
        </Form.Item>
        <Form.Item label="头像" name="avatar">
          <ImageUploader upload={uploadHandler} />
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
