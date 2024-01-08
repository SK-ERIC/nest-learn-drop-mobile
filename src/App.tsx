import { useMutation, useQuery } from '@apollo/client';
import { Button, Form, Input } from 'antd-mobile';

import { FIND, UPDATE } from './graphql/demo';

function App() {
  const { data } = useQuery(FIND, {
    variables: {
      id: '19e31439-c069-4e38-9f5c-bec57d0084d7',
    },
  });

  const [update, { loading }] = useMutation(UPDATE);

  const onClickHandler = (v: any) => {
    update({
      variables: {
        id: '19e31439-c069-4e38-9f5c-bec57d0084d7',
        params: {
          ...v,
          avatar: 'https://avatars.githubusercontent.com/u/52649359',
        },
      },
    });
  };

  return (
    <div>
      <p>
        data:
        {JSON.stringify(data)}
      </p>
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
      </Form>
    </div>
  );
}

export default App;
