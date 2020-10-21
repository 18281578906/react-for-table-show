import React from 'react';
import { Table } from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
// import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';

// const DragHandle = sortableHandle(() => (
//   <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
// ));
const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

const DragSortingTableMobile=(props)=>{
  let dataSource=props.data;

 const onSortEnd = ({ oldIndex, newIndex }) => {
    // console.log( oldIndex, newIndex );
    props.moveLine({
      start:dataSource[oldIndex].order_id,
      end:dataSource[newIndex].order_id,
    })
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      // console.log('Sorted items: ', newData);
      dataSource=[...newData]
      // this.setState({ dataSource: newData });
    }
  };

 const  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const sort =dataSource&& dataSource.findIndex(x => x.sort === restProps['data-row-key']);
    return <SortableItem index={sort} {...restProps} />;
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
            wrapper: DraggableContainer,
            row:DraggableBodyRow,
          },
        }}
        scroll={{y:'170px'}}

      />
    );

}

  export default DragSortingTableMobile;