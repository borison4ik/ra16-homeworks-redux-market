import React from 'react';
import { Badge, Card, Col } from 'antd';

import { useTypedSelector } from '../hooks/useTypedSelector';

import './index.scss';

const { Meta } = Card;

export const ProductsList: React.FC = () => {
  const { products } = useTypedSelector((state) => state.products);

  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <Col span={8}>
            <Badge.Ribbon text={product.saleBadge}>
              <Card
                hoverable
                cover={
                  <img
                    alt={product.title || 'example'}
                    src={
                      product.imageUrl ||
                      'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    }
                  />
                }>
                <div className='price'>
                  <div className='product-price'>{product.price} ₽</div>
                  <div className='product-old-price'>{product.oldPrice} ₽</div>
                </div>
                <Meta
                  title={
                    <a href={product.url || 'https://netology.ru'}>
                      {product.title || 'example'}
                    </a>
                  }
                />
              </Card>
            </Badge.Ribbon>
          </Col>
        ))
      ) : (
        <div>No products</div>
      )}
    </>
  );
};
