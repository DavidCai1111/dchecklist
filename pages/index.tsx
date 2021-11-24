import { Button, Divider, Form, Input, List } from 'antd';
import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import AppFooter from '../components/app-footer';
import AppJumbotron from '../components/app-jumbotron';
import ItemCount from '../components/item-count';

const Home: NextPage = ({ drizzle, drizzleState }) => {
  let [dataKey, setDataKey] = useState(null);
  const contract = drizzle.contracts.CheckList;

  let tasks = [];

  useEffect(() => {
    const itemsDataKey = contract.methods['getTasks'].cacheCall();
    setDataKey(itemsDataKey);
  }, [contract]);

  const { CheckList } = drizzleState.contracts;
  const itemsData = CheckList.getTasks[dataKey];

  if (itemsData && itemsData.value) {
    tasks = itemsData.value.map(function (item, idx) {
      return { title: item.title, isDone: item.isDone, key: idx };
    });
  }

  const [form] = Form.useForm();

  const createTask = () => {
    const title = form.getFieldValue('title');
    if (!title || title.trim() === '') {
      form.setFieldsValue({ title: '' });
      return;
    }

    contract.methods['createTask'].cacheSend(title, { from: drizzleState.accounts[0], gas: 3000000 });

    form.setFieldsValue({ title: '' });
  }

  const doneTask = (event) => {
    const idx = event.target.getAttribute('data');

    contract.methods['finishTask'].cacheSend(idx, { from: drizzleState.accounts[0], gas: 3000000 });
  }

  return (
    <div className="container">
        <AppJumbotron title={drizzleState.accounts[0]} />
        <Divider orientation="left">Your tasks:</Divider>
        <List
          size="large"
          bordered
          dataSource={tasks}
          renderItem={({ title, isDone, key }) => <List.Item actions={[<a key={`done-${key}`} data={key} onClick={doneTask}>done</a>]}>{!isDone ? title : <strike>{title}</strike>}</List.Item>}
        />

        <br />
        <br />
        <br />

        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
            <Form.Item
              label="Title"
              name="title"
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onClick={createTask}>
                Submit
              </Button>
            </Form.Item>
        </Form>
        <br />
        <br />
        <br />
        <ItemCount allTheThings={tasks} />
        <hr />
        <AppFooter />
    </div>
  )
}

export default Home
