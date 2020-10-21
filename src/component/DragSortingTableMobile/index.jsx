import React from 'react';
import { Table,Tooltip } from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
));

// const columns = [
//   {
//     title: '序号',
//     dataIndex: 'sort',
//     key: 'sort',
//     width: 100,
//     className: 'drag-visible',
//     render: () => <DragHandle />,

//   },
//   {
//     title: '销售订单',
//     dataIndex: 'order_id',
//     key: 'order_id',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: order_id => (
//       <Tooltip placement="topLeft" title={order_id}>
//         {order_id}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '购货单位',
//     dataIndex: 'customer_name',
//     key: 'customer_name',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: customer_name => (
//       <Tooltip placement="topLeft" title={customer_name}>
//         {customer_name}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '规格型号',
//     dataIndex: 'customer_model',
//     key: 'customer_model',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: customer_model => (
//       <Tooltip placement="topLeft" title={customer_model}>
//         {customer_model}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '产品规格(厚*宽*长*只)',
//     dataIndex: 'product_model',
//     key: 'product_model',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: product_model => (
//       <Tooltip placement="topLeft" title={product_model}>
//         {product_model}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '交货日期',
//     dataIndex: 'customer_require_date',
//     key: 'customer_require_date',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: customer_require_date => (
//       <Tooltip placement="topLeft" title={customer_require_date}>
//         {customer_require_date}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '开始时间',
//     dataIndex: 'start',
//     key: 'start',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: start => (
//       <Tooltip placement="topLeft" title={start}>
//         {start}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '预计完成时间',
//     dataIndex: 'pre_date',
//     key: 'pre_date',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: pre_date => (
//       <Tooltip placement="topLeft" title={pre_date}>
//         {pre_date}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '完成时间',
//     dataIndex: 'complete_date',
//     key: 'complete_date',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: complete_date => (
//       <Tooltip placement="topLeft" title={complete_date}>
//         {complete_date}
//       </Tooltip>
//     ),
//   },
//   // {
//   //   title: '投料单单号',
//   //   dataIndex: 'feed_id',
//   //   key: 'feed_id',
//   //   width: 100,
//   //   ellipsis: {
//   //     showTitle: false,
//   //   },
//   //   render: feed_id => (
//   //     <Tooltip placement="topLeft" title={feed_id}>
//   //       {feed_id}
//   //     </Tooltip>
//   //   ),
//   // },
//   {
//     title: '总平方数',
//     dataIndex: 'square',
//     key: 'square',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: square => (
//       <Tooltip placement="topLeft" title={square}>
//         {square}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '提供生产批号',
//     dataIndex: 'support_create_number',
//     key: 'support_create_number',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: support_create_number => (
//       <Tooltip placement="topLeft" title={support_create_number}>
//         {support_create_number}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '是否可接膜',
//     dataIndex: 'is_add_membrane',
//     key: 'is_add_membrane',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: is_add_membrane => (
//       <Tooltip placement="topLeft" title={is_add_membrane}>
//         {is_add_membrane}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '是否可多米',
//     dataIndex: 'is_more_mi',
//     key: 'is_more_mi',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: is_more_mi => (
//       <Tooltip placement="topLeft" title={is_more_mi}>
//         {is_more_mi}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '是否可少米',
//     dataIndex: 'is_less_mi',
//     key: 'is_less_mi',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: is_less_mi => (
//       <Tooltip placement="topLeft" title={is_less_mi}>
//         {is_less_mi}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '是否可彩纹印',
//     dataIndex: 'is_color_printing',
//     key: 'is_color_printing',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: is_color_printing => (
//       <Tooltip placement="topLeft" title={is_color_printing}>
//         {is_color_printing}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '是否可换规格',
//     dataIndex: 'is_change_specification',
//     key: 'is_change_specification',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: is_change_specification => (
//       <Tooltip placement="topLeft" title={is_change_specification}>
//         {is_change_specification}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '备注',
//     dataIndex: 'comment26',
//     key: 'comment26',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: comment26 => (
//       <Tooltip placement="topLeft" title={comment26}>
//         {comment26}
//       </Tooltip>
//     ),
//   },
//   {
//     title: '异常备注',
//     dataIndex: 'abnormal_comment',
//     key: 'abnormal_comment',
//     width: 100,
//     ellipsis: {
//       showTitle: false,
//     },
//     render: abnormal_comment => (
//       <Tooltip placement="topLeft" title={abnormal_comment}>
//         {abnormal_comment}
//       </Tooltip>
//     ),
//   },
//   // {
//   //   title: '操作',
//   //   width: 300,
//   //   render: (text, record) => ActionRender(text, record)
//   // },
// ];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class DragSortingTableMobile extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state={dataSource:props.data};
  //   console.log(props);
  // }
  
  state = {
    dataSource:[
      {
        abnormal_comment: "",
        comment26: "",
        complete_date: "",
        customer_model: "JHS0W000",
        customer_name: "北京宝优际电子有限公司",
        customer_require_date: "2020/10/14",
        equipment_id: 2,
        feed_id: "PBOM000498",
        is_add_membrane: "是",
        is_change_specification: "否",
        is_color_printing: "否",
        is_less_mi: "",
        is_more_mi: "否",
        order_id: "SEORD000309",
        plan: 26,
        pre_date: "",
        product_model: "25*1015*500*1R",
        sort: 12,
        square: "630",
        start: "",
        status: 1,
        support_create_number: "否",
        tag: "",
        sort:0
      },
      {
        abnormal_comment: "",
        comment26: "",
        complete_date: "",
        customer_model: "JHS0W000",
        customer_name: "北京宝优际电子有限公司",
        customer_require_date: "2020/10/14",
        equipment_id: 2,
        feed_id: "PBOM000498",
        is_add_membrane: "是",
        is_change_specification: "否",
        is_color_printing: "否",
        is_less_mi: "",
        is_more_mi: "否",
        order_id: "SEORD000309",
        plan: 26,
        pre_date: "",
        product_model: "25*1015*500*1R",
        sort: 13,
        square: "630",
        start: "",
        status: 1,
        support_create_number: "否",
        tag: "",
        sort:2
      },
      {
        abnormal_comment: "",
        comment26: "",
        complete_date: "",
        customer_model: "JHS0W000",
        customer_name: "北京宝优际电子有限公司",
        customer_require_date: "2020/10/14",
        equipment_id: 2,
        feed_id: "PBOM000498",
        is_add_membrane: "是",
        is_change_specification: "否",
        is_color_printing: "否",
        is_less_mi: "",
        is_more_mi: "否",
        order_id: "SEORD000309",
        plan: 26,
        pre_date: "",
        product_model: "25*1015*500*1R",
        sort: 14,
        square: "630",
        start: "",
        status: 1,
        support_create_number: "否",
        tag: "",
        index:3
      },
    ],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    console.log( oldIndex, newIndex );
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    console.log(dataSource);
    console.log(this.props);
    // function findIndex base on Table rowKey props and should always be a right array index
    const index =dataSource&& dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  render() {
    // const { dataSource } = this.state;
    const DraggableContainer = props => (
      <SortableContainer
        useDragHandle
        helperClass="row-dragging"
        onSortEnd={this.onSortEnd}
        {...props}
      />
    );
    return (
      <Table
        pagination={false}
        dataSource={this.props.data}
        columns={this.props.columns}
        rowKey="index"
        components={{
          body: {
            wrapper: DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      />
    );
  }
}
  export default DragSortingTableMobile;