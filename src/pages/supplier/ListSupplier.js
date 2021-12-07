import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    Table, Tag, Button, Image, Avatar, Pagination, Modal, Form,
    Input, Select, DatePicker, Switch
} from 'antd';
import { getSuppliers } from '../../redux/action/actProduct';

const ListSupplier = () => {
    const dispatch = useDispatch();
    // const listSuppliersFromStore = useSelector((state) => state.suppliers);
    const listSupplierFromStore = [
        {
            "id": 1,
            "name": "supplier 1",
            "email": "email supplier 1",
            "address": "address supplier 1",
            "phone": "phone supplier 1"
        },
        {
            "id": 2,
            "name": "supplier 2",
            "email": "email supplier 2",
            "address": "address supplier 2",
            "phone": "phone supplier 2"
        },
        {
            "id": 3,
            "name": "supplier 3",
            "email": "email supplier 3",
            "address": "address supplier 3",
            "phone": "phone supplier 3"
        },
        {
            "id": 4,
            "name": "supplier 4",
            "email": "email supplier 4",
            "address": "address supplier 4",
            "phone": "phone supplier 4"
        },
        {
            "id": 5,
            "name": "supplier 1",
            "email": "email supplier 1",
            "address": "address supplier 1",
            "phone": "phone supplier 1"
        }
    ]
    useEffect(() => {
        dispatch(getSuppliers())
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên nhà cung cấp',
            dataIndex: 'name',
            key: 'name',
            render: text => <strong>{text}</strong>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            // width: '15%'
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            // width: '20%'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'address',
            key: 'address',

            // width: '20%'
        },
        {
            title: 'Chi tiết',
            key: 'lastOnline',
            render: obj => {
                return <div> <Button icon={<i className="fas fa-user-circle"></i>} type="primary" onClick={() => showModal(obj)} >&nbsp;&nbsp;Chi tiết</Button>

                </div>
            }
        }




    ]
    const [selectedSupplier, setselectedSupplier] = useState({})
    const [checkSelectModal, setcheckSelectModal] = useState(false)
    const [titleOfModal, settitleOfModal] = useState("title")

    const handleCancel = () => {
        setselectedSupplier({})
        setcheckSelectModal(false)
    };
    const showModal = (supplier) => {
        setselectedSupplier(supplier)
        settitleOfModal("Chi tiết nhà cung cấp: " + supplier.name)
        setcheckSelectModal(true)

    };
    const onFormSubmit = (values) => {

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

    //Add Supplier Modal

    const [isShowAddModal, setisShowAddModal] = useState(false)

    const handleCancelAddModal = () => {
        setisShowAddModal(false)
    };
    const showModalAdd = (supplier) => {
        setisShowAddModal(true)
    };
    const onFormSubmitAddModal = (values) => {

        console.log(values)

    };
    const footerOfAddModal = [
        <Button key="back" onClick={() => handleCancelAddModal()}>

            Thoát
        </Button>,

        <Button form="AddForm" icon={<i className="fas fa-save"></i>}
            type="primary"
            key="submit" htmlType="submit"
        >
            &nbsp;Thêm nhà cung cấp
        </Button>]


    return (
        <div >
            <div className="text-end" ><Button onClick={() => showModalAdd()} type="primary" icon={<i className="fas fa-plus-circle"></i>}> &nbsp;Thêm nhà cung cấp</Button></div>
            <Table style={{ marginTop: '15px' }} rowKey="id" columns={columns} dataSource={listSupplierFromStore} pagination={false} scroll={{ y: 850 }} />
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
                        initialValues={selectedSupplier}
                        onFinish={onFormSubmit}
                    >



                        <Form.Item label="Tên :" name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email:" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Địa chỉ: " name="address">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Số điện thoại:" name="phone">
                            <Input />
                        </Form.Item>




                    </Form>
                    <Button type="primary" icon={<i className="fas fa-ban"></i>} danger style={{ width: "100%" }} > &nbsp; Xoá sản phẩm</Button>
                </div>
            </Modal>}


            {isShowAddModal && <Modal closable={false}
                style={{ top: 20 }}
                title={<strong>Thêm nhà cung cấp</strong>}
                visible={isShowAddModal}
                footer={footerOfAddModal}
            >
                <div>


                    <Form id="AddForm"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 20 }}
                        layout="horizontal"
                        onFinish={onFormSubmitAddModal}
                    >



                        <Form.Item label="Tên :" name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email:" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Địa chỉ: " name="address">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Số điện thoại:" name="phone">
                            <Input />
                        </Form.Item>




                    </Form>
                </div>
            </Modal>}
        </div>
    )
}

export default ListSupplier
