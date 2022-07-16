import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Button, Form, Input } from 'antd';

import { TProductItem } from '../../@types/TProducts';
import { addProductAction } from '../../store/actionCreators/servises';

export const AdProductForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const salePersent = Math.floor((values.price / values.oldPrice) * 100);

    const productObject: TProductItem = {
      id: nanoid(),
      title: values.title,
      url: values.url,
      price: values.price,
      oldPrice: values.oldPrice,
      imageUrl: values.imageUrl,
      saleBadge: salePersent < 100 ? `${salePersent}%` : '',
    };
    console.log(values);
    dispatch(addProductAction(productObject));
    form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue({
      imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    });
  }, []);

  return (
    <Form
      form={form}
      name='horizontal_login'
      layout='horizontal'
      onFinish={onFinish}>
      <Form.Item
        label='Title'
        name='title'
        rules={[
          {
            required: true,
            message: 'Please input product Title',
          },
        ]}>
        <Input placeholder='My super product' />
      </Form.Item>

      <Form.Item
        label='URL'
        name='url'
        rules={[
          {
            required: true,
            message: 'Please input product url',
          },
        ]}>
        <Input placeholder='https://market.yandex.ru/product' />
      </Form.Item>

      <Form.Item
        label='Price'
        name='price'
        rules={[{ required: true, message: 'Please input price' }]}>
        <Input type='number' placeholder='1000' />
      </Form.Item>

      <Form.Item
        label='OldPrise'
        name='oldPrice'
        rules={[{ required: true, message: 'Please input old price' }]}>
        <Input type='number' placeholder='10000' />
      </Form.Item>

      <Form.Item
        label='ImageUrl'
        name='imageUrl'
        rules={[
          {
            required: true,
            message: 'Please input image url',
          },
        ]}>
        <Input placeholder='https://avatars.mds.yandex.net/get-mpic/4888456/img_id8021061323193186327.jpeg/orig' />
      </Form.Item>

      <Form.Item shouldUpdate>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }>
            Save
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
