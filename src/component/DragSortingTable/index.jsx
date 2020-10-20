import React, { useState , useCallback, useRef} from 'react';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Table} from 'antd';
import update from 'immutability-helper';

const RNDContext = createDndContext(HTML5Backend);

const type = 'DragableBodyRow';
  const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
    const ref = React.useRef();
    const [{ isOver, dropClassName }, drop] = useDrop({
      accept: type,
      collect: monitor => {
        const { index: dragIndex } = monitor.getItem() || {};
        if (dragIndex === index) {
          return {};
        }
        return {
          isOver: monitor.isOver(),
          dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
        };
      },
      drop: item => {
        moveRow(item.index, index);
      },
    });
    const [, drag] = useDrag({
      item: { type, index },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });
    drop(drag(ref));
    return (
      <tr
        ref={ref}
        className={`${className}${isOver ? dropClassName : ''}`}
        style={{ cursor: 'move', ...style }}
        {...restProps}
      />
    );
  };
  
  const DragSortingTable: React.FC = (props) => {  
    const columns = props.columns;
    const [data, setData] = useState(props.data);
    const components = {
      body: {
        row: DragableBodyRow,
      },
    };
    const moveRow = useCallback(
      (dragIndex, hoverIndex) => {
        const dragRow = data[dragIndex];
        console.log(dragIndex, hoverIndex);
        setData(
          update(data, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragRow],
            ],
          }),
        );
     
      },
      [data],
    );
    const manager = useRef(RNDContext);
 console.log(props.data)

    return (
      <DndProvider manager={manager.current.dragDropManager}>
        <Table
          columns={columns}
          dataSource={props.data}
          components={components}
          onRow={(record, index) => ({
            index,
            moveRow,
          })}
          showHeader={props.showHeader}
          pagination={props.pagination}
          rowSelection={props.rowSelection}
          scroll={{y:'170px'}}
          // bordered
          rowKey={(e)=>e.order_id}
        />
      </DndProvider>
    );
  };
  export default DragSortingTable;