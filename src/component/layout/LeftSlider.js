import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, NotificationOutlined, CommentOutlined, ControlOutlined } from '@ant-design/icons'

const LeftSlider = ({layoutSelectedIndex,onSelectedLayoutIndexChange}) => {
  const { Sider } = Layout
  const { SubMenu } = Menu
  // const [layoutSelectedKey, setlayoutSelectedKey] = useState(layoutSelectedIndex)
  const listIconOfSubMenu =[ <UserOutlined/>,<CommentOutlined />,<NotificationOutlined />,<ControlOutlined />]
  const subMenu = [{ key: "user", title: 'Tài khoản', items: [{ key: 1, content: 'Danh sách người dùng' }, { key: 2, content: 'Người dùng bị chặn' }, { key: 3, content: 'Thống kê' }] },
  { key: "message", title: 'Tin nhắn', items: [{ key: 4, content: 'Thống kê tổng quan' }, { key: 5, content: 'a' }, { key: 6, content: 'a' }] },
  { key: "system", title: 'Hệ thống', items: [{ key: 7, content: 'Báo cáo từ người dùng' }, { key: 8, content: 'a' }, { key: 9, content: 'a' }] },
  { key: "admin", title: 'Quản trị viên', items: [{ key: 10, content: 'Danh sách quản trị viên' }, { key: 11, content: 'Nhật ký hoạt động' }, { key: 12, content: 'a' }] }
    

]
  return (
    <Sider width={250} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['user']}
        style={{ height: '100%', borderRight: 0 }}
      >
       
        {
          subMenu.map((sub, index) => {
            return (
              <SubMenu key={sub.key} icon={listIconOfSubMenu[index]} title={sub.title}>
                {
                  sub.items.map((item, id) => {
                    return (
                      <Menu.Item key={item.key} onClick={()=>onSelectedLayoutIndexChange(item.key-1)}>{item.content}</Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    </Sider>
  )
}

export default LeftSlider
