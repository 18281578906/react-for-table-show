import React, { useEffect } from 'react';
import { Table } from 'antd';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
// import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'
// const DragHandle = sortableHandle(() => (
//   <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
// ));
const SortableItem = sortableElement(props => {
  return <tr {...props} className={props.className} />
});
const SortableContainer = sortableContainer(props => <tbody {...props} />);

const DragSortingTableMobile = (props) => {

  //遍历按钮
  const handleMapButton = (info) => {
    var button = document.getElementsByTagName('button');
    for (var i = 0; i < button.length; i++) {
      if (Object.keys(info).length <= 0) {
        if (button[i].innerText === '立即登录')
          button[i].disabled = false;
        else {
          button[i].disabled = true;
        }
      }
      if (info === '123456') {
        if (button[i].innerText === '维护时间导出' || button[i].innerText === '异常停机导出')
          button[i].disabled = true;
        else {
          button[i].disabled = false;
        }
      }
    }
  }


  useEffect(() => {
    handleMapButton(props.info)

  }, [props])
  let dataSource = props.data;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    // console.log( oldIndex, newIndex );
    props.moveLine({
      start: dataSource[oldIndex].order_id,
      end: dataSource[newIndex].order_id,
    })
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      // console.log('Sorted items: ', newData);
      dataSource = [...newData]
      // this.setState({ dataSource: newData });
    }
  };

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const sort = dataSource && dataSource.findIndex(x => x.sort === restProps['className']);
    return <SortableItem index={sort} {...restProps} className={className} />;
  };

  //*******************判断双击的事件 */
  //双击
  let isClick = false;
  // 点击次数
  let clickNum = 0;

  // 判断点击类型
  const getClickCount = (params) => {
    const doubleClick = props.clickColumn;
    clickNum++;

    // 毫秒内点击过后阻止执行定时器
    if (isClick) {
      return;
    }
    // 毫秒内第一次点击
    isClick = true;
    setTimeout(() => {
      // 超过1次都属于双击
      if (clickNum > 1) {
        doubleClick && doubleClick(params);
      }
      clickNum = 0;
      isClick = false;
    }, 300);
  };

  // const { dataSource } = this.state;
  const DraggableContainer = propsr => (
    <SortableContainer
      useDragHandle
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...propsr}
    />
  );
  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={props.columns}
      rowKey="sort"
      showHeader={props.showHeader}
      components={{
        body: {
          wrapper: props.info === '888888' && DraggableContainer,
          row: props.info === '888888' && DraggableBodyRow,
        },
      }}
      scroll={{ y: '170px' }}
      onRow={(record, index) => ({
        index,
        onClick: () => getClickCount(record),
      })}
      rowClassName={record => {
        if (record.status === 1 && record.tag === 3) { return 'table-color-dust'; }
        if (record.status === 1 && record.tag === 1) return 'table-yellow-dust';
        if (record.status === 1 && record.tag === 2) return 'table-red-dust';
      }}
    />
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(DragSortingTableMobile)
