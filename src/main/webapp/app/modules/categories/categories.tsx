import './categories.scss';
import './product-card.scss';
import React, { useRef, useState } from 'react';
import Product from './product';
import { Breadcrumb, Carousel, Pagination, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { fakeData } from './fakeData';

type PriceFilter = {
  startPrice?: string;
  endPrice?: string;
};
type Rating = 0 | 1 | 2 | 3 | 4 | 5;
export type SortBy = 'popular' | 'newest' | 'bestseller' | 'highest-price' | 'lowest-price';

const Category = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ratingFilter, setRatingFilter] = useState<Rating>(0);
  const [sortBy, setSortBy] = useState<SortBy>('popular');
  const [priceFilter, setPriceFilter] = useState<PriceFilter>({ startPrice: '', endPrice: '' });
  const carouselRef = useRef(null);

  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPriceFilter({ ...priceFilter, [event.target.name]: event.target.value.replace(/[^0-9]/g, '') });
  };

  return (
    <div className="view-center">
      <div className="category-view">
        <div className="breadcrumb-view">
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/">Homepage</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/category">Category</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="banner-view">
          <Carousel ref={carouselRef} autoplay autoplaySpeed={5000}>
            {fakeData.map((item, index) => (
              <div key={index}>
                <img src={item.image} />
              </div>
            ))}
          </Carousel>
          <a className="carousel-btn-prev" onClick={() => carouselRef.current.prev()}>
            <LeftOutlined />
          </a>
          <a className="carousel-btn-next" onClick={() => carouselRef.current.next()}>
            <RightOutlined />
          </a>
        </div>
        <div className="flex-container">
          <div className="filter-container">
            <div className="category-list-view">
              <div className="category-title">Danh m???c s???n ph???m</div>
              <Link className="category-item" to="/category">
                Danh m???c con
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c b???
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c m???
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c ??ng
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c b??
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c c??
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c d??
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c ch??
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c b??c
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c c???u
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c m???
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c anh
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c ch???
              </Link>
              <Link className="category-item" to="/category">
                Danh m???c em
              </Link>
            </div>
            <hr className="divider-line" />
            <div className="filter-view">
              <div className="filter-title">Kho???ng gi??</div>
              <div className="price-filter">
                <div className="input-field">
                  <input
                    type="text"
                    name="startPrice"
                    value={priceFilter.startPrice}
                    maxLength={13}
                    onChange={event => onChangePrice(event)}
                    placeholder="T???"
                  />
                  -
                  <input
                    type="text"
                    name="endPrice"
                    value={priceFilter.endPrice}
                    maxLength={13}
                    onChange={event => onChangePrice(event)}
                    placeholder="?????n"
                  />
                </div>
                <button>??p d???ng</button>
              </div>
            </div>
            <hr className="divider-line" />
            <div className="filter-view">
              <div className="filter-title">????nh gi??</div>
              <div className="rating-filter">
                <button className={ratingFilter === 5 ? 'rate-active' : ''} onClick={() => setRatingFilter(ratingFilter === 5 ? 0 : 5)}>
                  <Rate value={5} disabled />
                </button>
                <button className={ratingFilter === 4 ? 'rate-active' : ''} onClick={() => setRatingFilter(ratingFilter === 4 ? 0 : 4)}>
                  <Rate value={4} disabled />
                  <span className="rating-text">t??? 4 sao</span>
                </button>
                <button className={ratingFilter === 3 ? 'rate-active' : ''} onClick={() => setRatingFilter(ratingFilter === 3 ? 0 : 3)}>
                  <Rate value={3} disabled />
                  <span className="rating-text">t??? 3 sao</span>
                </button>
                <button className={ratingFilter === 2 ? 'rate-active' : ''} onClick={() => setRatingFilter(ratingFilter === 2 ? 0 : 2)}>
                  <Rate value={2} disabled />
                  <span className="rating-text">t??? 2 sao</span>
                </button>
                <button className={ratingFilter === 1 ? 'rate-active' : ''} onClick={() => setRatingFilter(ratingFilter === 1 ? 0 : 1)}>
                  <Rate value={1} disabled />
                  <span className="rating-text">t??? 1 sao</span>
                </button>
              </div>
            </div>
          </div>
          <div className="product-list-view">
            <div className="product-list-card">
              <div className="product-list-card-header">
                <button className={sortBy === 'popular' ? 'tabs-link active' : 'tabs-link'} onClick={() => setSortBy('popular')}>
                  Ph??? bi???n
                </button>
                <button className={sortBy === 'newest' ? 'tabs-link active' : 'tabs-link'} onClick={() => setSortBy('newest')}>
                  M???i nh???t
                </button>
                <button className={sortBy === 'bestseller' ? 'tabs-link active' : 'tabs-link'} onClick={() => setSortBy('bestseller')}>
                  B??n ch???y
                </button>
                <button
                  className={sortBy === 'highest-price' ? 'tabs-link active' : 'tabs-link'}
                  onClick={() => setSortBy('highest-price')}
                >
                  Gi?? cao
                </button>
                <button className={sortBy === 'lowest-price' ? 'tabs-link active' : 'tabs-link'} onClick={() => setSortBy('lowest-price')}>
                  Gi?? th???p
                </button>
              </div>
              <div className="product-list-card-body">
                {fakeData.map((item, index) => (
                  <Product key={index} product={item} />
                ))}
              </div>
            </div>
            <div className="product-list-pagination">
              <Pagination
                defaultCurrent={1}
                current={currentPage}
                pageSize={10}
                total={100}
                onChange={page => {
                  setCurrentPage(page);
                }}
                hideOnSinglePage={true}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
