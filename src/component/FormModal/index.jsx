import React from 'react';
import { Form, Button, Modal } from 'antd';
import './style.less';

const FormModal = (props) => {
  const data = props.clickData;
  const status = props.clickData.status;

  return (
 
      <Modal
        title={<p>序号为 <span style={{ color: 'red' }}>{data.sort}</span> 的数据展示</p>}
        visible={props.visibleColumn}
        footer={<div className="btn">
          {(status === 3||status === 2) ? <Button  type="primary" onClick={() => props.showQC(data)}>QC</Button> : ''}
          {status === 4 ? <Button onClick={() => props.showReset(data)}>恢复</Button> : ''}
          {status === 1 && !props.type2 ? <Button type="primary" onClick={() => props.showStart(data)}>开始</Button> : ''}
          {status === 2 ? <Button type="primary" onClick={() => props.showComplete(data)}>完成</Button> : ''}
          {(status === 2 || status === 1) ? <Button danger onClick={() => props.showError(data)}>异常</Button> : ''}
          {(status === 1 || status === 2 || status === 3) ? <Button danger onClick={() => props.showCard(data)}>二维码</Button> : ''}
        </div>}
        onCancel={() => props.setVisibleColumn(false)}
        width={800}
        bodyStyle={{
          height:500,
          overflowY: 'scroll',
          position: 'relative'
        }}
      >
           <div className="formPage">
        <Form
          layout="vertical"
        >
          <Form.Item label="序号">
            {data.sort}
          </Form.Item>
          <Form.Item label="销售订单">
            {data.order_id}
          </Form.Item>
          <Form.Item label="购货单位">
            {data.customer_name}
          </Form.Item>
          <Form.Item label="规格型号">
            {data.customer_model}
          </Form.Item>
          <Form.Item label="产品规格(厚*宽*长*只)">
            {data.product_model}
          </Form.Item>
          <Form.Item label="交货方式">
            {data.delivery_type}
          </Form.Item>
          <Form.Item label="开始时间">
            {data.start}
          </Form.Item>
          <Form.Item label="预计完成时间">
            {data.pre_date}
          </Form.Item>
          <Form.Item label="完成时间">
            {data.complete_date}
          </Form.Item>
          <Form.Item label="条码物料名称">
            {data.code_materials_name}
          </Form.Item>
          <Form.Item label="总平方数">
            {data.square}
          </Form.Item>
          <Form.Item label="交货日期">
            {data.customer_require_date}
          </Form.Item>
          <Form.Item label="提供生产批号">
            {data.support_create_number}
          </Form.Item>
          <Form.Item label="是否可接膜">
            {data.is_add_membrane}
          </Form.Item>
          <Form.Item label="是否可多米">
            {data.is_more_mi}
          </Form.Item>
          <Form.Item label="是否可少米">
            {data.is_less_mi}
          </Form.Item>
          <Form.Item label="是否可彩纹印">
            {data.is_color_printing}
          </Form.Item>
          <Form.Item label="是否可换规格">
            {data.is_change_specification}
          </Form.Item>
          <Form.Item label="长">
            {data.length}
          </Form.Item>
          <Form.Item label="宽">
            {data.width}
          </Form.Item>
          <Form.Item label="扣减数">
            {data.decuction_number}
          </Form.Item>

          <Form.Item label="仓库">
            {data.store}
          </Form.Item>
          <Form.Item label="是否抵消">
            {data.is_offset}
          </Form.Item>
          <Form.Item label="线别名称">
            {data.code_materials}
          </Form.Item>
          <Form.Item label="预计入库时间">
            {data.code_materials_befor}
          </Form.Item>

          <Form.Item label="管材类型">
            {data.pipe_type}
          </Form.Item>

          <Form.Item label="行业">
            {data.customer_use_industry}
          </Form.Item>

       
          <Form.Item label="备注">
            {data.comment26}
          </Form.Item>
          <Form.Item label="异常备注">
            {data.abnormal_comment}
          </Form.Item>
        </Form>
</div>
      </Modal>

  )

}
export default FormModal;