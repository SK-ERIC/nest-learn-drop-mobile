import { useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';

import { FIND, UPDATE } from './graphql/demo';

function App() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const { loading, data } = useQuery(FIND, {
    variables: {
      id: '19e31439-c069-4e38-9f5c-bec57d0084d7',
    },
  });

  const [update] = useMutation(UPDATE);

  const onChangeNameHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setName(v.target.value);
  };

  const onChangeDescHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(v.target.value);
  };

  const onClickHandler = () => {
    update({
      variables: {
        id: '19e31439-c069-4e38-9f5c-bec57d0084d7',
        params: {
          name,
          desc,
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
      <p>
        loading:
        {JSON.stringify(loading)}
      </p>
      <p>
        name:
        <input type="text" onChange={onChangeNameHandler} />
      </p>
      <p>
        desc:
        <input type="text" onChange={onChangeDescHandler} />
      </p>
      <p>
        <button type="button" onClick={onClickHandler}>
          更新
        </button>
      </p>
    </div>
  );
}

export default App;
