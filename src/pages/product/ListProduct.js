import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    Table, Tag, Button, Image, Avatar, Pagination, Modal, Form,
    Input, Select, DatePicker, Switch
} from 'antd';
import { getProducts } from '../../redux/action/actProduct';
import moment from 'moment';

const ListProduct = () => {
    const dispatch = useDispatch();
    // const listProductFromStore = useSelector((state) => state.products);
    const listProductFromStore = [
        {
            "id": 1,
            "name": "product name change",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 1",
            "tax": 0.0,
            "description": "description 1",
            "material": "material 1",
            "active": false,
            "createdAt": "2021-12-06T21:08:27.8175276",
            "supplierId": 1
        },
        {
            "id": 2,
            "name": "product name 2",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 2",
            "tax": 0.0,
            "description": "description 2",
            "material": "material 2",
            "active": true,
            "createdAt": "2021-12-06T21:08:28.0449169",
            "supplierId": 2
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        },
        {
            "id": 3,
            "name": "product name 3",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 3",
            "tax": 0.0,
            "description": "description 3",
            "material": "material 3",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0728513",
            "supplierId": 3
        },
        {
            "id": 4,
            "name": "product name 4",
            "price": 0.0,
            "discount": 0.0,
            "origin": "origin 4",
            "tax": 0.0,
            "description": "description 4",
            "material": "material 4",
            "active": false,
            "createdAt": "2021-12-06T21:08:28.0838414",
            "supplierId": 4
        }
    ];
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <strong>{text}</strong>,
        },
        {
            title: 'Giá bán',
            dataIndex: 'price',
            key: 'price',
            // width: '15%'
        },
        {
            title: 'Khuyến mãi',
            dataIndex: 'discount',
            key: 'discount',
            // width: '20%'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'active',
            key: 'active',
            render: tag => {
                if (tag === false) return (<Tag color='red' key={tag}>
                    {(tag + "").toUpperCase()}
                </Tag>)
                else return (<Tag color='green' key={tag}>
                    {(tag + "").toUpperCase()}
                </Tag>)
            }
            // width: '20%'
        }, {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            // width: '20%'
        }, {
            title: 'Thuế',
            dataIndex: 'tax',
            key: 'tax',
            // width: '20%'
        }, {
            title: 'Nguyên liệu',
            dataIndex: 'material',
            key: 'material',
            // width: '20%'
        }, {
            title: 'Chi tiết',
            key: 'lastOnline',
            render: obj => {
                return <div> <Button icon={<i className="fas fa-user-circle"></i>} type="primary" onClick={() => showModal(obj)} >&nbsp;&nbsp;Chi tiết</Button>

                </div>
            }
        }



    ]

    const [selectedProduct, setselectedProduct] = useState({})
    const dateFormat = 'YYYY-MM-DD ';
    const [checkSelectModal, setcheckSelectModal] = useState(false)
    const [titleOfModal, settitleOfModal] = useState("title")

    const handleCancel = () => {
        setselectedProduct({})
        setcheckSelectModal(false)
    };
    const showModal = (product) => {
        product.createdAt = moment(product.createdAt)
        setselectedProduct(product)
        settitleOfModal("Chi tiết sản phẩm: " + product.name)
        setcheckSelectModal(true)

    };
    const onFormSubmit = (values) => {
        values.createdAt = values.createdAt.format("YYYY-MM-DD HH:mm:ss")

        console.log(values)

    };
    const footerOfDetailModal = [
        <Button key="back" onClick={() => handleCancel()}>

            Thoát
        </Button>,

        <Button form="detailForm" icon={<i className="fas fa-save"></i>}
            type="primary"
            key="submit" htmlType="submit"
        >
            &nbsp;Lưu thay đổi
        </Button>]

    return (
        <div>
            <Table rowKey="id" columns={columns} dataSource={listProductFromStore} pagination={false} scroll={{ y: 850 }} />
            {checkSelectModal && <Modal closable={false}
                style={{ top: 20 }}
                title={titleOfModal}
                visible={checkSelectModal}
                footer={footerOfDetailModal}
            >
                <div>


                    <Form id="detailForm"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 20 }}
                        layout="horizontal"
                        initialValues={selectedProduct}
                        onFinish={onFormSubmit}
                    >


                     
                        <Form.Item label="Tên sản phẩm:" name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Giá:" name="price">
                            <Input  />
                        </Form.Item>
                        <Form.Item label="Khuyến mãi:" name="discount">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Thuế:" name="tax">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Nguyên liệu:" name="material">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Nguồn gốc:" name="origin">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Thông tin:" name="description">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Ngày tạo:" name="createdAt">
                            <DatePicker format={dateFormat} />
                        </Form.Item>
                        <Form.Item label="" name="id" style={{ display: 'none' }}>
                            <Input type="hidden" />
                        </Form.Item>
                        <Form.Item name="active" label="Trạng thái" >
                            <Switch defaultChecked={selectedProduct.active}/>
                        </Form.Item>




                    </Form>
                    <Button type="primary" icon={<i className="fas fa-ban"></i>} danger style={{width:"100%"}} > &nbsp; Xoá sản phẩm</Button>
                </div>
            </Modal>}
        </div>
    )
}

export default ListProduct
